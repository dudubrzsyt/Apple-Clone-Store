import React from "react";
import "../styles/Comprar.css";

const ComprarIphone17Pro: React.FC = () => {
  return (
    <main className="comprar-page">
      <section className="hero">
        <h1>Comprar iPhone 17 Pro</h1>
        <p>Escolha sua cor, capacidade e finalize sua compra.</p>
      </section>

      {/* Opções de cor */}
      <section className="options">
        <h2>Cor</h2>
        <div className="option-grid">
          <button className="option">Azul Intenso</button>
          <button className="option">Preto Espacial</button>
          <button className="option">Prata</button>
          <button className="option">Dourado</button>
        </div>
      </section>

      {/* Opções de armazenamento */}
      <section className="options">
        <h2>Armazenamento</h2>
        <div className="option-grid">
          <button className="option">256GB</button>
          <button className="option">512GB</button>
          <button className="option">1TB</button>
        </div>
      </section>

      {/* Preço e botão */}
      <section className="checkout">
        <h2>Preço: A partir de R$ 9.999</h2>
        <button className="btn">Finalizar Compra</button>
      </section>
    </main>
  );
};

export default ComprarIphone17Pro;