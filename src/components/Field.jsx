import PitchLines from "./PitchLines";
import Player from "./Player";
import { useColorContext } from "../context/ColorContext";
const Field = ({ formation }) => {
  const { fieldColor, playerColor } = useColorContext();
  return (
    <PitchLines bg={fieldColor}>
      {formation.map((player, index) => (
        <Player
          key={index}
          number={player.number}
          position={{
            top: `${player.y}%`, // Asegúrate de usar comillas invertidas correctamente
            left: `${player.x}%`, // También aquí
          }}
          role={player.role}
          color={playerColor}
        />
      ))}
    </PitchLines>
  );
};

export default Field;
