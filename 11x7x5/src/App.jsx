import { useState } from "react";
import Header from "./components/Header";
import Field from "./components/Field";
import FormationSelector from "./components/FormationSelector";
import { ColorProvider } from "./context/ColorContext";
const App = () => {
  // Estado para la formación seleccionada
  const [formation, setFormation] = useState([]);

  const handleSelectFormation = (selectedFormation) => {
    setFormation(selectedFormation);
  };

  return (
    <ColorProvider>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header */}
        <Header />

        {/* Contenido Principal */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-200 p-4">
            <h2 className="text-lg font-bold mb-4">Opciones</h2>
            <FormationSelector onSelectFormation={handleSelectFormation} />
          </div>

          {/* Cancha */}
          <div className="flex-1 flex items-center justify-center">
            <Field formation={formation} />
          </div>
        </div>
      </div>
    </ColorProvider>
  );
};

export default App;
