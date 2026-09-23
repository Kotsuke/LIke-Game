"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export interface NavItem {
  key: string;
  label: string;
  icon: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: "about", label: "About", icon: "◆", href: "/about" },
  { key: "projects", label: "Projects", icon: "▸", href: "/projects" },
  { key: "skills", label: "Skills", icon: "★", href: "/skills" },
  { key: "contact", label: "Contact", icon: "✉", href: "/contact" },
];

interface SidebarProps {
  onHover?: (key: string | null) => void;
}

export default function Sidebar({ onHover }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (item: NavItem) => {
    setIsOpen(false);
    router.push(item.href);
  };

  const handleMouseEnter = (key: string) => {
    onHover?.(key);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  const isActive = (item: NavItem) => {
    return pathname === item.href;
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className={`p5-hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        id="nav-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay */}
      <div
        className={`p5-overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`p5-sidebar ${isOpen ? "open" : ""}`} id="sidebar-nav">
        <button
          className="p5-sidebar-logo"
          onClick={() => { router.push("/"); setIsOpen(false); }}
          style={{ cursor: "pointer", border: "none", background: "none", textAlign: "left", width: "100%", color: "var(--p5-white)", fontFamily: "inherit" }}
        >
          Port<span className="accent">folio</span>
        </button>

        <ul className="p5-nav-list">
          {navItems.map((item) => (
            <li className="p5-nav-item" key={item.key}>
              <button
                className={`p5-nav-link ${isActive(item) ? "active" : ""}`}
                onClick={() => handleClick(item)}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
                id={`nav-${item.key}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
                <span className="p5-star">✦</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="p5-sidebar-footer">
          <p>© 2026</p>
        </div>
      </aside>
    </>
  );
}
