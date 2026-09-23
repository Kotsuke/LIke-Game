import SectionHeading from "../components/SectionHeading";
import SkillBar from "../components/SkillBar";
import Link from "next/link";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI / UX Design", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "CSS / Animation", level: 92 },
  { name: "Database Design", level: 80 },
  { name: "Python", level: 75 },
  { name: "DevOps / CI/CD", level: 70 },
];

export default function SkillsPage() {
  return (
    <div className="p5-page-container">
      <Link href="/" className="p5-back-btn" id="btn-back-skills">
        <span>← Back</span>
      </Link>

      <div className="p5-page-content p5-halftone p5-slash-bg">
        <div className="p5-page-inner">
          <div className="p5-page-header">
            <SectionHeading subtitle="// Expertise" title="Skills" />
          </div>

          <div className="p5-skills-grid">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Tools & Tech section */}
          <div style={{ marginTop: "60px" }}>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
                color: "var(--p5-white)",
              }}
            >
              Tools & Technologies
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Figma",
                "Git",
                "Tailwind CSS",
                "GSAP",
                "Three.js",
                "GraphQL",
              ].map((tool) => (
                <div
                  key={tool}
                  className="p5-tag"
                  style={{ padding: "8px 18px", fontSize: "0.8rem" }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
