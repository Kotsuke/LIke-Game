import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ZoomPreventer from "./components/ZoomPreventer";
import FixedResolutionWrapper from "./components/FixedResolutionWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Portfolio | Subandrio",
  description:
    "A bold, stylish portfolio website inspired by the Persona 5 UI. Showcasing projects, skills, and creative work with sharp angular designs and dynamic animations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <ZoomPreventer />
        <FixedResolutionWrapper>
          {children}
        </FixedResolutionWrapper>
      </body>
    </html>
  );
}
