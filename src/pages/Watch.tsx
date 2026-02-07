import React from "react";

/**
 * Watch.tsx — Página dedicada ao Apple Watch Series 9
 * - Layout inspirado no site da Apple
 * - Imagem maior e centralizada
 * - Seções com muito texto e CTAs
 * - Tipografia refinada (SF Pro)
 */

const Watch: React.FC = () => {
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
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
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
          Apple Watch Series 9
        </h1>
        <p
          style={{
            fontSize: 24,
            opacity: 0.85,
            maxWidth: 800,
            marginBottom: 40,
          }}
        >
          O futuro no seu pulso. Mais rápido, mais brilhante e com o novo gesto
          de toque duplo que redefine a forma como você interage com a
          tecnologia. Um design elegante aliado a recursos poderosos para saúde,
          bem-estar e produtividade.
        </p>

        {/* Imagem maior */}
        <img
          src="https://microless.com/cdn/products/5590f4e06cb23ce2b8705ea27828390c-hi.jpg"
          alt="Apple Watch Series 9 com mostrador vibrante"
          style={{
            width: "60%",
            maxWidth: 1200,
            borderRadius: 24,
            boxShadow: "0 40px 120px rgba(0,0,0,0.25)",
            marginBottom: 50,
          }}
        />

        {/* CTAs */}
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
            }}
          >
            Comprar agora
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
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          borderTop: "1px solid #e5e5ea",
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 40 }}>
          Recursos que fazem diferença
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 50,
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Chip S9</h3>
            <p style={{ opacity: 0.85 }}>
              O coração do Series 9. Mais rápido, eficiente e preparado para
              oferecer desempenho impecável em todas as tarefas.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Toque Duplo</h3>
            <p style={{ opacity: 0.85 }}>
              Um gesto simples que abre um mundo de possibilidades. Atenda
              chamadas, pause músicas e muito mais sem tocar na tela.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Display Brilhante</h3>
            <p style={{ opacity: 0.85 }}>
              O mais brilhante já visto em um Apple Watch. Perfeito para qualquer
              ambiente, até sob luz intensa.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Saúde e Bem-estar</h3>
            <p style={{ opacity: 0.85 }}>
              Monitoramento avançado de frequência cardíaca, oxigênio no sangue,
              sono e muito mais. Seu parceiro diário para uma vida saudável.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f5f5f7",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 44, fontWeight: 700, marginBottom: 30 }}>
          Um design que impressiona
        </h2>
        <p
          style={{
            maxWidth: 900,
            margin: "0 auto 40px",
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          O Apple Watch Series 9 combina materiais premium, bordas suaves e
          mostradores personalizáveis para se adaptar ao seu estilo. É mais que
          um relógio: é uma extensão da sua personalidade.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <a
            href="#design"
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
            Explorar design
          </a>
          <a
            href="#personalizar"
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
            Personalizar mostrador
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "60px 20px",
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