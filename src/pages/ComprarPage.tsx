import React from "react";
import { Link } from "react-router-dom";
import "../styles/ComprarPages.css";

const ComprarPage: React.FC = () => {
  return (
    <main className="comprar-page">
      {/* 🔹 Menu superior separado */}
      <nav className="top-nav">
        <div className="nav-left">
          <Link to="/" className="nav-logo"> Loja Apple</Link>
        </div>
        <div className="nav-right">
          {/* Buscar */}
          <Link to="/comprar" className="nav-icon">
            <img
              src="https://thumbs.dreamstime.com/b/%C3%ADcone-da-busca-lupa-lente-de-aumento-do-vetor-ou-sinal-131148363.jpg"
              alt="Buscar"
              className="icon-image"
            />
            <span>Buscar</span>
          </Link>

          {/* Sacola */}
          <Link to="/comprar" className="nav-icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AE0afJ_8VxhQZpDEpEwVbxn6sEdbq7GZAg&s"
              alt="Sacola Apple"
              className="icon-image"
            />
            <span>Sacola</span>
          </Link>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Comprar iPhone</h1>
        <p className="hero-subtitle">
          Explore os modelos disponíveis e escolha o seu.
        </p>
      </section>

      {/* 🔹 Lista de modelos */}
      <section className="models-section">
        <h2 className="section-title">Modelos disponíveis</h2>
        <div className="models-grid">
          <div className="model-card">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max"
              alt="iPhone 17 Pro Max"
              className="model-image"
            />
            <h3>iPhone 17 Pro Max</h3>
            <p className="model-price">US$ 1.199</p>
            <Link to="/iphone17pro" className="model-btn">Comprar</Link>
          </div>

          <div className="model-card">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro"
              alt="iPhone 17 Pro"
              className="model-image"
            />
            <h3>iPhone 17 Pro</h3>
            <p className="model-price">US$ 1.099</p>
            <Link to="/iphone17" className="model-btn">Comprar</Link>
          </div>

          <div className="model-card">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max"
              alt="iPhone 16 Pro Max"
              className="model-image"
            />
            <h3>iPhone 16 Pro Max</h3>
            <p className="model-price">US$ 1.099</p>
            <Link to="/iphone16pro" className="model-btn">Comprar</Link>
          </div>

          <div className="model-card">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro"
              alt="iPhone 16 Pro"
              className="model-image"
            />
            <h3>iPhone 16 Pro</h3>
            <p className="model-price">US$ 999</p>
            <Link to="/iphone16" className="model-btn">Comprar</Link>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default ComprarPage;