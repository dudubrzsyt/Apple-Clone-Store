import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Iphone from "../pages/IPhone";
import AirPods from "../pages/AirPods";
import Mac from "../pages/Mac";
import Ipad from "../pages/Ipad";
import Watch from "../pages/Watch";
import Entertainment from "../pages/Entertainment";
import TVHome from "../pages/TvHome";
import Accessories from "../pages/Accessories";
import Support from "../pages/Support";

import Header from "../components/Header";
import Footer from "../components/footer";

export default function AppRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/tvhome" element={<TVHome />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    
      <Footer />
    </Router>
  );
}
