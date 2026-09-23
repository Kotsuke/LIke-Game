interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: "20px" }} id={id}>
      {subtitle && (
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "var(--p5-red)",
            marginBottom: "8px",
          }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="p5-heading">{title}</h2>
    </div>
  );
}
