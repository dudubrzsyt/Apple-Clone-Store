import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

// importa todas as páginas
import Home from "./pages/Home";
import Mac from "./pages/Mac";
import IPhone from "./pages/IPhone";
import IPad from "./pages/Ipad";
import Watch from "./pages/Watch";
import AirPods from "./pages/AirPods";
import Accessories from "./pages/Accessories";
import TvHome from "./pages/TvHome";
import Entertainment from "./pages/Entertainment";
import Support from "./pages/Support";
import Header from "./components/Header"; 
import IdApple from "./pages/IdApple"; 
import Menu from "./components/MenuExemplo"; 
import AppleMenu from "./pages/AppleMenu"; 
import AppleShowcase from "./pages/AppleShowcase";
import Buscar from "./pages/Buscar";
import Compras from "./pages/Compras";
import Icloud from "./pages/Icloud";
import Iphone17Pro from "./pages/Iphone17Pro"; 
import Iphone17ProMax from "./pages/Iphone17ProMax";
import MacbookM4 from "./pages/MacbookM4";
import ComprarIphone17Pro from "./pages/ComprarIphone17Pro";
import ComprarIphone17ProMax from "./pages/ComprarIphone17ProMax";
import ComprarMacbookM4 from "./pages/ComprarMacbookM4";
import BetaTests1 from "./routes/BetaTests1";
                 

function App() {
  return (
    <BrowserRouter>
      {/* Header aparece em todas as páginas */}
      <Header />

      <Routes>
        {/* Páginas principais */}
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<IPhone />} />
        <Route path="/ipad" element={<IPad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tvhome" element={<TvHome />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/idapple" element={<IdApple />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/apple-menu" element={<AppleMenu />} />
        <Route path="/apple-showcase" element={<AppleShowcase />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/icloud" element={<Icloud />} />      
        <Route path="/beta-tests-1" element={<BetaTests1 />} />

        {/* Páginas de produto */}
        <Route path="/iphone17pro" element={<Iphone17Pro />} />
        <Route path="/iphone17promax" element={<Iphone17ProMax />} />
        <Route path="/macbookm4" element={<MacbookM4 />} />

        {/* Páginas de compra */}
        <Route path="/comprar-iphone17pro" element={<ComprarIphone17Pro />} />
        <Route path="/comprar-iphone17promax" element={<ComprarIphone17ProMax />} />
        <Route path="/comprar-macbookm4" element={<ComprarMacbookM4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;