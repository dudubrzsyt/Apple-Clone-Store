import React from "react";

/**
 * Mac.tsx — Página dedicada ao MacBook Pro
 * - Fundo branco elegante
 * - Tipografia SF Pro
 * - Estrutura inspirada no site da Apple
 * - Mantém a mesma imagem do MacBook Pro
 * - Seções: Hero, Recursos, Especificações, Comparativo, Ecossistema, Software, FAQ, Chamada final, Rodapé
 */

const Mac: React.FC = () => {
  const year = new Date().getFullYear();

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
          MacBook Pro
        </h1>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 700,
            marginBottom: 30,
          }}
        >
          Potência que redefine limites. Com chips M3, M3 Pro e M3 Max.
        </p>

        {/* Imagem do MacBook Pro (mantida) */}
        <img
          src="https://www.mundoconectado.com.br/wp-content/uploads/2024/10/MacBook-Pro-M4-912x569.jpg"
          alt="MacBook Pro com tela Liquid Retina XDR"
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

      {/* Recursos */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid #e5e5ea",
        }}
      >
        <h2 style={{ fontSize: 42, fontWeight: 700, marginBottom: 30 }}>
          Recursos que impressionam
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
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Chips M3</h3>
            <p style={{ opacity: 0.8 }}>
              Performance absurda com M3, M3 Pro e M3 Max.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>
              Tela Liquid Retina XDR
            </h3>
            <p style={{ opacity: 0.8 }}>
              Brilho e contraste impressionantes para profissionais criativos.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Autonomia</h3>
            <p style={{ opacity: 0.8 }}>
              Bateria que dura o dia inteiro, sem comprometer a performance.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Design</h3>
            <p style={{ opacity: 0.8 }}>
              Alumínio reciclado, leve e resistente, com acabamento premium.
            </p>
          </div>
        </div>
      </section>

      {/* Especificações técnicas */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid #e5e5ea",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 30 }}>
          Especificações técnicas
        </h2>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "left",
            lineHeight: 1.8,
          }}
        >
          <ul>
            <li>Processadores: M3, M3 Pro e M3 Max</li>
            <li>Tela: 14” ou 16” Liquid Retina XDR</li>
            <li>Memória: até 128 GB unificada</li>
            <li>Armazenamento: até 8 TB SSD</li>
            <li>GPU: até 40 núcleos</li>
            <li>Portas: HDMI, Thunderbolt 4, MagSafe, leitor SDXC</li>
            <li>Sistema de som: 6 alto-falantes com áudio espacial</li>
            <li>Autonomia: até 22 horas de reprodução de vídeo</li>
          </ul>
        </div>
      </section>

      {/* Comparativo de modelos */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid #e5e5ea",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 30 }}>
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
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>MacBook Pro 14”</h3>
            <p style={{ opacity: 0.8 }}>
              Compacto e poderoso, ideal para mobilidade.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>MacBook Pro 16”</h3>
            <p style={{ opacity: 0.8 }}>
              Tela maior e performance máxima para profissionais exigentes.
            </p>
          </div>
        </div>
      </section>

      {/* Ecossistema Apple */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid #e5e5ea",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 30 }}>
          Parte do ecossistema Apple
        </h2>
        <p
          style={{
            fontSize: 20,
            opacity: 0.85,
            maxWidth: 800,
            margin: "0 auto 40px",
          }}
        >
          O MacBook Pro funciona em perfeita sintonia com iPhone, iPad, Apple
          Watch e AirPods. Tudo conectado, tudo integrado.
        </p>
        {/* Opcional: substitua por uma imagem sua */}
        <img
          src="https://blog.iplace.com.br/wp-content/uploads/2023/09/ecossistema-apple-1024x625.jpg"
          alt="Ecossistema Apple"
          style={{
            width: "100%",
            maxWidth: 1000,
            borderRadius: 16,
            margin: "0 auto",
          }}
        />
      </section>

      {/* Integração com software */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid #e5e5ea",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
          Feito para o macOS
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              border: "1px solid #e5e5ea",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Final Cut Pro</h3>
            <p style={{ opacity: 0.8 }}>
              Edição de vídeo acelerada pela GPU com renderizações ultrarrápidas.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #e5e5ea",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Logic Pro</h3>
            <p style={{ opacity: 0.8 }}>
              Produção musical profissional com instrumentos e efeitos poderosos.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #e5e5ea",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Xcode</h3>
            <p style={{ opacity: 0.8 }}>
              Crie apps para todos os dispositivos Apple com desempenho máximo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid #e5e5ea",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 30 }}>
          Perguntas frequentes
        </h2>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <details style={{ marginBottom: 16 }}>
            <summary style={{ fontWeight: 600 }}>
              Qual a diferença entre M3, M3 Pro e M3 Max?
            </summary>
            <p style={{ marginTop: 8 }}>
              O M3 é ideal para tarefas do dia a dia, o M3 Pro para workflows
              profissionais e o M3 Max para cargas extremas como renderização
              3D e machine learning.
            </p>
          </details>
          <details style={{ marginBottom: 16 }}>
            <summary style={{ fontWeight: 600 }}>
              O MacBook Pro é bom para jogos?
            </summary>
            <p style={{ marginTop: 8 }}>
              Embora seja focado em produtividade, os chips M3 oferecem
              desempenho gráfico excelente para jogos compatíveis.
            </p>
          </details>
          <details style={{ marginBottom: 16 }}>
            <summary style={{ fontWeight: 600 }}>
              Posso usar o MacBook Pro com monitores externos?
            </summary>
            <p style={{ marginTop: 8 }}>
              Sim. Com Thunderbolt 4 e HDMI, você pode conectar múltiplos
              monitores de alta resolução com facilidade.
            </p>
          </details>
          <details style={{ marginBottom: 16 }}>
            <summary style={{ fontWeight: 600 }}>
              O MacBook Pro tem garantia e suporte?
            </summary>
            <p style={{ marginTop: 8 }}>
              Sim. Você conta com a garantia Apple e pode ampliar a cobertura
              com o AppleCare+.
            </p>
          </details>
        </div>
      </section>

      {/* Chamada final */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        {/* Opcional: substitua por um close do MacBook */}
        <img
          src="https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg?202512191258"
          alt="Detalhes do MacBook Pro"
          style={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: 16,
            marginBottom: 24,
          }}
        />
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>
          Pronto para elevar seu trabalho
        </h2>
        <p
          style={{
            fontSize: 18,
            opacity: 0.85,
            maxWidth: 800,
            margin: "0 auto 24px",
          }}
        >
          Explore configurações, escolha seu chip e faça o upgrade para um
          desempenho sem limites.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Ver modelos
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#1d1d1f",
              border: "1px solid rgba(0,0,0,0.2)",
              padding: "12px 22px",
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

      {/* Rodapé */}
      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          fontSize: 14,
          color: "#6e6e73",
          borderTop: "1px solid #e5e5ea",
        }}
      >
        <p>© {year} Apple Inc. Todos os direitos reservados.</p>
        <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal</p>
        <p>Este é um layout inspirado no site da Apple. Imagem ilustrativa.</p>
      </footer>
    </main>
  );
};

export default Mac;