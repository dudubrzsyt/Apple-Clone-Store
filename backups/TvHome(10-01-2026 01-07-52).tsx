import React from "react";

/**
 * TvHome.tsx — Página dedicada à seção TV & Home.
 * - Fundo preto elegante
 * - Layout inspirado no site da Apple
 * - Tipografia SF, espaçamento refinado, CTAs minimalistas
 * - Espaço pronto para você colocar a imagem
 */

const TvHome: React.FC = () => {
  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#000",
        color: "#f5f5f7",
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
          padding: "0",
          margin: "0",
        }}
      >
        {/* Imagem em tela cheia — substitua o src pela sua imagem */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img
            src="COLOQUE_AQUI_SUA_IMAGEM.jpg"
            alt="Apple TV & Home"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
        </div>
      </section>

      {/* Texto de destaque */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          Apple TV & Home
        </h1>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 800,
            margin: "0 auto 40px",
          }}
        >
          Experiência imersiva de entretenimento e automação para sua casa.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3", // azul Apple
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 32,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Comprar
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#f5f5f7",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "16px 32px",
              borderRadius: 32,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 18,
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
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 42, fontWeight: 700, marginBottom: 30 }}>
          Entretenimento e automação
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
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Apple TV 4K</h3>
            <p style={{ opacity: 0.8 }}>
              Qualidade cinematográfica com Dolby Vision e Dolby Atmos.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>HomePod</h3>
            <p style={{ opacity: 0.8 }}>
              Som imersivo e integração com Siri para sua casa.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Casa Inteligente</h3>
            <p style={{ opacity: 0.8 }}>
              Controle de iluminação, temperatura e segurança com HomeKit.
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
          color: "#aaa",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p>© {new Date().getFullYear()} Apple Inc. Todos os direitos reservados.</p>
        <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal</p>
        <p>Este é um layout inspirado no site da Apple. Imagem ilustrativa.</p>
      </footer>
    </main>
  );
};

export default TvHome;