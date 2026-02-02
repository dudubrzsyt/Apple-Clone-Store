import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Menu.css";

export default function Header() {
  const [comprarMenuOpen, setComprarMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo Apple */}
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
        <Link to="/support">Support</Link>

        <button
          className="nav-btn"
          onClick={() => setComprarMenuOpen(!comprarMenuOpen)}
        >
          Comprar
        </button>
      </nav>
    </header>
  );
}