const FormationSelector = ({ onSelectFormation }) => {
  const formations = [
    {
      name: "4-4-2",
      positions: [
        { number: 1, x: 3, y: 45 },
        { number: 2, x: 18, y: 10 },
        { number: 3, x: 15, y: 30 },
        { number: 4, x: 15, y: 60 },
        { number: 5, x: 18, y: 85 },
        { number: 6, x: 50, y: 50 },
        { number: 7, x: 67, y: 50 },
        { number: 8, x: 20, y: 30 },
        { number: 9, x: 50, y: 30 },
        { number: 10, x: 90, y: 40 },
        { number: 11, x: 90, y: 60 },
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
