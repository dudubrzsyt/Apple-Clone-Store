import React, { useEffect, useMemo, useState } from "react";

/**
 * Home.tsx — Página inicial inspirada no design de marketing da Apple.
 * - Tipografia SF, espaçamento refinado, foco em legibilidade e contraste.
 * - 13 seções completas conforme roteiro do usuário.
 * - Header com busca, conta Apple (login), carrinho e alternância de tema claro/escuro.
 * - Layout responsivo e acessível (aria-attributes, roles, foco).
 *
 * Observações:
 * - Substitua as URLs de imagens por assets oficiais da Apple quando possível.
 * - Este layout é apenas inspirado; não é afiliado à Apple.
 */

/* Tipos */
type CTA = { label: string; href: string; variant?: "primary" | "ghost" };
type Section = {
  id: string;
  title: string;
  subtitle?: string;
  description: string[];
  price?: string;
  ctas?: CTA[];
  imageAlt?: string;
  imageUrl?: string; // Trocar por asset oficial
  theme?: "light" | "dark";
};

/* Util: Tipografia base e temas */
const baseFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const useTheme = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("__theme_dark__") : null;
    return saved ? saved === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("__theme_dark__", String(dark));
    const root = document.documentElement;
    if (dark) {
      root.style.backgroundColor = "#000";
    } else {
      root.style.backgroundColor = "#fff";
    }
  }, [dark]);

  const colors = useMemo(
    () => ({
      pageBg: dark ? "#000" : "#fff",
      pageFg: dark ? "#f5f5f7" : "#1d1d1f",
      subtle: dark ? "rgba(255,255,255,0.7)" : "#6e6e73",
      divider: dark ? "rgba(255,255,255,0.12)" : "#e5e5ea",
      cardBg: dark ? "#111" : "#fff",
      cardBorder: dark ? "rgba(255,255,255,0.1)" : "#e5e5ea",
      link: dark ? "#7dc1ff" : "#06c",
      primary: "#0071e3",
      headerBg: dark ? "rgba(22,22,24,0.65)" : "rgba(250,250,250,0.85)",
    }),
    [dark]
  );

  return { dark, setDark, colors };
};

