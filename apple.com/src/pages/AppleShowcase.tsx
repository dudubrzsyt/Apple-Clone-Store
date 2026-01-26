import React from "react";
import "../styles/AppleShowcase.css";
import { Link } from "react-router-dom";

export default function AppleShowcase() {
  return (
    <main className="apple-showcase">
      {/* Hero principal */}
      <section className="hero iphone">
        <div className="hero-content">
          <h1>iPhone 17 Pro</h1>
          <p>O futuro chegou. Mais rápido, mais inteligente, mais Pro.</p>
          <div className="cta">
            <Link to="/comprar-iphone17pro" className="btn">Comprar</Link>
            <Link to="/iphone17pro" className="btn-secondary">Saiba mais</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.zst.com.br/thumbs/12/2c/3a/-1584066151.jpg" alt="iPhone 17 Pro" />
        </div>
      </section>

      {/* Hero secundário */}
      <section className="hero iphone max">
        <div className="hero-content">
          <h1>iPhone 17 Pro Max</h1>
          <p>Tela maior, desempenho máximo. O Pro levado ao extremo.</p>
          <div className="cta">
            <Link to="/comprar-iphone17promax" className="btn">Comprar</Link>
            <Link to="/iphone17promax" className="btn-secondary">Saiba mais</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://m.media-amazon.com/images/I/41KOxRsuiiL._AC_SX522_.jpg" alt="iPhone 17 Pro Max" />
        </div>
      </section>

      {/* MacBook M4 */}
      <section className="hero macbook">
        <div className="hero-content">
          <h1>MacBook Pro com chip M4</h1>
          <p>Potência revolucionária. Design impecável. O notebook definitivo para profissionais.</p>
          <div className="cta">
            <Link to="/comprar-macbookm4" className="btn">Comprar</Link>
            <Link to="/macbookm4" className="btn-secondary">Saiba mais</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.zst.com.br/thumbs/12/16/15/-1446102220.jpg" alt="MacBook M4" />
        </div>
      </section>

      {/* Seção comparativa */}
      <section className="compare">
        <h2>Compare os modelos</h2>
        <div className="compare-grid">
          <div className="compare-card">
            <img src="https://m.magazineluiza.com.br/a-static/420x420/iphone-17-pro-apple-256gb-camera-tripla-fusion-de-48mp-tela-6-3-super-retina-xdr-azul-intenso/kabum/925348/34016e8a7180fd8434eafaff435e84dd.jpeg" alt="iPhone 17 Pro" />
            <h3>iPhone 17 Pro</h3>
            <ul>
              <li>Tela 6.1"</li>
              <li>Chip A19 Pro</li>
              <li>3 câmeras Pro</li>
              <li>Armazenamento até 1TB</li>
            </ul>
          </div>
          <div className="compare-card">
            <img src="https://m.media-amazon.com/images/I/51nj2ICJyeL._AC_SX522_.jpg" alt="iPhone 17 Pro Max" />
            <h3>iPhone 17 Pro Max</h3>
            <ul>
              <li>Tela 6.7"</li>
              <li>Chip A19 Pro</li>
              <li>3 câmeras Pro + Telefoto</li>
              <li>Armazenamento até 2TB</li>
            </ul>
          </div>
          <div className="compare-card">
            <img src="https://www.detonashop.com.br/media/mf_webp/png/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/m/x/mx2u3a.webp" alt="MacBook M4" />
            <h3>MacBook Pro M4</h3>
            <ul>
              <li>Tela Liquid Retina XDR</li>
              <li>Chip M4 Ultra</li>
              <li>Até 128GB RAM</li>
              <li>Armazenamento até 8TB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção de destaques técnicos */}
      <section className="features">
        <h2>Destaques técnicos</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Performance</h3>
            <p>Processadores de última geração para velocidade incomparável.</p>
          </div>
          <div className="feature">
            <h3>Design</h3>
            <p>Materiais premium e acabamento impecável.</p>
          </div>
          <div className="feature">
            <h3>Segurança</h3>
            <p>Face ID, Touch ID e criptografia avançada.</p>
          </div>
          <div className="feature">
            <h3>Ecossistema</h3>
            <p>Integração perfeita entre iPhone, Mac, iPad e Apple Watch.</p>
          </div>
        </div>
      </section>

      {/* Seção de chamada final */}
      <section className="cta-final">
        <h2>Pronto para evoluir?</h2>
        <p>Descubra o poder dos novos dispositivos Apple e leve sua experiência ao próximo nível.</p>
        <Link to="/comprar" className="btn">Ver opções de compra</Link>
      </section>
    </main>
  );
}