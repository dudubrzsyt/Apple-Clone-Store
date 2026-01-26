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
          {/* Overlay de título no hero */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              maxWidth: 980,
              padding: "0 20px",
            }}
          >
            <h1 style={{ fontSize: 64, fontWeight: 800, marginBottom: 16 }}>
              iPhone 17 Pro Max
            </h1>
            <p
              style={{
                fontSize: 22,
                opacity: 0.9,
                marginBottom: 28,
              }}
            >
              Titânio. Poder Pro. Agora em uma nova cor vibrante:{" "}
              <strong style={{ color: "#ff6600" }}>Laranja</strong>.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "16px 28px",
                  borderRadius: 28,
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
                  padding: "16px 28px",
                  borderRadius: 28,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Texto de destaque */}
      <section
        style={{
          padding: "1000px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          iPhone 17 Pro Max
        </h2>
        <p
          style={{
            fontSize: 22,
            opacity: 0.85,
            maxWidth: 900,
            margin: "0 auto 24px",
          }}
        >
          Titânio. Poder Pro. Agora em uma nova cor vibrante:{" "}
          <strong style={{ color: "#ff6600" }}>Laranja</strong>. Um salto em
          desempenho, fotografia e bateria, com design refinado e materiais
          premium.
        </p>
        <p style={{ fontSize: 20, marginBottom: 40 }}>
          A partir de <strong>US$ 1.199</strong> (aprox. R$ 6.999 no Brasil).
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3",
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
          padding: "80px 20px",
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
            <p style={{ fontWeight: 600, marginBottom: 12 }}>US$ 1.199</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
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
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* iPhone 17 Pro */}
          <div>
            <img
              src="https://www.apple.com/v/iphone-17-pro/a/images/overview/hero/hero_endframe__placeholder_large.jpg"
              alt="iPhone 17 Pro"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPhone 17 Pro</h3>
            <p style={{ opacity: 0.8, marginBottom: 10 }}>
              Chip A19 Pro • Câmera tripla • Tela ProMotion 120Hz • Titânio
            </p>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>US$ 1.099</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
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
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Saiba mais
              </a>
            </div>
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
              Chip A18 Pro • Câmera tripla • Tela ProMotion • Titânio
            </p>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>US$ 1.099</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
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
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* iPhone 16 Pro */}
          <div>
            <img
              src="https://www.apple.com/v/iphone-16-pro/a/images/overview/hero/hero_endframe__f7xv7x0v7y2a_large.jpg"
              alt="iPhone 16 Pro"
              style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
            />
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>iPhone 16 Pro</h3>
            <p style={{ opacity: 0.8, marginBottom: 10 }}>
              Chip A18 Pro • Câmera tripla • Tela ProMotion • Titânio
            </p>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>US$ 999</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
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
                  padding: "10px 16px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de especificações principais */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>
          Poder além do imaginável
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 28,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Chip A19 Pro</h3>
            <p style={{ opacity: 0.8 }}>
              Maior salto de performance em processamento gráfico e IA no
              celular.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Câmera Pro</h3>
            <p style={{ opacity: 0.8 }}>
              Sensor avançado, teleobjetiva periscópica e fotos incríveis em
              baixa luz.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Tela ProMotion</h3>
            <p style={{ opacity: 0.8 }}>
              120Hz, HDR e brilho espetacular para conteúdo e jogos.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Titânio refinado</h3>
            <p style={{ opacity: 0.8 }}>
              Leve e resistente, com acabamento premium e novas cores.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Bateria Pro</h3>
            <p style={{ opacity: 0.8 }}>
              Autonomia para o dia inteiro com recarga rápida e MagSafe.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>Conectividade</h3>
            <p style={{ opacity: 0.8 }}>
              5G, Wi‑Fi 7, Bluetooth avançado e GPS de dupla frequência.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de imagens (coloque suas fotos) */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>
          Galeria de imagens
        </h2>
        <p style={{ opacity: 0.8, maxWidth: 900, margin: "0 auto 40px" }}>
          Explore os ângulos, cores e detalhes. Substitua os links abaixo pelas
          suas fotos do iPhone 17 e iPhone 16.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {[
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616348436163-7830c9e5870d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551808285-7ed79b51c3b7?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                height: 200,
              }}
            >
              <img
                src={src}
                alt={`Galeria ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.9)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Cores e acabamentos */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 24 }}>
          Cores e acabamentos
        </h2>
        <p style={{ opacity: 0.8, margin: "0 auto 28px", maxWidth: 800 }}>
          Escolha entre acabamentos exclusivos em titânio, com cores pensadas
          para destacar o design.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {[
            { name: "Laranja Titânio", color: "#ff6600" },
            { name: "Preto Titânio", color: "#111" },
            { name: "Azul Titânio", color: "#2454a6" },
            { name: "Natural Titânio", color: "#b7a89e" },
            { name: "Branco Titânio", color: "#f5f5f7" },
          ].map((c, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: c.color,
                  border: "1px solid rgba(255,255,255,0.2)",
                  margin: "0 auto 8px",
                }}
              />
              <span style={{ fontSize: 13, opacity: 0.8 }}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Opções de armazenamento e preço */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 24 }}>
          Armazenamento e preços
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {[
            { capacity: "128 GB", price: "US$ 1.099" },
            { capacity: "256 GB", price: "US$ 1.199" },
            { capacity: "512 GB", price: "US$ 1.349" },
            { capacity: "1 TB", price: "US$ 1.499" },
          ].map((opt, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{opt.capacity}</h3>
              <p style={{ fontWeight: 600, marginBottom: 14 }}>{opt.price}</p>
              <a
                href="#comprar"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 24,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  display: "inline-block",
                }}
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Vídeo ou destaque multimídia (placeholder) */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            borderRadius: 12,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1800&auto=format&fit=crop"
            alt="Destaque multimídia iPhone"
            style={{ width: "100%", height: 500, objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
              Filmagem cinematográfica.
            </h3>
            <p style={{ opacity: 0.85 }}>
              Gravação em alta faixa dinâmica, estabilização avançada e
              ferramentas Pro para criadores.
            </p>
          </div>
        </div>
      </section>

      {/* Acessórios recomendados */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 24 }}>
          Acessórios que combinam
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {[
            {
              name: "Capas MagSafe",
              desc: "Proteção e estilo com encaixe perfeito.",
              img: "https://images.unsplash.com/photo-1585386959984-a41552231635?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "AirPods Pro",
              desc: "Áudio superior com cancelamento ativo e modo ambiente.",
              img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Carregador MagSafe",
              desc: "Recarga rápida e alinhamento magnético.",
              img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Apple Watch",
              desc: "Integração total para saúde e notificações.",
              img: "https://images.unsplash.com/photo-1551808285-7ed79b51c3b7?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((acc, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              <img
                src={acc.img}
                alt={acc.name}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div style={{ padding: 16 }}>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{acc.name}</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>{acc.desc}</p>
                <a
                  href="#comprar"
                  style={{
                    backgroundColor: "#0071e3",
                    color: "#fff",
                    padding: "10px 16px",
                    borderRadius: 24,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    display: "inline-block",
                  }}
                >
                  Comprar
                </a>
                <a
                  href="#saiba-mais"
                  style={{
                    marginLeft: 12,
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.6)",
                    padding: "10px 16px",
                    borderRadius: 24,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    display: "inline-block",
                  }}
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos/Reviews */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 38, fontWeight: 700, marginBottom: 24 }}>
          O que estão dizendo
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {[
            {
              quote:
                "O melhor iPhone que já usei, desempenho absurdo e câmeras impecáveis.",
              author: "Mariana S.",
            },
            {
              quote:
                "Bateria dura o dia inteiro, e a gravação em vídeo é nível profissional.",
              author: "Carlos R.",
            },
            {
              quote:
                "Design em titânio é lindo e leve. A tela ProMotion faz diferença.",
              author: "Ana P.",
            },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: 20,
                textAlign: "left",
              }}
            >
              <p style={{ fontSize: 16, marginBottom: 12, opacity: 0.9 }}>
                “{r.quote}”
              </p>
              <span style={{ fontSize: 14, opacity: 0.7 }}>— {r.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sustentabilidade */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 18 }}>
          Feito pensando no planeta
        </h2>
        <p
          style={{
            opacity: 0.85,
            maxWidth: 900,
            margin: "0 auto 24px",
          }}
        >
          Materiais reciclados, eficiência energética e foco em reduzir a
          pegada de carbono em toda a cadeia de produção.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12,
              padding: 16,
              minWidth: 220,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>Titânio reciclado</h3>
            <p style={{ opacity: 0.8 }}>
              Uso de materiais com alto índice de reciclagem.
            </p>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12,
              padding: 16,
              minWidth: 220,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>
              Eficiência energética
            </h3>
            <p style={{ opacity: 0.8 }}>
              Otimizações de hardware e software para consumir menos energia.
            </p>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12,
              padding: 16,
              minWidth: 220,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 6 }}>Embalagem menor</h3>
            <p style={{ opacity: 0.8 }}>
              Redução de materiais e aumento de eficiência logística.
            </p>
          </div>
        </div>
      </section>

      {/* Trade-in e entrega */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 18 }}>
          Troque seu iPhone antigo
        </h2>
        <p style={{ opacity: 0.85, maxWidth: 800, margin: "0 auto 24px" }}>
          Receba crédito ao entregar seu iPhone antigo. Economize na compra do
          novo e ajude a reduzir o impacto ambiental.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a
            href="#comprar"
            style={{
              backgroundColor: "#0071e3",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 24,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Avalie seu aparelho
          </a>
          <a
            href="#saiba-mais"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "12px 20px",
              borderRadius: 24,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section
        style={{
          padding: "80px 20px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 18 }}>
          Perguntas frequentes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              q: "Qual é a diferença entre iPhone 17 Pro Max e iPhone 16 Pro Max?",
              a: "O 17 Pro Max traz o chip A19 Pro, câmeras atualizadas e melhorias de bateria e tela. O 16 Pro Max é a geração anterior com A18 Pro.",
            },
            {
              q: "Há suporte a 5G e Wi‑Fi 7?",
              a: "Sim, ambos os modelos suportam 5G, e o 17 Pro/Pro Max adiciona Wi‑Fi 7 para maior velocidade.",
            },
            {
              q: "Qual a autonomia de bateria?",
              a: "A autonomia é para o dia inteiro, variando conforme uso. Com recarga rápida e MagSafe, você volta ao topo rapidamente.",
            },
            {
              q: "Posso usar acessórios MagSafe antigos?",
              a: "Sim, o ecossistema MagSafe permanece compatível com as gerações novas.",
            },
            {
              q: "O iPhone é resistente à água?",
              a: "Sim, com classificação aproximada IP68, permitindo proteção contra respingos e imersão limitada.",
            },
            {
              q: "Como funcionam as opções de armazenamento?",
              a: "Você pode escolher entre 128GB, 256GB, 512GB e 1TB, conforme sua necessidade de espaço.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: 18,
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{item.q}</h3>
              <p style={{ opacity: 0.85 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada final para compra */}
      <section
        id="comprar"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,1))",
        }}
      >
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 18 }}>
          Pronto para o seu próximo iPhone?
        </h2>
        <p style={{ opacity: 0.85, maxWidth: 900, margin: "0 auto 28px" }}>
          Escolha o modelo, a capacidade e as cores perfeitas para o seu dia a
          dia. Aproveite os melhores recursos e o desempenho Pro.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <a
            href="#"
            style={{
              backgroundColor: "#0071e3",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: 28,
              textDecoration: "none",
              fontWeight: 700,
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
              padding: "16px 28px",
              borderRadius: 28,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Rodapé expandido */}
      <footer
        style={{
          padding: "60px 20px",
          textAlign: "center",
          fontSize: 14,
          color: "#aaa",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p>© {new Date().getFullYear()} Apple Inc. Todos os direitos reservados.</p>
        <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal</p>
        <p style={{ maxWidth: 900, margin: "12px auto 0", opacity: 0.7 }}>
          Este é um layout inspirado no site da Apple. Imagem ilustrativa.
          Preços podem variar por região e período promocional. Consulte
          disponibilidade e condições de pagamento na loja.
        </p>
      </footer>
    </main>
  );
};

export default IPhone;