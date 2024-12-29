const Field = ({ formation }) => {
  return (
    <div className="relative bg-green-600 m-auto w-[80%] h-[60%] rounded-lg shadow-lg border-4 border-white">
      {/* Líneas centrales y círculo */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Línea central */}
        <div className="absolute top-0 left-[50%] h-full w-[2px] bg-white -translate-x-1/2"></div>

        {/* Círculo central */}
        <div className="absolute top-[50%] left-[50%] w-[20%] h-[20%] border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Punto central */}
        <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Área grande (Izquierda) */}
        <div className="absolute top-[25%] left-0 w-[10%] h-[50%] border border-white"></div>

        {/* Área grande (Derecha) */}
        <div className="absolute top-[25%] right-0 w-[10%] h-[50%] border border-white"></div>

        {/* Área chica (Izquierda) */}
        <div className="absolute top-[37.5%] left-0 w-[5%] h-[25%] border border-white"></div>

        {/* Área chica (Derecha) */}
        <div className="absolute top-[37.5%] right-0 w-[5%] h-[25%] border border-white"></div>

        {/* Punto penal (Izquierda) */}
        <div className="absolute top-[50%] left-[8%] w-2 h-2 bg-white rounded-full -translate-y-1/2"></div>

        {/* Punto penal (Derecha) */}
        <div className="absolute top-[50%] right-[8%] w-2 h-2 bg-white rounded-full -translate-y-1/2"></div>
      </div>

      {/* Renderizado de jugadores */}
      {formation.map((player, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${player.y}%`,
            left: `${player.x}%`,
          }}
          className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full"
        >
          {player.number}
        </div>
      ))}
    </div>
  );
};

export default Field;
