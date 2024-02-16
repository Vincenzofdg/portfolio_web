import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

import HeyPet from "./Clients/HeyPet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {/* Clients */}
      <Route path="/app-hey-pet" element={<HeyPet />} />
    </Routes>
  )
}

export default AppRoutes;
