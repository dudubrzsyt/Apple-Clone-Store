import React, { useEffect } from "react";
import "../styles/AppleShowcase.css";
import { Link } from "react-router-dom";

/**
 * AppleShowcase.tsx
 * Showcase inspirado no site da Apple
 * - Tipografia SF Pro
 * - Animações suaves (fade-in, slide-in)
 * - Responsividade PC/Mobile
 * - Botões estilizados com cores Apple
 * - Layout clean e minimalista
 */

export default function AppleShowcase() {
  // animação de entrada suave
  useEffect(() => {
    const main = document.querySelector(".apple-showcase");
    if (main) {
      main.classList.add("fade-in");
    }
  }, []);

  return (
    <main className="apple-showcase">
      {/* Hero iPhone 17 Pro */}
      <section className="hero iphone">
        <div className="hero-content slide-up">
          <h1>iPhone 17 Pro</h1>
          <p>
            O futuro chegou. Mais rápido, mais inteligente, mais Pro. Com o chip
            A19 Pro, câmeras revolucionárias e design premium, o iPhone 17 Pro
            redefine o que significa ser Pro.
          </p>
          <div className="cta">
            <Link to="/comprar-iphone17pro" className="btn btn-blue">
              Comprar
            </Link>
            <Link to="/iphone17pro" className="btn btn-white">
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src="https://i.zst.com.br/thumbs/12/2c/3a/-1584066151.jpg"
            alt="iPhone 17 Pro"
          />
        </div>
      </section>

      {/* Hero iPhone 17 Pro Max */}
      <section className="hero iphone max">
        <div className="hero-content slide-up">
          <h1>iPhone 17 Pro Max</h1>
          <p>
            Tela maior, desempenho máximo. O Pro levado ao extremo. Experimente
            a tela Super Retina XDR de 6.7" e armazenamento de até 2TB.
          </p>
          <div className="cta">
            <Link to="/comprar-iphone17promax" className="btn btn-blue">
              Comprar
            </Link>
            <Link to="/iphone17promax" className="btn btn-white">
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src="https://m.media-amazon.com/images/I/41KOxRsuiiL._AC_SX522_.jpg"
            alt="iPhone 17 Pro Max"
          />
        </div>
      </section>

      {/* MacBook M4 */}
      <section className="hero macbook">
        <div className="hero-content slide-up">
          <h1>MacBook Pro com chip M4</h1>
          <p>
            Potência revolucionária. Design impecável. O notebook definitivo
            para profissionais criativos e exigentes. Com até 128GB de RAM e
            armazenamento de 8TB, nada é impossível.
          </p>
          <div className="cta">
            <Link to="/comprar-macbookm4" className="btn btn-blue">
              Comprar
            </Link>
            <Link to="/macbookm4" className="btn btn-white">
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src="https://i.zst.com.br/thumbs/12/16/15/-1446102220.jpg"
            alt="MacBook M4"
          />
        </div>
      </section>

      {/* Apple Watch */}
      <section className="hero watch">
        <div className="hero-content slide-up">
          <h1>Apple Watch Series 9</h1>
          <p>
            O futuro da saúde e bem-estar no seu pulso. Chip S9, gesto de toque
            duplo e tela mais brilhante já vista em um Apple Watch.
          </p>
          <div className="cta">
            <Link to="/comprar-watch9" className="btn btn-blue">
              Comprar
            </Link>
            <Link to="/watch9" className="btn btn-white">
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src="https://microless.com/cdn/products/5590f4e06cb23ce2b8705ea27828390c-hi.jpg"
            alt="Apple Watch Series 9"
          />
        </div>
      </section>

      {/* Comparação */}
      <section className="compare">
        <h2>Compare os modelos</h2>
        <div className="compare-grid">
          <div className="compare-card">
            <img
              src="https://m.magazineluiza.com.br/a-static/420x420/iphone-17-pro-apple-256gb-camera-tripla-fusion-de-48mp-tela-6-3-super-retina-xdr-azul-intenso/kabum/925348/34016e8a7180fd8434eafaff435e84dd.jpeg"
              alt="iPhone 17 Pro"
            />
            <h3>iPhone 17 Pro</h3>
            <ul>
              <li>Tela 6.1"</li>
              <li>Chip A19 Pro</li>
              <li>3 câmeras Pro</li>
              <li>Armazenamento até 1TB</li>
            </ul>
          </div>
          <div className="compare-card">
            <img
              src="https://m.media-amazon.com/images/I/51nj2ICJyeL._AC_SX522_.jpg"
              alt="iPhone 17 Pro Max"
            />
            <h3>iPhone 17 Pro Max</h3>
            <ul>
              <li>Tela 6.7"</li>
              <li>Chip A19 Pro</li>
              <li>3 câmeras Pro + Telefoto</li>
              <li>Armazenamento até 2TB</li>
            </ul>
          </div>
          <div className="compare-card">
            <img
              src="https://www.detonashop.com.br/media/mf_webp/png/media/catalog/product/cache/041e82462066eef1ae3402cf9c4986f8/m/x/mx2u3a.webp"
              alt="MacBook M4"
            />
            <h3>MacBook Pro M4</h3>
            <ul>
              <li>Tela Liquid Retina XDR</li>
              <li>Chip M4 Ultra</li>
              <li>Até 128GB RAM</li>
              <li>Armazenamento até 8TB</li>
            </ul>
          </div>
          <div className="compare-card">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_802328-MLA99936628065_112025-F.webp"
              alt="Apple Watch Series 10"
            />
            <h3>Apple Watch Series </h3>
            <ul>
              <li>Chip S10</li>
              <li>Toque Duplo</li>
              <li>Tela 2000 nits</li>
              <li>Armazenamento 64GB</li>
              <li>GPS Celular</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Destaques técnicos */}
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
          <div className="feature">
            <h3>Sustentabilidade</h3>
            <p>
              Produtos com alumínio reciclado e carbono neutro em várias
              combinações de caixa e pulseira.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}