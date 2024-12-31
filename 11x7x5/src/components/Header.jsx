import { useColorContext } from "../context/ColorContext";

const Header = () => {
  const { changeFieldColor, changePlayerColor } = useColorContext();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">11x7x5</h1>
      <div className="flex space-x-4">
        {/* Botón para cambiar el color de la cancha */}
        <button
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
          onClick={() =>
            changeFieldColor((prevColor) => (prevColor === "bg-green-600" ? "bg-blue-600" : "bg-green-600"))
          }
        >
          Cambiar color de la cancha
        </button>

        {/* Botón para cambiar el color de las camisetas */}
        <button
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
          onClick={() =>
            changePlayerColor((prevColor) => (prevColor === "bg-red-600" ? "bg-yellow-600" : "bg-red-600"))
          }
        >
          Cambiar color de camisetas
        </button>
      </div>
    </header>
  );
};

export default Header;
