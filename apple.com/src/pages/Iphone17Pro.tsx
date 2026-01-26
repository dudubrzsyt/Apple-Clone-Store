import React from "react";
import "../styles/SaibaMais.css";

const Iphone17Pro: React.FC = () => {
  return (
    <main className="saibamais-page">
      <section className="hero hero-black">
        <h1>iPhone 17 Pro</h1>
        <p>O futuro chegou. Mais rápido, mais inteligente, mais Pro.</p>
        <img
          src="https://i.zst.com.br/thumbs/12/2c/3a/-1584066151.jpg"
          alt="iPhone 17 Pro"
          className="hero-image"
        />
      </section>

      <section className="section hero-white">
        <h2>Design sofisticado</h2>
        <p>
          O iPhone 17 Pro combina materiais premium com um acabamento impecável.
          Disponível em cores exclusivas que refletem sua personalidade.
        </p>
      </section>

      <section className="section hero-black">
        <h2>Chip A19 Pro</h2>
        <p>
          O chip mais rápido já visto em um smartphone. Jogos, edição de vídeo e
          realidade aumentada com fluidez impressionante.
        </p>
      </section>

      <section className="section hero-white">
        <h2>Sistema de câmeras Pro</h2>
        <p>
          Capture momentos com qualidade profissional. Novo sensor de 48MP,
          teleobjetiva avançada e modo noturno ainda mais poderoso.
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default Iphone17Pro;