/* Dados das seções */
const sections: Section[] = [
  {
    id: "iphone15pro",
    title: "iPhone 15 Pro",
    subtitle: "Poder além do imaginável.",
    description: [
      "Criado em titânio aeroespacial.",
      "Mais leve. Mais resistente.",
      "Com o A17 Pro — o maior salto de performance já feito em um chip mobile.",
    ],
    price: "A partir de R$ ___.",
    ctas: [
      { label: "Comprar", href: "#comprar-iphone15pro", variant: "primary" },
      { label: "Saiba mais", href: "#saiba-iphone15pro", variant: "ghost" },
    ],
    imageAlt: "iPhone 15 Pro em titânio",
    imageUrl:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "iphone15",
    title: "iPhone 15",
    subtitle: "Cor. Brilho. Personalidade.",
    description: [
      "Com Dynamic Island.",
      "Câmera avançada 48MP.",
      "Uma bateria que dura o dia todo.",
    ],
    price: "A partir de R$ ___.",
    ctas: [{ label: "Comprar", href: "#comprar-iphone15", variant: "primary" }],
    imageAlt: "iPhone 15 em diversas cores",
    imageUrl:
      "https://images.unsplash.com/photo-1694523170759-f50ebd1aeaf3?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "macbookpro",
    title: "MacBook Pro",
    subtitle: "Potência que redefine limites.",
    description: [
      "Com chips M3, M3 Pro e M3 Max.",
      "Velocidade absurda.",
      "Autonomia inacreditável.",
      "E uma tela Liquid Retina XDR que impressiona.",
    ],
    price: "A partir de R$ ___.",
    ctas: [
      { label: "Comprar", href: "#comprar-macbookpro", variant: "primary" },
      { label: "Saiba mais", href: "#saiba-macbookpro", variant: "ghost" },
    ],
    imageAlt: "MacBook Pro com tela XDR",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "imac",
    title: "iMac 24”",
    subtitle: "Poder e personalidade em 7 cores.",
    description: ["Chip M3 ultrarrápido.", "Tela 4.5K Retina impressionante.", "Perfeito para trabalho, criatividade e estudos."],
    ctas: [{ label: "Saiba mais", href: "#saiba-imac", variant: "primary" }],
    imageAlt: "iMac 24 polegadas colorido",
    imageUrl:
      "https://images.unsplash.com/photo-1544385115-19c5560e9a5f?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "watch9",
    title: "Apple Watch Series 9",
    subtitle: "Brilhante. Poderoso.",
    description: ["Com o novo gesto de toque duplo.", "Chip S9 para respostas rápidas.", "E o display mais brilhante já visto em um Watch."],
    ctas: [{ label: "Saiba mais", href: "#saiba-watch9", variant: "primary" }],
    imageAlt: "Apple Watch Series 9 com mostrador vibrante",
    imageUrl:
      "https://images.unsplash.com/photo-1518443873285-58e4f77d8bb0?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "dark",
  },
  {
    id: "watchultra2",
    title: "Apple Watch Ultra 2",
    subtitle: "O relógio mais resistente da Apple.",
    description: ["Alumínio aeroespacial.", "GPS de precisão.", "Brilho de 3000 nits.", "Feito para aventuras extremas."],
    ctas: [{ label: "Saiba mais", href: "#saiba-ultra2", variant: "primary" }],
    imageAlt: "Apple Watch Ultra 2 robusto",
    imageUrl:
      "https://images.unsplash.com/photo-1675850187697-fd4d7408fbc4?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "dark",
  },
  {
    id: "airpods",
    title: "AirPods Pro (2ª Geração)",
    subtitle: "Áudio espacial personalizado. Cancelamento ativo de ruído até 2x melhor.",
    description: ["Transparência adaptativa.", "Som que envolve.", "Conforto que acompanha."],
    ctas: [{ label: "Saiba mais", href: "#saiba-airpods", variant: "primary" }],
    imageAlt: "AirPods Pro de 2ª geração",
    imageUrl:
      "https://images.unsplash.com/photo-1524678101253-e6c6f6e4f93f?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "appstore",
    title: "App Store",
    subtitle: "Milhões de apps. Segurança. Privacidade.",
    description: [
      "A plataforma perfeita para designers, gamers e criadores.",
      "Apple Arcade: Jogos incríveis. Sem anúncios. Sem compras internas.",
    ],
    ctas: [{ label: "Explorar", href: "#explorar-appstore", variant: "primary" }],
    imageAlt: "Ícones de apps da App Store",
    imageUrl:
      "https://images.unsplash.com/photo-1606761561511-0f3c0d2b5c89?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "tvplus",
    title: "Apple TV+",
    subtitle: "Séries e filmes originais. Criações premiadas.",
    description: ["A melhor produção cinematográfica, feita por artistas do mundo todo."],
    ctas: [{ label: "Assinar", href: "#assinar-tvplus", variant: "primary" }],
    imageAlt: "Apple TV+ em uma tela com conteúdo original",
    imageUrl:
      "https://images.unsplash.com/photo-1593352157498-9cd0b2b7b5c2?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "dark",
  },
  {
    id: "music",
    title: "Apple Music",
    subtitle: "Mais de 100 milhões de músicas. Playlists exclusivas.",
    description: ["Áudio espacial com Dolby Atmos.", "O som que você ama, com a qualidade que você nunca ouviu."],
    ctas: [{ label: "Ouvir agora", href: "#ouvir-music", variant: "primary" }],
    imageAlt: "Interface com Apple Music e capas de álbuns",
    imageUrl:
      "https://images.unsplash.com/photo-1526401485004-2aa7e46a67f3?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "icloud",
    title: "iCloud",
    subtitle: "Seu mundo. Sempre seguro.",
    description: ["Fotos, arquivos, backups e senhas — tudo sincronizado nos seus dispositivos Apple."],
    ctas: [{ label: "Saiba mais", href: "#saiba-icloud", variant: "primary" }],
    imageAlt: "Pasta de nuvem representando iCloud",
    imageUrl:
      "https://images.unsplash.com/photo-1518977956815-dee5f9f25f14?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "support",
    title: "Suporte Apple",
    subtitle: "Ajuda oficial.",
    description: ["Guias. Tutoriais.", "Assistência técnica confiável.", "Tudo para deixar seus dispositivos funcionando como novos."],
    ctas: [{ label: "Acessar suporte", href: "#acessar-suporte", variant: "primary" }],
    imageAlt: "Ícone de suporte técnico Apple",
    imageUrl:
      "https://images.unsplash.com/photo-1554221558-b12cdc99f6c5?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
  {
    id: "store",
    title: "Apple Store",
    subtitle: "A melhor forma de comprar produtos Apple.",
    description: ["Entrega rápida.", "Personalização.", "Troca facilitada.", "Financiamento em até 12x.", "Atendimento especializado."],
    ctas: [{ label: "Comprar agora", href: "#comprar-agora", variant: "primary" }],
    imageAlt: "Apple Store com experiências de compra",
    imageUrl:
      "https://images.unsplash.com/photo-1515859005217-8a1f118bc1e1?q=80&w=1800&auto=format&fit=crop", // Substituir por asset oficial Apple
    theme: "light",
  },
];

/* Estilos globais */
const styles = {
  page: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    fontFamily: baseFont,
    backgroundColor: colors.pageBg,
    color: colors.pageFg,
    lineHeight: 1.5,
  }),
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px",
  } as React.CSSProperties,
  header: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
    backdropFilter: "saturate(180%) blur(14px)",
    backgroundColor: colors.headerBg,
    borderBottom: `1px solid ${colors.divider}`,
  }),
  headerInner: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: 16,
    padding: "10px 16px",
    fontSize: 14,
  } as React.CSSProperties,
  nav: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  } as React.CSSProperties,
  navLink: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    color: colors.pageFg,
    textDecoration: "none",
    padding: "8px 6px",
    opacity: 0.92,
    transition: "opacity .2s ease",
  }),
  actions: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  } as React.CSSProperties,
  iconBtn: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    background: "transparent",
    border: `1px solid ${colors.divider}`,
    color: colors.pageFg,
    borderRadius: 20,
    padding: "6px 10px",
    cursor: "pointer",
    fontSize: 13,
  }),
  logo: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: colors.pageFg,
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: -0.2,
    fontSize: 18,
  }),
  hero: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    padding: "56px 0",
    borderBottom: `1px solid ${colors.divider}`,
  }),
  section: (colors: ReturnType<typeof useTheme>["colors"], theme?: "light" | "dark"): React.CSSProperties => ({
    padding: "56px 0",
    borderBottom: `1px solid ${colors.divider}`,
    backgroundColor: theme === "dark" ? (colors.cardBg === "#111" ? "#0e0e0f" : colors.cardBg) : colors.pageBg,
  }),
  sectionInner: {
    display: "grid",
    gap: 24,
    gridTemplateColumns: "1fr",
  } as React.CSSProperties,
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 24,
  } as React.CSSProperties,
  title: {
    fontSize: 44,
    fontWeight: 700,
    letterSpacing: -0.8,
    margin: 0,
  } as React.CSSProperties,
  subtitle: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    fontSize: 20,
    color: colors.subtle,
    marginTop: 6,
  }),
  paragraph: {
    fontSize: 16,
    marginTop: 8,
  } as React.CSSProperties,
  price: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 8,
  } as React.CSSProperties,
  ctas: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 16,
  } as React.CSSProperties,
  btnPrimary: {
    backgroundColor: "#0071e3",
    color: "#fff",
    borderRadius: 24,
    padding: "12px 18px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  } as React.CSSProperties,
  btnGhost: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    backgroundColor: "transparent",
    color: colors.pageFg,
    border: `1px solid ${colors.divider}`,
    borderRadius: 24,
    padding: "12px 18px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  }),
  image: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    width: "100%",
    borderRadius: 16,
    border: `1px solid ${colors.cardBorder}`,
    boxShadow: "0 24px 60px rgba(0,0,0,0.20)",
  }),
  gridTwo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    alignItems: "center",
  } as React.CSSProperties,
  gridResponsive: {
    "@media(max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  } as Record<string, React.CSSProperties>,
  footer: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    backgroundColor: colors.cardBg,
    color: colors.subtle,
    padding: "36px 0",
    borderTop: `1px solid ${colors.divider}`,
    marginTop: 24,
  }),
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 24,
  } as React.CSSProperties,
  footerColTitle: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    fontWeight: 700,
    color: colors.pageFg,
    marginBottom: 10,
    fontSize: 14,
  }),
  footerLink: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    display: "block",
    textDecoration: "none",
    color: colors.subtle,
    padding: "6px 0",
    fontSize: 13,
  }),
  legal: (colors: ReturnType<typeof useTheme>["colors"]): React.CSSProperties => ({
    marginTop: 20,
    fontSize: 12,
    color: colors.subtle,
  }),
};

