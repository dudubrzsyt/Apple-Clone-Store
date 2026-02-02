import React from "react";

/**
 * Support.tsx — Página de Suporte Apple
 * - Fundo branco
 * - Layout inspirado no site oficial da Apple
 * - Tipografia SF, espaçamento refinado
 * - Espaço pronto para você colocar imagens ilustrativas
 */

const Support: React.FC = () => {
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
      {/* Hero Section */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        {/* COLOQUE AQUI UMA IMAGEM DE CAPA DE SUPORTE APPLE */}
        <img
          src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/support-home-apple-logo-circle-blue.png"
          alt="Suporte Apple"
          style={{
            width: "100%",
            maxWidth: "900px",
            marginBottom: "40px",
            borderRadius: "12px",
          }}
        />

        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          Suporte Apple
        </h1>
        <p
          style={{
            fontSize: 20,
            opacity: 0.8,
            maxWidth: 700,
            margin: "0 auto 40px",
          }}
        >
          Estamos aqui para ajudar você com seus dispositivos e serviços Apple.
        </p>
      </section>

      {/* Seções de ajuda */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 40 }}>
          Tópicos populares
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
            {/* COLOQUE AQUI UMA IMAGEM DE IPHONE */}
            <img
              src="https://m.media-amazon.com/images/I/51nj2ICJyeL._AC_SX342_.jpg"
              alt="iPhone"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPhone</h3>
            <p style={{ opacity: 0.7 }}>
              Configuração, atualizações e soluções para o seu iPhone.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE MACBOOK */}
            <img
              src="https://m.media-amazon.com/images/I/51Fqdb2iQIL._AC_SX342_.jpg"
              alt="Mac"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Mac</h3>
            <p style={{ opacity: 0.7 }}>
              Suporte para macOS, aplicativos e hardware.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE APPLE WATCH */}
            <img
              src="https://m.media-amazon.com/images/I/51EBZWetZqL._AC_SX342_.jpg"
              alt="Apple Watch"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Apple Watch</h3>
            <p style={{ opacity: 0.7 }}>
              Dicas de saúde, notificações e integração com iPhone.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE AIRPODS */}
            <img
              src="https://m.media-amazon.com/images/I/41FBUBvUY1L._AC_SX342_.jpg"
              alt="AirPods"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>AirPods</h3>
            <p style={{ opacity: 0.7 }}>
              Conexão, áudio e soluções rápidas para seus fones.
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
          color: "#555",
          borderTop: "1px solid #e0e0e0",
          marginTop: "60px",
        }}
      >
        <p>© {new Date().getFullYear()} Apple Inc. Todos os direitos reservados.</p>
        <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal</p>
        <p>Este é um layout inspirado no site da Apple. Imagem ilustrativa.</p>
      </footer>
    </main>
  );
};

export default Support;