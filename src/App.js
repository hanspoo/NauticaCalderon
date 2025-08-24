import "./App.css";

import BoatsPage from "./pages/boatslistpage";
import PageMain from "./pages/pagemain";
import { Routes, Route } from "react-router-dom";
import { BoteContainer } from "./container/BoteContainer";
import { MapaUbicacion } from "./components/MapaUbicacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/index.html" element={<PageMain />} />
      <Route path="/Listadebotes" element={<BoatsPage />} />
      <Route
        path="/mapa"
        element={<MapaUbicacion lan={-39.287412} lon={-71.945446} />}
      />
      <Route path="/Listadebotes/:id" element={<BoteContainer />} />
    </Routes>
  );
}

export default App;
