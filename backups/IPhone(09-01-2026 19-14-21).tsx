import React from "react";

/**
 * IPhone.tsx — Página dedicada ao iPhone 17 Pro Max e 16 Pro/Pro Max.
 * - Fundo preto elegante
 * - Destaque para o iPhone 17 Pro Max
 * - Layout inspirado no site da Apple
 * - Tipografia SF, espaçamento refinado, CTAs minimalistas
 */

const IPhone: React.FC = () => {
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
        {/* Imagem em tela cheia */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img
            src="https://s.zst.com.br/cms-assets/2025/09/capa-iphone-17-pro-max-preco-ficha-tecnica-1.webp"
            alt="iPhone 17 Pro Max Laranja sobre fundo preto"
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
          iPhone 17 Pro Max
        </h1>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 800,
            margin: "0 auto 40px",
          }}
        >
          Titânio. Poder Pro. Agora em uma nova cor vibrante:{" "}
          <strong style={{ color: "#ff6600" }}>Laranja</strong>.
        </p>
        <p style={{ fontSize: 20, marginBottom: 40 }}>
          A partir de <strong>US$ 1.199</strong> (aprox. R$ 6.999 no Brasil).
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3", // azul Apple
              color: "#fff",
              padding: "18px 36px",
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
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "18px 36px",
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

      {/* Comparativo iPhone 17 vs 16 */}
      <section
        style={{
          padding: "1000px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 42, fontWeight: 700, marginBottom: 30 }}>
          Compare os modelos
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
          {/* iPhone 17 Pro Max */}
          <div>
            <img
              src="https://s.zst.com.br/cms-assets/2025/09/capa-iphone-17-pro-max-preco-ficha-tecnica-1.webp"
              alt="iPhone 17 Pro Max"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPhone 17 Pro Max</h3>
            <p style={{ opacity: 0.8, marginBottom: 10 }}>
              Chip A19 Pro • Câmera quádrupla • Tela ProMotion 120Hz • Titânio
            </p>
            <p style={{ fontWeight: 600 }}>US$ 1.199</p>
          </div>

          {/* iPhone 16 Pro Max */}
          <div>
            <img
              src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large_2x.jpg"
              alt="iPhone 16 Pro Max"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPhone 16 Pro Max</h3>
            <p style={{ opacity: 0.8, marginBottom: 10 }}>
              Chip A18 Pro • Câmera tripla • Tela ProMotion • Design em alumínio
            </p>
            <p style={{ fontWeight: 600 }}>US$ 1.099</p>
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

export default IPhone;