import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

import Overview from "./Clients/Overview";
import HeyPet from "./Clients/HeyPet";
import Pesquisa from "./Clients/Pesquisa";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {/* Clients */}
      <Route path="/overview" element={<Overview />} />
      <Route path="/app-hey-pet" element={<HeyPet />} />
      <Route path="/pesquisa/:search" element={<Pesquisa />} />
    </Routes>
  )
}

export default AppRoutes;
