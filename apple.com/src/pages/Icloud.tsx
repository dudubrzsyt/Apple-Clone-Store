import React from "react";

/**
 * Icloud.tsx — Página iCloud personalizada do seu site
 * - Inspirada no visual oficial da Apple
 * - Mostra arquivos, fotos e notas
 * - Fundo limpo e elegante
 */

const Icloud: React.FC = () => {
  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#f5f5f7",
        color: "#1d1d1f",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* ================= HERO ================= */}
        <section
          style={{
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          <h1 style={{ fontSize: 40, fontWeight: 700 }}>iCloud</h1>
          <p style={{ fontSize: 20, marginTop: 16 }}>
            Bem-vindo ao seu iCloud personalizado.  
            Aqui você acessa seus arquivos, fotos e notas em qualquer dispositivo.
          </p>
        </section>

        {/* ================= GRID DE SERVIÇOS ================= */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.apple.com/br/icloud/images/overview/restore__1dhzlb1j0yqm_large.jpg"
              alt="Arquivos"
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
            <h2>Arquivos</h2>
            <p>Acesse documentos e pastas salvos no seu iCloud Drive.</p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.apple.com/br/icloud/images/overview/everything_hero__o80m7600mtm6_large.jpg"
              alt="Fotos"
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
            <h2>Fotos</h2>
            <p>Reviva seus momentos com todas as fotos sincronizadas.</p>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.apple.com/br/icloud/images/overview/always_on__djk4uvw7xmky_large.jpg"
              alt="Notas"
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
            <h2>Notas</h2>
            <p>Organize suas ideias e lembretes com o app Notas.</p>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer
          style={{
            marginTop: 80,
            textAlign: "center",
            color: "#6e6e73",
          }}
        >
          <p>© 2026 iCloud Clone — Inspirado no design da Apple</p>
        </footer>
      </div>
    </main>
  );
};

export default Icloud;