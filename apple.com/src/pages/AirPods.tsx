import React from "react";

/**
 * AirPods.tsx — Página dedicada aos AirPods
 * - Fundo branco minimalista
 * - Layout inspirado no site oficial da Apple
 * - Tipografia SF, espaçamento refinado
 * - Espaços prontos para você colocar imagens dos AirPods
 */

const AirPods: React.FC = () => {
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
        {/* COLOQUE AQUI UMA IMAGEM HERO DOS AIRPODS (EX: AIRPODS PRO EM CLOSE) */}
        <img
          src="https://www.apple.com/v/airpods-pro/r/images/meta/og__c0ceegchesom_overview.png"
          alt="AirPods"
          style={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: 16,
            marginBottom: 32,
          }}
        />

        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>
          AirPods
        </h1>
        <p
          style={{
            fontSize: 20,
            opacity: 0.8,
            maxWidth: 800,
            margin: "0 auto 24px",
          }}
        >
          Som imersivo, cancelamento ativo de ruído e integração perfeita com seus dispositivos Apple.
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

      {/* Modelos */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 40 }}>
          Modelos disponíveis
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
            {/* COLOQUE AQUI UMA IMAGEM DOS AIRPODS PRO */}
            <img
              src="https://m.media-amazon.com/images/I/41FBUBvUY1L._AC_UF1000,1000_QL80_.jpg"
              alt="AirPods Pro"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>AirPods Pro</h3>
            <p style={{ opacity: 0.7 }}>
              Cancelamento ativo de ruído e áudio espacial imersivo.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DOS AIRPODS (2ª OU 3ª GERAÇÃO) */}
            <img
              src="https://www.apple.com/v/airpods-pro/r/images/overview/product-viewer/closer_look_case__bjx2hp0oo16u_large.jpg"
              alt="AirPods"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>AirPods</h3>
            <p style={{ opacity: 0.7 }}>
              Conforto e qualidade de som com integração total ao ecossistema Apple.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DOS AIRPODS MAX */}
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_754552-MLA92242528409_092025-O.webp"
              alt="AirPods Max"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>AirPods Max</h3>
            <p style={{ opacity: 0.7 }}>
              Design over-ear com áudio de alta fidelidade e cancelamento de ruído.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
          Recursos que fazem a diferença
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
            {/* COLOQUE AQUI UMA IMAGEM DE CANCELAMENTO DE RUÍDO */}
            <img
              src="https://cdsassets.apple.com/live/7WUAS350/images/airpods/airpods-pro-change-noise-mode-sound-mode-sensor-right.png"
              alt="Cancelamento de Ruído"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>
              Cancelamento ativo de ruído
            </h3>
            <p style={{ opacity: 0.7 }}>
              Bloqueie sons externos e mergulhe na sua música.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE ÁUDIO ESPACIAL */}
            <img
              src="https://www.apple.com/v/airpods-pro/r/images/overview/audio-performance/design_endframe__gc2e2e5qz7ue_large.png"
              alt="Áudio Espacial"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Áudio Espacial</h3>
            <p style={{ opacity: 0.7 }}>
              Experiência imersiva com som que se adapta ao movimento da sua cabeça.
            </p>
          </div>
          <div>
            {/* COLOQUE AQUI UMA IMAGEM DE INTEGRAÇÃO COM APPLE DEVICES */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJWdpSepy9HNYRlFZDPC9bkcKjUVwz43uNw&s"
              alt="Integração Apple"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>
              Integração com dispositivos Apple
            </h3>
            <p style={{ opacity: 0.7 }}>
              Conexão instantânea e troca automática entre iPhone, iPad, Mac e Apple Watch.
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
};

export default AirPods;