/* Componentes auxiliares */
const ThemeToggle: React.FC<{ dark: boolean; setDark: (v: boolean) => void; colors: ReturnType<typeof useTheme>["colors"] }> = ({
  dark,
  setDark,
  colors,
}) => (
  <button
    type="button"
    aria-label="Alternar tema"
    onClick={() => setDark(!dark)}
    style={styles.iconBtn(colors)}
  >
    {dark ? "☀️ Claro" : "🌙 Escuro"}
  </button>
);

const SearchButton: React.FC<{ colors: ReturnType<typeof useTheme>["colors"]; onClick: () => void }> = ({ colors, onClick }) => (
  <button type="button" aria-label="Buscar" onClick={onClick} style={styles.iconBtn(colors)}>
    🔍
  </button>
);

const AccountButton: React.FC<{ colors: ReturnType<typeof useTheme>["colors"]; onClick: () => void }> = ({ colors, onClick }) => (
  <button type="button" aria-label="Conta Apple" onClick={onClick} style={styles.iconBtn(colors)}>
    👤 Conta
  </button>
);

const CartButton: React.FC<{ colors: ReturnType<typeof useTheme>["colors"]; onClick: () => void }> = ({ colors, onClick }) => (
  <button type="button" aria-label="Carrinho" onClick={onClick} style={styles.iconBtn(colors)}>
    🛒
  </button>
);

