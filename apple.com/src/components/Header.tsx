import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Menu.css";

export default function Header() {
  const [logoMenuOpen, setLogoMenuOpen] = useState(false);
  const [comprarMenuOpen, setComprarMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo Apple como botão invisível */}
    <div className="logo">
  <Link to="/apple-showcase" className="logo-link">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      alt="Apple Logo"
    />
  </Link>
</div>

      <nav className="nav">
        <Link to="/">Loja</Link>
        <Link to="/iphone">iPhone</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/airpods">AirPods</Link>
        <Link to="/tvhome">TV & Home</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/accessories">Accessories</Link>
        {/* Novo link para ID Apple */}
  <Link to="/idapple">ID Apple</Link>
        <Link to="/support">Suporte</Link>
      
        <button
          className="nav-btn"
          onClick={() => setComprarMenuOpen(!comprarMenuOpen)}
        >
          Comprar
        </button>
      </nav>


      
      

      <div className={`submenu comprar-menu ${comprarMenuOpen ? "active" : ""}`}>
        <h3>Modelos disponíveis</h3>
        <Link to="/iphone17pro">iPhone 17 Pro Max — US$ 1.199</Link>
        <Link to="/iphone17">iPhone 17 Pro — US$ 1.099</Link>
        <Link to="/iphone16pro">iPhone 16 Pro Max — US$ 1.099</Link>
        <Link to="/iphone16">iPhone 16 Pro — US$ 999</Link>
      </div>

      
      {/* Menus extras (Busca + Sacola) */}
      <div className="header-icons">
        {/* Menu Busca */}
        <Link to="/search" className="icon">
          <img src="/apple-search.png" alt="Buscar" className="icon-img" />
        </Link>

        {/* Menu Sacola */}
        <Link to="/cart" className="icon">
          <img src="https://img.icons8.com/?size=100&id=3686&format=png" alt="Sacola" className="icon-img" />
        </Link>
      </div>

    


    </header>
  );
}