import React from "react";
import "../styles/Comprar.css";

const ComprarIphone17Pro: React.FC = () => {
  return (
    <main className="comprar-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <h1 className="hero-title">Comprar iPhone 17 Pro</h1>
        <p className="hero-subtitle">
          Escolha sua cor, capacidade e finalize sua compra com estilo Apple.
        </p>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish"
          alt="iPhone 17 Pro"
          className="hero-image"
        />
      </section>

      {/* ================= OPÇÕES DE COR ================= */}
      <section className="options">
        <h2 className="section-title">Cor</h2>
        <p className="section-subtitle">
          Selecione a cor que combina com você.
        </p>
        <div className="option-grid">
          <button className="option azul">Azul Intenso</button>
          <button className="option preto">Preto Espacial</button>
          <button className="option prata">Prata</button>
          <button className="option dourado">Dourado</button>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-color-options"
          alt="Opções de cores iPhone 17 Pro"
          className="section-image"
        />
      </section>

      {/* ================= OPÇÕES DE ARMAZENAMENTO ================= */}
      <section className="options">
        <h2 className="section-title">Armazenamento</h2>
        <p className="section-subtitle">
          Escolha a capacidade ideal para suas fotos, vídeos e apps.
        </p>
        <div className="option-grid">
          <button className="option">256GB</button>
          <button className="option">512GB</button>
          <button className="option">1TB</button>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-storage"
          alt="Armazenamento iPhone 17 Pro"
          className="section-image"
        />
      </section>

      {/* ================= CHECKOUT ================= */}
      <section className="checkout">
        <h2 className="price">Preço: A partir de R$ 9.999</h2>
        <button className="btn">Finalizar Compra</button>
        <p className="checkout-info">
          Entrega rápida e gratuita. Parcelamento em até 12x sem juros.
        </p>
      </section>

      {/* ================= GALERIA ================= */}
      <section className="gallery">
        <h2 className="section-title">Veja mais detalhes</h2>
        <div className="gallery-scroll">
          {[
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-gallery1",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-gallery2",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-gallery3",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-gallery4",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Galeria iPhone ${i + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
        <p className="gallery-hint">Role para o lado para explorar mais imagens.</p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Apple Clone — Inspirado no design da Apple</p>
      </footer>
    </main>
  );
};

export default ComprarIphone17Pro;