import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WebSites from "./Pages/WebSites";
import Apps from "./Pages/Apps";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/websites" element={<WebSites />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/products" element={<Products />} />
      // Not Found
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;