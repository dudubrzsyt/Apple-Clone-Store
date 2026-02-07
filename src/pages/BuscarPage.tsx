import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BuscarPage.css";

const BuscarPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Você buscou por: ${query}`);
  };

  return (
    <main className="buscar-page">
      {/* 🔹 Header minimalista */}
      <header className="buscar-header">
        <h1 className="buscar-logo"> Buscar</h1>
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      

      {/* 🔹 Campo de busca */}
      <section className="buscar-section">
        <form onSubmit={handleSearch} className="buscar-form">
          <input
            type="text"
            placeholder="Buscar produtos, acessórios..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="buscar-input"
          />
          <button type="submit" className="buscar-btn">🔍</button>
        </form>
      </section>

      {/* 🔹 Resultados simulados */}
      <section className="buscar-results">
        {query ? (
          <p className="buscar-feedback">
            Resultados para <strong>{query}</strong>
          </p>
        ) : (
          <p className="buscar-feedback">Digite algo para buscar</p>
        )}
      </section>

      {/* 🔹 Menu lateral com fundo opaco */}
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-panel">
            <button 
              className="close-btn" 
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <nav className="menu-links">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/comprar" onClick={() => setMenuOpen(false)}>Comprar</Link>
              <Link to="/buscar" onClick={() => setMenuOpen(false)}>Buscar</Link>
              <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            </nav>
          </div>
        </div>
      )}
    </main>
  );
};

export default BuscarPage;