/* Modais simples */
const Modal: React.FC<{
  title: string;
  onClose: () => void;
  colors: ReturnType<typeof useTheme>["colors"];
  children?: React.ReactNode; // 👈 aqui está a correção
}> = ({ title, onClose, colors, children }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "grid",
        placeItems: "center",
        zIndex: 200,
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 520,
          backgroundColor: colors.cardBg,
          color: colors.pageFg,
          border: `1px solid ${colors.divider}`,
          borderRadius: 16,
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          padding: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 id="modal-title" style={{ margin: 0, fontSize: 18 }}>{title}</h3>
          <button type="button" aria-label="Fechar" onClick={onClose} style={styles.iconBtn(colors)}>
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const SearchModal: React.FC<{ onClose: () => void; colors: ReturnType<typeof useTheme>["colors"] }> = ({ onClose, colors }) => {
  const [q, setQ] = useState("");
  return (
    <Modal title="Buscar" onClose={onClose} colors={colors}>
      <form
        onSubmit={(e) => e.preventDefault()}
        role="search"
        aria-label="Pesquisar no site"
        style={{ display: "grid", gap: 12 }}
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar produtos, serviços e suporte"
          aria-label="Campo de busca"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: `1px solid ${colors.divider}`,
            background: "transparent",
            color: "inherit",
            fontSize: 14,
          }}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <button type="submit" style={styles.btnPrimary}>Buscar</button>
          <button type="button" onClick={onClose} style={styles.btnGhost(colors)}>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
};

const AccountModal: React.FC<{ onClose: () => void; colors: ReturnType<typeof useTheme>["colors"] }> = ({ onClose, colors }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Modal title="Entrar com Apple ID" onClose={onClose} colors={colors}>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "grid", gap: 12 }}
        aria-label="Login da conta Apple"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          aria-label="E-mail"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: `1px solid ${colors.divider}`,
            background: "transparent",
            color: "inherit",
            fontSize: 14,
          }}
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Senha"
          aria-label="Senha"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: `1px solid ${colors.divider}`,
            background: "transparent",
            color: "inherit",
            fontSize: 14,
          }}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <button type="submit" style={styles.btnPrimary}>Entrar</button>
          <button type="button" onClick={onClose} style={styles.btnGhost(colors)}>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
};

