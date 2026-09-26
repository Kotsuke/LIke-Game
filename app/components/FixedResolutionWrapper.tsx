"use client";

import { useEffect, useState } from "react";

export default function FixedResolutionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const targetW = 1920;
      const targetH = 1080;

      const scaleX = window.innerWidth / targetW;
      const scaleY = window.innerHeight / targetH;

      // Scale to fit while maintaining aspect ratio
      setScale(Math.min(scaleX, scaleY));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          flexShrink: 0,
          position: "relative",
          backgroundColor: "var(--p5-black)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
