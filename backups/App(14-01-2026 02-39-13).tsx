import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Header from "./components/Header"; // se você tiver um Header global
import IdApple from "./pages/IdApple"; // nova página Apple ID
import Menu from "./components/MenuExemplo"; // nova página Menu
import Maca from "./pages/Maca";

function App() {
  return (
    <BrowserRouter>
      {/* Header aparece em todas as páginas */}
      <Header />

      <Routes>
         <Route path="/" element={<Home />} />   {/* agora a home é Home.tsx */}
        <Route path="/" element={<Mac />} /> {/* Página inicial */}
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<IPhone />} />
        <Route path="/ipad" element={<IPad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tvhome" element={<TvHome />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/support" element={<Support />} />
         <Route path="/idapple" element={<IdApple />} /> {/* nova rota */}
        <Route path="/menu" element={<Menu />} /> {/* nova rota para o menu */}
          <Route path="/maca" element={<Maca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;