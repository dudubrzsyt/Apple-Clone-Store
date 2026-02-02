import React from "react";
import "../styles/MacbookM4.css";

const MacbookM4: React.FC = () => {
  return (
    <main className="macbookm4-page">
      <section className="hero hero-white">
        <h1>MacBook Pro com chip M4</h1>
        <p className="highlight">
          Potência revolucionária. Design impecável. O notebook definitivo para profissionais.
        </p>
        <img
          src="<!-- Cole aqui imagem oficial do MacBook M4 -->"
          alt="MacBook M4"
          className="hero-image"
        />
      </section>

      <section className="section hero-black">
        <h2>Performance</h2>
        <p>
          O chip M4 Ultra redefine o que significa velocidade em um notebook.
          Até 128GB de RAM e 8TB de armazenamento.
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default MacbookM4;