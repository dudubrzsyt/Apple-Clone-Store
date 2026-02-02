import React from "react";
import { Link } from "react-router-dom";
import "../styles/ComprarPage.css";

const ComprarPage: React.FC = () => {
  return (
    <main className="comprar-page">
      <section className="hero">
        <h1 className="hero-title">Comprar iPhone</h1>
        <p className="hero-subtitle">
          Explore os modelos disponíveis e escolha o seu.
        </p>
      </section>

      {/* Lista de modelos */}
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

      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default ComprarPage;