import React from "react";
import "../styles/SaibaMais.css";

const Iphone17Pro: React.FC = () => {
  return (
    <main className="saibamais-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-black">
        <h1>iPhone 17 Pro</h1>
        <p>O futuro chegou. Mais rápido, mais inteligente, mais Pro.</p>
        <img
          src="https://i.zst.com.br/thumbs/12/2c/3a/-1584066151.jpg"
          alt="iPhone 17 Pro"
          className="hero-image large-image"
        />
      </section>

      {/* ================= DESIGN ================= */}
      <section className="section hero-white">
        <div className="content-block">
          <h2>Design sofisticado</h2>
          <p>
            O iPhone 17 Pro combina materiais premium com um acabamento impecável.
            Disponível em cores exclusivas que refletem sua personalidade.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish"
          alt="Design iPhone 17 Pro"
          className="section-image large-image"
        />
      </section>

      {/* ================= CHIP ================= */}
      <section className="section hero-black">
        <div className="content-block">
          <h2>Chip A19 Pro</h2>
          <p>
            O chip mais rápido já visto em um smartphone. Jogos, edição de vídeo e
            realidade aumentada com fluidez impressionante.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-chip"
          alt="Chip A19 Pro"
          className="section-image large-image"
        />
      </section>

      {/* ================= CAMERAS ================= */}
      <section className="section hero-white">
        <div className="content-block">
          <h2>Sistema de câmeras Pro</h2>
          <p>
            Capture momentos com qualidade profissional. Novo sensor de 48MP,
            teleobjetiva avançada e modo noturno ainda mais poderoso.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-camera"
          alt="Câmeras iPhone 17 Pro"
          className="section-image large-image"
        />
      </section>

      {/* ================= GALERIA ================= */}
      <section className="gallery-section hero-black">
        <h2>Galeria de Inspiração</h2>
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

export default Iphone17Pro;