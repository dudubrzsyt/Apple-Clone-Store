import React from "react";
import { useTheme } from "../hooks/useTheme"; // ajuste o caminho se seu hook estiver em outro lugar
import styles from "../styles/SectionBlockStyles"; // ajuste para onde você guardou os estilos
import { Section } from "../types/Section"; // ajuste o caminho se seu tipo estiver em outro lugar


/* Seção genericamente renderizada */
const SectionBlock: React.FC<{
  section?: Section; 
  colors: ReturnType<typeof useTheme>["colors"];
}> = ({ section, colors }) => {
  
  // Se não vier section, não renderiza nada
  if (!section) {
    console.warn("SectionBlock recebeu section undefined");
    return null;
  }

  const isHero = section.id === "iphone15pro";
  const layoutTwoCols = !isHero;

  const blockStyle = isHero 
    ? styles.hero(colors) 
    : styles.section(colors, section.theme);

  return (
    <section 
      id={section.id || "section-fallback"} 
      style={blockStyle} 
      aria-labelledby={`${section.id || "section"}-title`}
    >
      <div style={{ ...styles.container }}>
        {isHero ? (
          <div style={styles.heroGrid}>
            <div>
              {/* título */}
              <h1 
                id={`${section.id || "section"}-title`} 
                style={{ ...styles.title, fontSize: 56 }}
              >
                {section.title || "Título não disponível"}
              </h1>

              {/* subtítulo */}
              {section.subtitle && (
                <p style={styles.subtitle(colors)}>{section.subtitle}</p>
              )}

              {/* descrição */}
              {Array.isArray(section.description) && section.description.length > 0 && (
                section.description.map((d, idx) => (
                  <p key={idx} style={styles.paragraph}>{d}</p>
                ))
              )}

              {/* preço */}
              {section.price && <p style={styles.price}>{section.price}</p>}

              {/* CTAs */}
              {Array.isArray(section.ctas) && section.ctas.length > 0 && (
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
          </div>
        ) : (
          <div style={layoutTwoCols ? styles.twoCols : styles.oneCol}>
            <h2 id={`${section.id}-title`} style={styles.title}>
              {section.title || "Título não disponível"}
            </h2>
            {/* aqui você pode renderizar conteúdo genérico para seções não-hero */}
          </div>
        )}
      </div>
    </section>
  );
};