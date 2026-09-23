import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio | Persona 5 Style",
  description:
    "A bold, stylish portfolio website inspired by the Persona 5 UI. Showcasing projects, skills, and creative work with sharp angular designs and dynamic animations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
