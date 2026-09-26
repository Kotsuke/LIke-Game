"use client";

import { useEffect } from "react";

export default function ZoomPreventer() {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.ctrlKey &&
        (e.key === "=" || e.key === "-" || e.key === "+" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeydown, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
