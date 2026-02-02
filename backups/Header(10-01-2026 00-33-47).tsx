import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
          alt="Apple Logo" 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>

      <nav className="nav">
        <Link to="/">Apple</Link>
        <Link to="/iphone">iPhone</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/airpods">AirPods</Link>
        <Link to="/tvhome">TV & Home</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/support">Support</Link>
        <Link to="/comprar">Comprar</Link> {/* agora igual aos outros */}


      </nav>

      {/* Submenu aparece quando clica na logo */}
      <div className={`submenu ${menuOpen ? "active" : ""}`}>
        <Link to="/iphone">iPhone</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/airpods">AirPods</Link>
        <Link to="/tvhome">TV & Home</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/support">Support</Link>
      </div>
    </header>
  );
}