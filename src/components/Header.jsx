import { useColorContext } from "../context/ColorContext";
import { useState } from "react";

const Header = () => {
  const { changeFieldColor, changePlayerColor } = useColorContext();
  const fieldColors = ["bg-green-600", "bg-blue-600", "bg-purple-600"];
  const playerColors = ["bg-red-600", "bg-blue-400", "bg-black-200", "bg-pink-600"];
  const [fieldColorIndex, setFieldColorIndex] = useState(0);
  const [playerColorIndex, setPlayerColorIndex] = useState(0);

  const handleFieldColorChange = () => {
    const nextIndex = (fieldColorIndex + 1) % fieldColors.length;
    setFieldColorIndex(nextIndex);
    changeFieldColor(fieldColors[nextIndex]);
  };

  const handlePlayerColorChange = () => {
    const nextIndex = (playerColorIndex + 1) % playerColors.length;
    setPlayerColorIndex(nextIndex);
    changePlayerColor(playerColors[nextIndex]);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">11x7x5</h1>
      <div className="flex space-x-4">
        {/* Botón para cambiar el color de la cancha */}
        <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-500" onClick={handleFieldColorChange}>
          Cambiar color de la cancha
        </button>

        {/* Botón para cambiar el color de las camisetas */}
        <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-500" onClick={handlePlayerColorChange}>
          Cambiar color de camisetas
        </button>
      </div>
    </header>
  );
};

export default Header;
