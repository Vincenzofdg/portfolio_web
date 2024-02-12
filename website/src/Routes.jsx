import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShowCases from "./Pages/ShowCases";
import Projects from "./Pages/Projects";
import NotFound from "./Pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show-cases" element={<ShowCases />} />
      <Route path="/projects" element={<Projects />} />
      // Not Found
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;