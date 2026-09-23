import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment integration, and a dynamic admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    number: "02",
    title: "Social Media App",
    description:
      "Real-time social platform with live chat, stories, and an AI-powered content recommendation engine.",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    number: "03",
    title: "Portfolio Generator",
    description:
      "A drag-and-drop portfolio builder that lets creatives showcase their work with customizable themes.",
    tags: ["Vue.js", "Firebase", "GSAP"],
  },
  {
    number: "04",
    title: "Game Dashboard",
    description:
      "Analytics dashboard for game developers with real-time metrics, player tracking, and A/B testing tools.",
    tags: ["React", "D3.js", "PostgreSQL"],
  },
  {
    number: "05",
    title: "AI Art Studio",
    description:
      "A creative tool powered by generative AI that transforms text prompts into stunning digital artwork.",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    number: "06",
    title: "Music Streaming UI",
    description:
      "A sleek music player interface with waveform visualization, playlist management, and social sharing.",
    tags: ["Svelte", "Web Audio", "CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="p5-page-container">
      <Link href="/" className="p5-back-btn" id="btn-back-projects">
        <span>← Back</span>
      </Link>

      <div className="p5-page-content p5-halftone p5-slash-bg">
        <div className="p5-page-inner">
          <div className="p5-page-header">
            <SectionHeading subtitle="// My work" title="Projects" />
          </div>

          <div className="p5-projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
