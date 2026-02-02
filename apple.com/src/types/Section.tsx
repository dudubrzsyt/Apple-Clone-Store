// src/types/Section.ts
export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  description?: string[];
  price?: string;
  theme?: string;
  ctas?: {
    label: string;
    href: string;
    variant: "primary" | "ghost";
  }[];
}