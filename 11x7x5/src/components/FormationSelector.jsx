const FormationSelector = ({ onSelectFormation }) => {
  const formations = [
    {
      name: "2-3-1",
      positions: [
        { number: 1, x: 0, y: 45, role: "goalkeeper" }, // Portero
        { number: 2, x: 20, y: 25 }, // Defensa izquierda
        { number: 3, x: 20, y: 65 }, // Defensa derecha
        { number: 4, x: 50, y: 25 }, // Medio izquierdo
        { number: 5, x: 50, y: 45 }, // Medio central
        { number: 6, x: 50, y: 65 }, // Medio derecho
        { number: 7, x: 80, y: 45 }, // Delantero
      ],
    },
    {
      name: "3-2-1",
      positions: [
        { number: 1, x: 0, y: 45, role: "goalkeeper" }, // Portero
        { number: 2, x: 20, y: 15 }, // Defensa izquierda
        { number: 3, x: 20, y: 45 }, // Defensa central
        { number: 4, x: 20, y: 75 }, // Defensa derecha
        { number: 5, x: 50, y: 30 }, // Medio izquierdo
        { number: 6, x: 50, y: 60 }, // Medio derecho
        { number: 7, x: 80, y: 45 }, // Delantero
      ],
    },
    {
      name: "2-2-2",
      positions: [
        { number: 1, x: 0, y: 45, role: "goalkeeper" }, // Portero
        { number: 2, x: 20, y: 25 }, // Defensa izquierda
        { number: 3, x: 20, y: 65 }, // Defensa derecha
        { number: 4, x: 50, y: 25 }, // Medio izquierdo
        { number: 5, x: 50, y: 65 }, // Medio derecho
        { number: 6, x: 75, y: 30 }, // Delantero izquierdo
        { number: 7, x: 75, y: 60 }, // Delantero derecho
      ],
    },
    {
      name: "1-3-2",
      positions: [
        { number: 1, x: 0, y: 45, role: "goalkeeper" }, // Portero
        { number: 2, x: 20, y: 45 }, // Defensa central
        { number: 3, x: 50, y: 15 }, // Medio izquierdo
        { number: 4, x: 50, y: 45 }, // Medio central
        { number: 5, x: 50, y: 75 }, // Medio derecho
        { number: 6, x: 80, y: 35 }, // Delantero izquierdo
        { number: 7, x: 80, y: 55 }, // Delantero derecho
      ],
    },
  ];

  return (
    <div className="formation-selector p-4">
      <h2>Selecciona una Formación</h2>
      <ul>
        {formations.map((formation, index) => (
          <li
            className="hover:cursor-pointer"
            key={index}
            onClick={() => onSelectFormation(formation.positions)} // Asegúrate de pasar `positions`
          >
            {formation.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormationSelector;
