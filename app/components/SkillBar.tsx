"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number; // 0 to 100
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="p5-skill-item" ref={ref}>
      <div className="p5-skill-header">
        <span className="p5-skill-name">{name}</span>
        <span className="p5-skill-level">{level}%</span>
      </div>
      <div className="p5-skill-bar-track">
        <div
          className="p5-skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
