import { useState } from "react";

const Player = ({ number, position, role }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Colores dependiendo del rol
  const roleColors = {
    goalkeeper: "bg-yellow-300",
  };

  const playerColor = roleColors[role] || "bg-gray-500";

  return (
    <div className="flex flex-col items-center absolute" style={{ ...position }}>
      {/* Círculo del jugador */}
      <div
        className={`player w-8 h-8 rounded-full ${playerColor} text-white flex items-center justify-center shadow-lg transition-transform transform hover:scale-110`}
      >
        {number}
      </div>

      {/* Input para el nombre del jugador */}
      <input
        type="text"
        className="text-sm text-center text-white mt-2 bg-black bg-opacity-50 px-2 rounded outline-none w-20"
        placeholder="Nombre"
        value={name}
        maxLength={12}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default Player;
