import React from "react";

/**
 * TvHome.jsx — Página dedicada à seção TV & Home
 * - Fundo branco minimalista
 * - Layout inspirado no site oficial da Apple
 * - Tipografia SF, espaçamento refinado
 * - Espaços prontos para você colocar imagens
 */

export default function TvHome() {
  const year = new Date().getFullYear();

  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#fff",
        color: "#000",
        lineHeight: 1.5,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* COLOQUE AQUI UMA IMAGEM HERO DE APPLE TV OU HOMEPOD */}
        <img
          src="https://m.media-amazon.com/images/I/B1yRNLxer1L.png"
          alt="Apple TV & Home"
          style={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: 16,
            marginBottom: 32,
          }}
        />

        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>
          Apple TV & Home
        </h1>
        <p
          style={{
            fontSize: 20,
            opacity: 0.8,
            maxWidth: 800,
            margin: "0 auto 24px",
          }}
        >
          Entretenimento imersivo e automação inteligente para transformar sua casa.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 999,
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
              color: "#000",
              border: "1px solid #000",
              padding: "14px 24px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Produtos principais */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 40 }}>
          Produtos em destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DO APPLE TV 4K */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnV0p1mnDIYe4ow4oM9f6WH-EtRBzwIxT1CQ&s"
              alt="Apple TV 4K"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Apple TV 4K</h3>
            <p style={{ opacity: 0.7 }}>
              Qualidade cinematográfica com Dolby Vision e Dolby Atmos.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DO HOMEPOD */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEs6vHsf1WdWNuG3hU31UQc7rMIYHMpQD4Q&s"
              alt="HomePod"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>HomePod</h3>
            <p style={{ opacity: 0.7 }}>
              Som imersivo e integração com Siri para sua casa.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE CASA INTELIGENTE (HOMEKIT) */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRtvkX2gU-gK1UFMdqqphjgvubnwyPFq7Nw&s"
              alt="Casa Inteligente"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Casa Inteligente</h3>
            <p style={{ opacity: 0.7 }}>
              Controle iluminação, temperatura e segurança com HomeKit.
            </p>
          </div>
        </div>
      </section>

      {/* Integração */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
          Tudo conectado
        </h2>
        <p
          style={{
            fontSize: 18,
            opacity: 0.8,
            maxWidth: 800,
            margin: "0 auto 40px",
          }}
        >
          Apple TV, HomePod e dispositivos inteligentes trabalham juntos para
          oferecer uma experiência integrada e segura.
        </p>

        {/* COLOQUE AQUI UMA IMAGEM DE ECOSSISTEMA APPLE (TV + HOMEPOD + IPHONE) */}
        <img
          src="https://www.apple.com/newsroom/images/product/homepod/standard/Apple_HomePod-mini-iPad-iPhone-applewatch-airpods_10132020_big.jpg.large.jpg"
          alt="Ecossistema Apple TV & Home"
          style={{
            width: "100%",
            maxWidth: 1000,
            borderRadius: 16,
            margin: "0 auto",
          }}
        />
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          fontSize: 14,
          color: "#555",
          borderTop: "1px solid #eee",
          marginTop: 40,
        }}
      >
        <p>© {year} Apple Inc. Todos os direitos reservados.</p>
        <p style={{ opacity: 0.8 }}>
          Privacidade • Termos de uso • Vendas e reembolsos • Legal
        </p>
        <p style={{ opacity: 0.7 }}>
          Este é um layout inspirado no site da Apple. Imagens ilustrativas.
        </p>
      </footer>
    </main>
  );
}