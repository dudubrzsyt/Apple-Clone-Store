import React from "react";

/**
 * iPad.tsx — Página dedicada ao iPad.
 * - Reformulada com mais seções, imagens e textos
 * - Tipografia SF Pro
 * - Estrutura inspirada no site da Apple
 * - Animações suaves e transições
 * - Responsiva para PC, iOS e Android
 */

const iPad: React.FC = () => {
  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#fff",
        color: "#1d1d1f",
        lineHeight: 1.6,
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
          animation: "fadeIn 1s ease",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -1.5,
            marginBottom: 20,
          }}
        >
          iPad Pro
        </h1>
        <p
          style={{
            fontSize: 24,
            opacity: 0.85,
            maxWidth: 800,
            marginBottom: 40,
          }}
        >
          Versátil. Poderoso. Criado para tudo que você ama fazer.  
          Com o chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil, o iPad redefine o que é possível.
        </p>
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/ipad-pro-11-inch-13-inch.png"
          alt="iPad com tela Liquid Retina"
          style={{
            width: "65%",
            maxWidth: 1200,
            borderRadius: 24,
            boxShadow: "0 40px 120px rgba(0,0,0,0.25)",
            marginBottom: 50,
            transition: "transform 0.3s ease",
          }}
        />
        <div style={{ display: "flex", gap: 20 }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 32,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
              transition: "background 0.3s ease",
            }}
          >
            Comprar
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#1d1d1f",
              border: "2px solid rgba(0,0,0,0.3)",
              padding: "16px 32px",
              borderRadius: 32,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
              transition: "color 0.3s ease",
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          borderTop: "1px solid #e5e5ea",
          animation: "slideUp 1s ease",
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 40 }}>
          Recursos que fazem diferença
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 50,
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Chip M2</h3>
            <p style={{ opacity: 0.85 }}>
              Performance incrível para apps profissionais e jogos.  
              O M2 traz velocidade e eficiência para tudo que você faz.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Tela Liquid Retina</h3>
            <p style={{ opacity: 0.85 }}>
              Cores vibrantes e brilho impressionante em qualquer ambiente.  
              Ideal para assistir filmes, editar fotos e criar artes digitais.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Apple Pencil</h3>
            <p style={{ opacity: 0.85 }}>
              Transforme seu iPad em uma tela criativa com precisão absoluta.  
              Escreva, desenhe e edite com fluidez.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>iPadOS</h3>
            <p style={{ opacity: 0.85 }}>
              Multitarefa poderosa e recursos exclusivos para produtividade.  
              Use várias janelas, arraste e solte arquivos e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DESIGN ================= */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f5f5f7",
          textAlign: "center",
          animation: "fadeIn 1.5s ease",
        }}
      >
        <h2 style={{ fontSize: 44, fontWeight: 700, marginBottom: 30 }}>
          Design sofisticado
        </h2>
        <p
          style={{
            maxWidth: 900,
            margin: "0 auto 40px",
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          O iPad Pro combina materiais premium, bordas suaves e mostradores personalizáveis.  
          Disponível em várias cores e tamanhos, é mais que um dispositivo: é uma extensão da sua criatividade.
        </p>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-hero"
          alt="Design iPad"
          style={{
            width: "70%",
            maxWidth: 1000,
            borderRadius: 20,
            marginBottom: 40,
          }}
        />
      </section>

      {/* ================= GALERIA ================= */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          animation: "slideUp 1.5s ease",
        }}
      >
        <h2 style={{ fontSize: 44, fontWeight: 700, marginBottom: 30 }}>
          Galeria de Inspiração
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 30,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-gallery1"
            alt="Galeria iPad 1"
            style={{ width: "100%", borderRadius: 16 }}
          />
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-gallery2"
            alt="Galeria iPad 2"
            style={{ width: "100%", borderRadius: 16 }}
          />
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-gallery3"
            alt="Galeria iPad 3"
            style={{ width: "100%", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          padding: "60px 20px",
          textAlign: "center",
          fontSize: 14,
          color: "#6e6e73",
          borderTop: "1px solid #e5e5ea",
          animation: "fadeIn 2s ease",
        }}
      >
        <p>© {new Date().getFullYear()} Apple Inc. Todos os direitos reservados.</p>
        <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal</p>
        <p>Este é um layout inspirado no site da Apple. Imagem ilustrativa.</p>
      </footer>
    </main>
  );
};

export default iPad;