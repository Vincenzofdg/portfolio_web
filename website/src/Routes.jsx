import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShowCases from "./Pages/ShowCases";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import HeyPet from "./Clients/HeyPet";
import NotFound from "./Pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show-cases" element={<ShowCases />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      // Clients
      <Route path="/app-hey-pet" element={<HeyPet />} />
      // Not Found
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;