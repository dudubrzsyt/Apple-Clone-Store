import React from "react";

/**
 * iPad.tsx — Página dedicada ao iPad.
 * - Fundo branco minimalista
 * - Tipografia SF Pro
 * - Estrutura inspirada no site da Apple
 * - Espaçamento refinado e CTAs minimalistas
 * - Imagem placeholder (substitua pelo link oficial ou local)
 */

const iPad: React.FC = () => {
  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#fff",
        color: "#1d1d1f",
        lineHeight: 1.5,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -1.2,
            marginBottom: 20,
          }}
        >
          iPad
        </h1>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 700,
            marginBottom: 30,
          }}
        >
          Versátil. Poderoso. Criado para tudo que você ama fazer.
        </p>

        {/* Imagem do iPad */}
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/ipad-pro-11-inch-13-inch.png"
          alt="iPad com tela Liquid Retina"
          style={{
            width: "60%",
            maxWidth: 1000,
            borderRadius: 24,
            boxShadow: "0 40px 120px rgba(0,0,0,0.2)",
            marginBottom: 40,
          }}
        />

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16 }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 28,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Comprar
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#1d1d1f",
              border: "1px solid rgba(0,0,0,0.2)",
              padding: "14px 28px",
              borderRadius: 28,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid #e5e5ea",
        }}
      >
        <h2 style={{ fontSize: 42, fontWeight: 700, marginBottom: 30 }}>
          Recursos que fazem diferença
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Chip M2</h3>
            <p style={{ opacity: 0.8 }}>
              Performance incrível para apps profissionais e jogos.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Tela Liquid Retina</h3>
            <p style={{ opacity: 0.8 }}>
              Cores vibrantes e brilho impressionante em qualquer ambiente.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Apple Pencil</h3>
            <p style={{ opacity: 0.8 }}>
              Transforme seu iPad em uma tela criativa com precisão absoluta.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPadOS</h3>
            <p style={{ opacity: 0.8 }}>
              Multitarefa poderosa e recursos exclusivos para produtividade.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          fontSize: 14,
          color: "#6e6e73",
          borderTop: "1px solid #e5e5ea",
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