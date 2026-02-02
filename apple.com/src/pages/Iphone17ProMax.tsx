import React from "react";
import "../styles/Iphone17ProMax.css"; // caminho corrigido

const Iphone17ProMax: React.FC = () => {
  return (
    <main className="iphone17promax-page">
      {/* ================= HERO ================= */}
      <section className="hero hero-black">
        <h1>iPhone 17 Pro Max</h1>
        <p className="highlight">
          Tela maior, desempenho máximo. O Pro levado ao extremo.
        </p>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-hero"
          alt="iPhone 17 Pro Max"
          className="hero-image large-image"
        />
      </section>

      {/* ================= DESIGN ================= */}
      <section className="section hero-white">
        <div className="content-block">
          <h2>Design e Tela</h2>
          <p>
            Uma tela Super Retina XDR de 6.7" com tecnologia ProMotion para uma
            experiência visual sem igual. Bordas finas, materiais premium e
            resistência à água e poeira.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-design"
          alt="Design iPhone 17 Pro Max"
          className="section-image large-image"
        />
      </section>

      {/* ================= CHIP ================= */}
      <section className="section hero-black">
        <div className="content-block">
          <h2>Chip A19 Pro Max</h2>
          <p>
            O chip mais rápido já visto em um smartphone. Jogos, edição de vídeo
            e realidade aumentada com fluidez impressionante. Eficiência
            energética para durar ainda mais.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-chip"
          alt="Chip A19 Pro Max"
          className="section-image large-image"
        />
      </section>

      {/* ================= CAMERAS ================= */}
      <section className="section hero-white">
        <div className="content-block">
          <h2>Sistema de câmeras Pro Max</h2>
          <p>
            Capture momentos com qualidade profissional. Novo sensor de 48MP,
            teleobjetiva avançada e modo noturno ainda mais poderoso. Vídeos em
            8K com estabilização cinematográfica.
          </p>
        </div>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-camera"
          alt="Câmeras iPhone 17 Pro Max"
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

export default Iphone17ProMax;