import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Menu.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Botão menu mobile */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Navegação principal */}
      <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>
        <Link to="/">Loja</Link>
        <Link to="/iphone">iPhone</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/airpods">AirPods</Link>
        <Link to="/tvhome">TV & Home</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/idapple">ID Apple</Link>
        <Link to="/support">Suporte</Link>
        



        {/* Botão com sacola e lupa */}
        <div className="nav-icons">
          {/* Sacola Apple → redireciona para ComprarPage */}
          <Link to="/comprar" className="icon-btn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AE0afJ_8VxhQZpDEpEwVbxn6sEdbq7GZAg&s"
              alt="Sacola Apple"
              className="icon-image"
            />
          </Link>

          {/* Lupa → abre campo de busca */}
          <button
            className="icon-btn"
            onClick={() => alert("Abrir busca...")}
          >
            <img
              src="https://thumbs.dreamstime.com/b/%C3%ADcone-da-busca-lupa-lente-de-aumento-do-vetor-ou-sinal-131148363.jpg"
              alt="Buscar"
              className="icon-image"
            />
          </button>
        </div>



      </nav>
    </header>
  );
}