import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Overview from "./Pages/Overview;"
import NotFound from "./Pages/NotFound";

// import HeyPet from "./Pages/Clients/HeyPet";
// import AuMigo from "./Pages/Clients/AuMigo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/overview" element={<Overview />} /> */}
      <Route path="*" element={<NotFound />} />
      {/* Clients */}
      {/* <Route path="/hey-pet" element={<HeyPet />} /> */}
      {/* <Route path="/aumigo" element={<AuMigo />} /> */}
    </Routes>
  )
}

export default AppRoutes;
