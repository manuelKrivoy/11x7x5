import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const ColorContext = createContext();

// Proveedor del contexto
export const ColorProvider = ({ children }) => {
  const [fieldColor, setFieldColor] = useState("bg-green-600"); // Color del fondo de la cancha
  const [playerColor, setPlayerColor] = useState("bg-red-600"); // Color de las camisetas de los jugadores

  // Funciones para actualizar los colores
  const changeFieldColor = (color) => setFieldColor(color);
  const changePlayerColor = (color) => setPlayerColor(color);

  return (
    <ColorContext.Provider value={{ fieldColor, playerColor, changeFieldColor, changePlayerColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useColorContext = () => useContext(ColorContext);

export default ColorContext;
