interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({ number, title, description, tags, href = "#" }: ProjectCardProps) {
  return (
    <div className="p5-project-card">
      <div className="p5-project-thumb">
        <span className="p5-project-number">{number}</span>
      </div>
      <div className="p5-project-body">
        <h3 className="p5-project-title">{title}</h3>
        <p className="p5-project-desc">{description}</p>
        <div className="p5-project-tags">
          {tags.map((tag) => (
            <span className="p5-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a href={href} className="p5-project-link" target="_blank" rel="noopener noreferrer">
          View Project <span>→</span>
        </a>
      </div>
    </div>
  );
}
