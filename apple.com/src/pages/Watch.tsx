import React from "react";

/**
 * Watch.tsx — Página dedicada ao Apple Watch.
 * - Fundo branco minimalista
 * - Tipografia SF Pro
 * - Estrutura inspirada no site da Apple
 * - Espaçamento refinado e CTAs minimalistas
 * - Imagem placeholder (substitua pelo link oficial ou local)
 */

const Watch: React.FC = () => {
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
          Apple Watch Series 9
        </h1>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 700,
            marginBottom: 30,
          }}
        >
          Brilhante. Poderoso. Com o novo gesto de toque duplo.
        </p>

        {/* Imagem do Apple Watch */}
        <img
          src="https://microless.com/cdn/products/5590f4e06cb23ce2b8705ea27828390c-hi.jpg"
          alt="Apple Watch Series 9 com mostrador vibrante"
          style={{
            width: "40%",
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
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Chip S9</h3>
            <p style={{ opacity: 0.8 }}>
              Respostas rápidas e eficiência energética.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Toque Duplo</h3>
            <p style={{ opacity: 0.8 }}>
              Controle intuitivo com apenas um gesto.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Display Brilhante</h3>
            <p style={{ opacity: 0.8 }}>
              O mais brilhante já visto em um Apple Watch.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Saúde e Bem-estar</h3>
            <p style={{ opacity: 0.8 }}>
              Monitoramento avançado para cuidar de você todos os dias.
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

export default Watch;