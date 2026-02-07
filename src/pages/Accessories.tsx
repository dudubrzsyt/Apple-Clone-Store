import React from "react";

/**
 * Accessories.tsx — Página de Acessórios Apple
 * - Fundo branco minimalista
 * - Layout inspirado no site oficial da Apple
 * - Tipografia SF, espaçamento refinado
 * - Espaços prontos para você colocar imagens dos acessórios
 */

const Accessories: React.FC = () => {
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
        {/* COLOQUE AQUI UMA IMAGEM DE CAPA DOS ACESSÓRIOS APPLE */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_0WQ26YL7LhTXazsHxsYv__9KSrEX10T_A&s"
          alt="Acessórios Apple"
          style={{
            width: "100%",
            maxWidth: "900px",
            marginBottom: "40px",
            borderRadius: "12px",
          }}
        />

        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          Acessórios Apple
        </h1>
        <p
          style={{
            fontSize: 20,
            opacity: 0.8,
            maxWidth: 700,
            margin: "0 auto 40px",
          }}
        >
          Capas, fones, carregadores e muito mais para complementar sua
          experiência Apple.
        </p>
      </section>

      {/* Seções de acessórios */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 40 }}>
          Descubra os acessórios
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
            {/* COLOQUE AQUI UMA IMAGEM DE CAPA MAGSAFE */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQptJjtSpOjdCIx8XrLcI82fuFi4XKUc9kw&s"
              alt="Capas MagSafe"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Capas MagSafe</h3>
            <p style={{ opacity: 0.7 }}>
              Proteção e estilo com encaixe magnético perfeito.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DOS AIRPODS PRO */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZzB4E5w656mOG7Revrs6c13msYVi_iUgUA&s"
              alt="AirPods Pro"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>AirPods Pro</h3>
            <p style={{ opacity: 0.7 }}>
              Áudio superior com cancelamento ativo de ruído.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DO CARREGADOR MAGSAFE */}
            <img
              src="https://acdn-us.mitiendanube.com/stores/001/179/183/products/sem-fio-011-1b5cecebe5ec79b7b916583486290265-1024-1024.webp"
              alt="Carregador MagSafe"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Carregador MagSafe</h3>
            <p style={{ opacity: 0.7 }}>
              Recarga rápida e alinhamento magnético perfeito.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DO APPLE WATCH */}
            <img
              src="https://m.media-amazon.com/images/I/51EBZWetZqL._AC_SX342_.jpg"
              alt="Apple Watch"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Apple Watch</h3>
            <p style={{ opacity: 0.7 }}>
              Integração total para saúde, notificações e estilo.
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

export default Accessories;