const CartModal: React.FC<{ onClose: () => void; colors: ReturnType<typeof useTheme>["colors"] }> = ({ onClose, colors }) => {
  return (
    <Modal title="Seu carrinho" onClose={onClose} colors={colors}>
      <div style={{ display: "grid", gap: 12 }}>
        <p style={{ margin: 0 }}>Seu carrinho está vazio.</p>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="#store" style={styles.btnPrimary}>Ir à Loja</a>
          <button type="button" onClick={onClose} style={styles.btnGhost(colors)}>Fechar</button>
        </div>
      </div>
    </Modal>
  );
};

/* Header */
const Header: React.FC<{
  colors: ReturnType<typeof useTheme>["colors"];
  dark: boolean;
  setDark: (v: boolean) => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenCart: () => void;
}> = ({ colors, dark, setDark, onOpenSearch, onOpenAccount, onOpenCart }) => {
  return (
    <header style={styles.header(colors)} role="banner">
      <div style={{ ...styles.headerInner, ...styles.container }}>
        <a href="#" style={styles.logo(colors)} aria-label="Apple Home">
          <span aria-hidden="true"></span>
        </a>
        <nav style={styles.nav} aria-label="Navegação principal">
          {["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Suporte"].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} style={styles.navLink(colors)}>
              {label}
            </a>
          ))}
        </nav>
        <div style={styles.actions}>
          <ThemeToggle dark={dark} setDark={setDark} colors={colors} />
          <SearchButton colors={colors} onClick={onOpenSearch} />
          <AccountButton colors={colors} onClick={onOpenAccount} />
          <CartButton colors={colors} onClick={onOpenCart} />
        </div>
      </div>
    </header>
  );
};

