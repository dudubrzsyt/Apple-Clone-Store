import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css"; // importa o CSS do menu

export default function Header() {
  const [logoMenuOpen, setLogoMenuOpen] = useState(false);
  const [comprarMenuOpen, setComprarMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          onClick={() => setLogoMenuOpen(!logoMenuOpen)}
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

        
      </nav>

      {/* Submenu da logo */}
      <div className={`submenu ${logoMenuOpen ? "active" : ""}`}>
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

      {/* Submenu específico para Comprar */}
      <div className={`submenu comprar-menu ${comprarMenuOpen ? "active" : ""}`}>
        <h3>Modelos disponíveis</h3>
        <Link to="/iphone17pro">iPhone 17 Pro Max — US$ 1.199</Link>
        <Link to="/iphone17">iPhone 17 Pro — US$ 1.099</Link>
        <Link to="/iphone16pro">iPhone 16 Pro Max — US$ 1.099</Link>
        <Link to="/iphone16">iPhone 16 Pro — US$ 999</Link>
      </div>
    </header>
  );
}