import React from "react";
import "../styles/Comprar.css";

const ComprarIphone17Pro: React.FC = () => {
  return (
    <main className="comprar-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Comprar iPhone 17 Pro</h1>
        <p className="hero-subtitle">
          Escolha sua cor, capacidade e finalize sua compra com estilo Apple.
        </p>
      </section>

      {/* Opções de cor */}
      <section className="options">
        <h2 className="section-title">Cor</h2>
        <div className="option-grid">
          <button className="option azul">Azul Intenso</button>
          <button className="option preto">Preto Espacial</button>
          <button className="option prata">Prata</button>
          <button className="option dourado">Dourado</button>
        </div>
      </section>

      {/* Opções de armazenamento */}
      <section className="options">
        <h2 className="section-title">Armazenamento</h2>
        <div className="option-grid">
          <button className="option">256GB</button>
          <button className="option">512GB</button>
          <button className="option">1TB</button>
        </div>
      </section>

      {/* Preço e botão */}
      <section className="checkout">
        <h2 className="price">Preço: A partir de R$ 9.999</h2>
        <button className="btn">Finalizar Compra</button>
      </section>
    </main>
  );
};

export default ComprarIphone17Pro;