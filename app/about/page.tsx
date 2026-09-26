import SectionHeading from "../components/SectionHeading";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p5-page-container p5-halftone p5-slash-bg">
      <Link href="/" className="p5-back-btn" id="btn-back-about">
        <span>← Back</span>
      </Link>

      <div
        className="p5-page-inner"
        style={{ display: "flex", flexDirection: "column", height: "100vh", paddingBottom: 0 }}
      >
        <div className="p5-page-header" style={{ flexShrink: 0 }}>
          <SectionHeading subtitle="// Who am I" title="About Me" />
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: "80px",
            paddingRight: "20px",
            marginRight: "-20px",
            scrollbarWidth: "thin",
            scrollbarColor: "var(--p5-red) var(--p5-dark)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Profile card */}
            <div className="p5-card" style={{ padding: "40px" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--p5-red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: 900,
                  marginBottom: "24px",
                  transform: "skewX(-5deg)",
                }}
              >
                <span style={{ transform: "skewX(5deg)" }}>◆</span>
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}
              >
                Full-Stack Developer
              </h3>
              <p
                style={{
                  color: "var(--p5-gray)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                I&apos;m a passionate developer and designer with a love for
                building beautiful, functional web applications. With years of
                experience across the full stack, I bring ideas to life through
                clean code and thoughtful design.
              </p>
              <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {[
                  { num: "5+", label: "Years Exp" },
                  { num: "50+", label: "Projects" },
                  { num: "30+", label: "Clients" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "12px 20px",
                      background: "var(--p5-dark)",
                      borderLeft: "3px solid var(--p5-red)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        color: "var(--p5-red)",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--p5-gray)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About text */}
            <div>
              <p
                style={{
                  color: "var(--p5-gray-light)",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "20px",
                }}
              >
                My journey in tech started with a curiosity for how things work
                on the web. Today, I specialize in building modern web
                applications using cutting-edge technologies. I believe great
                software is a fusion of excellent engineering and stunning
                design.
              </p>
              <p
                style={{
                  color: "var(--p5-gray)",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "30px",
                }}
              >
                When I&apos;m not coding, you can find me exploring game design,
                creating digital art, or diving into the latest tech trends.
                I&apos;m always open to new challenges and collaborations.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Mobile Apps",
                  "API Architecture",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      background: "var(--p5-dark)",
                      borderLeft: "3px solid var(--p5-red)",
                      transform: "skewX(-3deg)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--p5-red)",
                        fontWeight: 800,
                        transform: "skewX(3deg)",
                      }}
                    >
                      ▸
                    </span>
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "0.85rem",
                        transform: "skewX(3deg)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
