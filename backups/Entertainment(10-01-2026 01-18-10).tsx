import React from "react";

/**
 * Entertainment.jsx — Página completa de Entretenimento Apple
 * - Fundo branco minimalista e tipografia SF
 * - Inspirada no site oficial da Apple, com várias seções e CTAs
 * - Indicadores claros de quais IMAGENS colocar em cada lugar
 * - Estrutura responsiva com grids e cartões
 *
 * Substitua todos os "COLOQUE_AQUI_IMAGEM_..." pelos seus arquivos/URLs.
 */

export default function Entertainment() {
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
      {/* HERO — Apple TV+ destaque */}
      <section
        style={{
          minHeight: "80vh",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          justifyItems: "center",
          textAlign: "center",
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* COLOQUE AQUI UMA IMAGEM HERO DO APPLE TV+ (POSTER DE SÉRIES/ FILMES) */}
        <img
          src="COLOQUE_AQUI_IMAGEM_HERO_APPLE_TV_PLUS.jpg"
          alt="Apple TV+ — Destaques"
          style={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: 16,
            marginBottom: 32,
          }}
        />

        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>
          Entretenimento Apple
        </h1>
        <p
          style={{
            fontSize: 20,
            opacity: 0.8,
            maxWidth: 800,
            margin: "0 auto 24px",
          }}
        >
          Filmes e séries originais no Apple TV+, milhões de músicas no Apple Music, jogos imersivos no Apple Arcade e muito mais — tudo integrado ao seu mundo Apple.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a
            href="#tvplus"
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
            Explorar Apple TV+
          </a>
          <a
            href="#music"
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
            Apple Music
          </a>
        </div>
      </section>

      {/* Seção de serviços — cartões principais */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 40,
          }}
          id="servicos"
        >
          Tudo que você ama, em um só lugar
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Apple TV+ */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="tvplus"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE BANNER DO APPLE TV+ */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_TV_PLUS.jpg"
              alt="Apple TV+ Originals"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple TV+</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Produções originais premiadas, filmes e séries para você assistir em qualquer dispositivo Apple.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#tvplus"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Assine agora
                </a>
                <a
                  href="#tvplus"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </article>

          {/* Apple Music */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="music"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE BANNER DO APPLE MUSIC (ARTISTA/ CAPA DE PLAYLIST) */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_MUSIC.jpg"
              alt="Apple Music"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple Music</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Milhões de músicas sem anúncios, áudio espacial e listas personalizadas para cada momento.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#music"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Experimente grátis
                </a>
                <a
                  href="#music"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Explorar
                </a>
              </div>
            </div>
          </article>

          {/* Apple Arcade */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="arcade"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE BANNER DO APPLE ARCADE (CAPAS DE JOGOS) */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_ARCADE.jpg"
              alt="Apple Arcade"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple Arcade</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Jogos incríveis sem anúncios e sem compras dentro do app. Diversão garantida para toda a família.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#arcade"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Jogar agora
                </a>
                <a
                  href="#arcade"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Catálogo
                </a>
              </div>
            </div>
          </article>

          {/* Apple Fitness+ */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="fitness"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE BANNER DO APPLE FITNESS+ (AULA/ TREINO) */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_FITNESS_PLUS.jpg"
              alt="Apple Fitness+"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple Fitness+</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Treinos guiados e meditações com integração ao Apple Watch para acompanhar sua evolução.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#fitness"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Começar
                </a>
                <a
                  href="#fitness"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Ver treinos
                </a>
              </div>
            </div>
          </article>

          {/* Apple Podcasts */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="podcasts"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE CAPA DE PODCASTS DESTACADOS */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_PODCASTS.jpg"
              alt="Apple Podcasts"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple Podcasts</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Descubra conversas que inspiram, informam e divertem — tudo no seu ritmo.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#podcasts"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Ouvir agora
                </a>
                <a
                  href="#podcasts"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Descobrir
                </a>
              </div>
            </div>
          </article>

          {/* Apple Books */}
          <article
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            id="books"
          >
            {/* COLOQUE AQUI UMA IMAGEM DE CAPA DE LIVROS/ LEITURA */}
            <img
              src="COLOQUE_AQUI_IMAGEM_BANNER_BOOKS.jpg"
              alt="Apple Books"
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 22, marginBottom: 8 }}>Apple Books</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>
                Leituras para todos os gostos, com ajustes de fonte e tema para conforto visual.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="#books"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Ler agora
                </a>
                <a
                  href="#books"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  Biblioteca
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Carrossel de destaques (mock) */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Em destaque esta semana
        </h2>

        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "minmax(260px, 1fr)",
            gap: 16,
            overflowX: "auto",
            paddingBottom: 12,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* COLOQUE AQUI CAPAS DE SÉRIES/ FILMES (4–8 itens) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: "#fff",
                minWidth: 260,
              }}
            >
              <img
                src={`COLOQUE_AQUI_CAPA_DESTAQUE_${i + 1}.jpg`}
                alt={`Destaque ${i + 1}`}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div style={{ padding: 16 }}>
                <h4 style={{ fontSize: 16, marginBottom: 8 }}>
                  Título em destaque {i + 1}
                </h4>
                <p style={{ opacity: 0.75, fontSize: 14 }}>
                  Breve descrição do conteúdo selecionado.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integração entre serviços (ecosistema) */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Um ecossistema que funciona em harmonia
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: 24,
              border: "1px solid #eee",
              borderRadius: 16,
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Sincronização</h3>
            <p style={{ opacity: 0.8 }}>
              Tudo que você começa no iPhone pode continuar no iPad, Mac, Apple TV e HomePod. Sem esforço, sem complicação.
            </p>
          </div>

          <div
            style={{
              padding: 24,
              border: "1px solid #eee",
              borderRadius: 16,
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Compartilhamento Familiar</h3>
            <p style={{ opacity: 0.8 }}>
              Divida assinaturas e conteúdo com quem você ama, mantendo sua privacidade e preferências.
            </p>
          </div>

          <div
            style={{
              padding: 24,
              border: "1px solid #eee",
              borderRadius: 16,
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Privacidade</h3>
            <p style={{ opacity: 0.8 }}>
              Tudo foi pensado para proteger seus dados e garantir que o controle seja sempre seu.
            </p>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes (FAQ) */}
      <section
        style={{
          padding: "60px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Perguntas frequentes
        </h2>

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gap: 16,
          }}
        >
          {[
            {
              q: "Preciso de um dispositivo Apple para usar os serviços?",
              a: "Os serviços funcionam melhor em dispositivos Apple, mas você pode acessar conteúdos selecionados também pela web e em apps disponíveis em outras plataformas.",
            },
            {
              q: "Posso compartilhar minha assinatura com a família?",
              a: "Sim. Com o Compartilhamento Familiar, você pode dividir assinaturas com até seis pessoas.",
            },
            {
              q: "O Apple Music tem áudio espacial?",
              a: "Sim, com Dolby Atmos em faixas compatíveis, para uma experiência imersiva.",
            },
            {
              q: "O Apple TV+ tem períodos de teste?",
              a: "O Apple TV+ frequentemente oferece testes promocionais. Verifique as condições atuais na sua região.",
            },
          ].map((item, i) => (
            <details
              key={i}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 16,
                backgroundColor: "#fff",
              }}
            >
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>
                {item.q}
              </summary>
              <p style={{ marginTop: 8, opacity: 0.85 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        {/* COLOQUE AQUI UMA IMAGEM DE COLAGEM DOS SERVIÇOS (TV+, MUSIC, ARCADE, FITNESS+) */}
        <img
          src="COLOQUE_AQUI_IMAGEM_COLAGEM_SERVICOS.jpg"
          alt="Apple Entertainment — Serviços"
          style={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: 16,
            marginBottom: 24,
          }}
        />

        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
          Seu mundo, ainda mais divertido
        </h2>
        <p
          style={{
            fontSize: 18,
            opacity: 0.8,
            maxWidth: 800,
            margin: "0 auto 20px",
          }}
        >
          Conheça os planos, experimente por tempo limitado e aproveite conteúdos exclusivos em todos os seus dispositivos.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a
            href="#assinar"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Ver planos
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#000",
              border: "1px solid #000",
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