/* Seção genericamente renderizada */
const SectionBlock: React.FC<{ section: Section; colors: ReturnType<typeof useTheme>["colors"] }> = ({ section, colors }) => {
  const isHero = section.id === "iphone15pro";
  const layoutTwoCols = !isHero;

  const blockStyle = isHero ? styles.hero(colors) : styles.section(colors, section.theme);

  return (
    <section id={section.id} style={blockStyle} aria-labelledby={`${section.id}-title`}>
      <div style={{ ...styles.container }}>
        {isHero ? (
          <div style={styles.heroGrid}>
            <div>
              <h1 id={`${section.id}-title`} style={{ ...styles.title, fontSize: 56 }}>{section.title}</h1>
              {section.subtitle && <p style={styles.subtitle(colors)}>{section.subtitle}</p>}
              {section.description.map((d, idx) => (
                <p key={idx} style={styles.paragraph}>{d}</p>
              ))}
              {section.price && <p style={styles.price}>{section.price}</p>}
              {section.ctas && (
                <div style={styles.ctas}>
                  {section.ctas.map((cta) =>
                    cta.variant === "primary" ? (
                      <a key={cta.label} href={cta.href} style={styles.btnPrimary}>
                        {cta.label} →
                      </a>
                    ) : (
                      <a key={cta.label} href={cta.href} style={styles.btnGhost(colors)}>
                        {cta.label} →
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
            {section.imageUrl && (
              <img src={section.imageUrl} alt={section.imageAlt || section.title} style={styles.image(colors)} />
            )}
          </div>
        ) : (
          <div
            style={{
              ...styles.gridTwo,
              ...(styles.gridResponsive["@media(max-width: 980px)"] ?? {}),
            }}
          >
            <div>
              <h2 id={`${section.id}-title`} style={styles.title}>{section.title}</h2>
              {section.subtitle && <p style={styles.subtitle(colors)}>{section.subtitle}</p>}
              {section.description.map((d, idx) => (
                <p key={idx} style={styles.paragraph}>{d}</p>
              ))}
              {section.price && <p style={styles.price}>{section.price}</p>}
              {section.ctas && (
                <div style={styles.ctas}>
                  {section.ctas.map((cta) =>
                    cta.variant === "primary" ? (
                      <a key={cta.label} href={cta.href} style={styles.btnPrimary}>
                        {cta.label} →
                      </a>
                    ) : (
                      <a key={cta.label} href={cta.href} style={styles.btnGhost(colors)}>
                        {cta.label} →
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
            {section.imageUrl && (
              <img src={section.imageUrl} alt={section.imageAlt || section.title} style={styles.image(colors)} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

/* Footer */
const Footer: React.FC<{ colors: ReturnType<typeof useTheme>["colors"] }> = ({ colors }) => {
  return (
    <footer style={styles.footer(colors)} role="contentinfo">
      <div style={{ ...styles.container }}>
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerColTitle(colors)}>Descobrir</div>
            <a href="#mac" style={styles.footerLink(colors)}>Mac</a>
            <a href="#ipad" style={styles.footerLink(colors)}>iPad</a>
            <a href="#iphone" style={styles.footerLink(colors)}>iPhone</a>
            <a href="#watch" style={styles.footerLink(colors)}>Watch</a>
            <a href="#tv" style={styles.footerLink(colors)}>TV</a>
            <a href="#music" style={styles.footerLink(colors)}>Music</a>
          </div>
          <div>
            <div style={styles.footerColTitle(colors)}>Serviços</div>
            <a href="#apple-id" style={styles.footerLink(colors)}>Apple ID</a>
            <a href="#icloud" style={styles.footerLink(colors)}>iCloud</a>
            <a href="#applecare" style={styles.footerLink(colors)}>AppleCare</a>
            <a href="#gift-cards" style={styles.footerLink(colors)}>Gift Cards</a>
          </div>
          <div>
            <div style={styles.footerColTitle(colors)}>Suporte</div>
            <a href="#support" style={styles.footerLink(colors)}>Suporte Apple</a>
            <a href="#status" style={styles.footerLink(colors)}>Status do sistema</a>
            <a href="#downloads" style={styles.footerLink(colors)}>Downloads</a>
            <a href="#contact" style={styles.footerLink(colors)}>Contato</a>
          </div>
          <div>
            <div style={styles.footerColTitle(colors)}>Empresa</div>
            <a href="#about" style={styles.footerLink(colors)}>Sobre a Apple</a>
            <a href="#newsroom" style={styles.footerLink(colors)}>Newsroom</a>
            <a href="#jobs" style={styles.footerLink(colors)}>Carreiras</a>
            <a href="#investors" style={styles.footerLink(colors)}>Investidores</a>
          </div>
        </div>
        <div style={styles.legal(colors)}>
          <p>Copyright © {new Date().getFullYear()} Apple Inc. Todos os direitos reservados.</p>
          <p>Privacidade • Termos de uso • Vendas e reembolsos • Legal • Mapa do site</p>
          <p>Este é um layout de demonstração inspirado no site da Apple. Imagens são placeholders.</p>
        </div>
      </div>
    </footer>
  );
};

/* Home */
const Home: React.FC = () => {
  const { dark, setDark, colors } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Map de anchor rápido para navegação do header
  const anchorMap: Record<string, string> = {
    mac: "macbookpro",
    ipad: "imac",
    iphone: "iphone15pro",
    watch: "watch9",
    tv: "tvplus",
    music: "music",
    suporte: "support",
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === "Escape") {
        setShowSearch(false);
        setShowAccount(false);
        setShowCart(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main style={styles.page(colors)}>
      <Header
        colors={colors}
        dark={dark}
        setDark={setDark}
        onOpenSearch={() => setShowSearch(true)}
        onOpenAccount={() => setShowAccount(true)}
        onOpenCart={() => setShowCart(true)}
      />

      {/* Hero iPhone 15 Pro */}
      <SectionBlock section={sections.find((s) => s.id === "iphone15pro")!} colors={colors} />

      {/* Demais seções */}
      {sections
        .filter((s) => s.id !== "iphone15pro")
        .map((section) => (
          <SectionBlock key={section.id} section={section} colors={colors} />
        ))}

      <Footer colors={colors} />

      {/* Modais */}
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} colors={colors} />}
      {showAccount && <AccountModal onClose={() => setShowAccount(false)} colors={colors} />}
      {showCart && <CartModal onClose={() => setShowCart(false)} colors={colors} />}
    </main>
  );
};

export default Home;