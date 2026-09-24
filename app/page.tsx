"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

interface PreviewData {
  icon: string;
  label: string;
  title: string;
  titleHighlight?: string;
  description: string;
}

const previews: Record<string, PreviewData> = {
  about: {
    icon: "◆",
    label: "// Who am I",
    title: "About",
    titleHighlight: "Me",
    description:
      "Full-stack developer and designer with 5+ years of experience crafting bold digital experiences. I build with clean code, striking design, and a passion for pushing creative boundaries.",
  },
  projects: {
    icon: "▸",
    label: "// My work",
    title: "Featured",
    titleHighlight: "Projects",
    description:
      "A curated collection of my finest work — from e-commerce platforms and social apps to AI-powered creative tools. Each project built with precision and attention to detail.",
  },
  skills: {
    icon: "★",
    label: "// Expertise",
    title: "Technical",
    titleHighlight: "Skills",
    description:
      "Mastery across the full stack — React, Next.js, TypeScript, Node.js, and beyond. Strong foundation in UI/UX design, animation, and database architecture.",
  },
  contact: {
    icon: "✉",
    label: "// Let's talk",
    title: "Get In",
    titleHighlight: "Touch",
    description:
      "Have a project in mind or want to collaborate? I'm always excited to hear about new opportunities. Drop me a message and let's create something amazing together.",
  },
};

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeKey = hovered || "about";
  const preview = previews[activeKey];

  return (
    <div className="p5-home-container">
      <Sidebar onHover={setHovered} activeKey={activeKey} />

      <div className="p5-preview-area p5-halftone p5-slash-bg">
        {/* Decorative diagonal stripes */}
        <div className="p5-preview-decor" />

        {/* Dynamic preview — changes based on hovered nav item or defaults to About */}
        {preview && (
          <div className="p5-preview-content" key={activeKey}>
            <div className="p5-preview-icon">
              <span>{preview.icon}</span>
            </div>
            <p className="p5-preview-label">{preview.label}</p>
            <h2 className="p5-preview-title">
              {preview.title}{" "}
              {preview.titleHighlight && (
                <span className="highlight">{preview.titleHighlight}</span>
              )}
            </h2>
            <p className="p5-preview-desc">{preview.description}</p>
            <div className="p5-preview-hint">
              <div className="arrow">
                <span>→</span>
              </div>
              <span>Click to view full details</span>
            </div>
          </div>
        )}

        {/* Background watermark */}
        <div className="p5-preview-default">
          <div className="p5-preview-watermark">P5</div>
        </div>
      </div>
    </div>
  );
}
