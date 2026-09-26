import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="p5-page-container p5-halftone p5-slash-bg">
      <Link href="/" className="p5-back-btn" id="btn-back-contact">
        <span>← Back</span>
      </Link>

      <div
        className="p5-page-inner"
        style={{ display: "flex", flexDirection: "column", height: "100vh", paddingBottom: 0 }}
      >
        <div className="p5-page-header" style={{ flexShrink: 0 }}>
          <SectionHeading subtitle="// Let's talk" title="Contact" />
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
          <div className="p5-contact-grid">
            <div className="p5-contact-info">
              <h3>Get in Touch</h3>
              <p>
                Have a project in mind or just want to chat? Drop me a message
                and I&apos;ll get back to you as soon as possible. I&apos;m
                always excited to hear about new opportunities and
                collaborations.
              </p>

              {/* Contact details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "30px",
                }}
              >
                {[
                  { icon: "✉", label: "Email", value: "hello@portfolio.dev" },
                  { icon: "◎", label: "Location", value: "Jakarta, Indonesia" },
                  { icon: "◆", label: "Availability", value: "Open to work" },
                ].map((detail) => (
                  <div
                    key={detail.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 18px",
                      background: "var(--p5-dark)",
                      borderLeft: "3px solid var(--p5-red)",
                    }}
                  >
                    <span style={{ color: "var(--p5-red)", fontSize: "1.2rem" }}>
                      {detail.icon}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--p5-gray)",
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          marginBottom: "2px",
                        }}
                      >
                        {detail.label}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p5-social-links">
                {["GH", "LI", "TW", "DR"].map((label) => (
                  <a
                    href="#"
                    className="p5-social-link"
                    key={label}
                    aria-label={label}
                  >
                    <span
                      style={{
                        transform: "skewX(5deg)",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
