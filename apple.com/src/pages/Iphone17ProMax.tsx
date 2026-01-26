import React from "react";
import "../styles/Iphone17ProMax.css"; // caminho corrigido


const Iphone17ProMax: React.FC = () => {
  return (
    <main className="iphone17promax-page">
      <section className="hero hero-black">
        <h1>iPhone 17 Pro Max</h1>
        <p className="highlight">
          Tela maior, desempenho máximo. O Pro levado ao extremo.
        </p>
        <img
          src="<!-- Cole aqui imagem oficial do iPhone 17 Pro Max -->"
          alt="iPhone 17 Pro Max"
          className="hero-image"
        />
      </section>

      <section className="section hero-white">
        <h2>Design e Tela</h2>
        <p>
          Uma tela Super Retina XDR de 6.7" com tecnologia ProMotion para uma
          experiência visual sem igual.
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default Iphone17ProMax;