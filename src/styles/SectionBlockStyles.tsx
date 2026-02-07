import { CSSProperties } from "react";

const styles = {
  hero: (colors: any): CSSProperties => ({
    backgroundColor: colors.background,
    padding: "80px 20px",
    textAlign: "center" as CSSProperties["textAlign"],
  }),
  section: (colors: any, theme?: string): CSSProperties => ({
    backgroundColor: theme === "dark" ? "#1d1d1f" : colors.background,
    color: theme === "dark" ? "#fff" : colors.text,
    padding: "60px 20px",
  }),
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  title: {
    fontWeight: 700,
    marginBottom: "20px",
  },
  subtitle: (colors: any): CSSProperties => ({
    color: colors.secondary,
    fontSize: "1.2rem",
    marginBottom: "20px",
  }),
  paragraph: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  price: {
    fontSize: "1.4rem",
    fontWeight: 600,
    marginTop: "20px",
  },
  ctas: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  btnPrimary: {
    backgroundColor: "#0071e3",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
  },
  btnGhost: (colors: any): CSSProperties => ({
    backgroundColor: "transparent",
    color: colors.primary,
    padding: "12px 24px",
    borderRadius: "8px",
    border: `1px solid ${colors.primary}`,
    textDecoration: "none",
  }),
  twoCols: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  oneCol: {
    display: "block",
  },
};

export default styles;