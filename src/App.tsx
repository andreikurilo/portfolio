import { useEffect, useState } from "react";

const LinkedInUrl = "https://www.linkedin.com/in/akurilo/";
const GitHubUrl = "https://github.com/andreikurilo";
const XUrl = "https://x.com/andreikurilo";

const socials = [
  { label: "GitHub", href: GitHubUrl },
  { label: "LinkedIn", href: LinkedInUrl },
  { label: "X / Twitter", href: XUrl },
];

const projects = [
  {
    name: "Beat Flow",
    description:
      "A streaming application built with a microservice architecture, focused on service boundaries, backend design, and real-time product thinking.",
    href: "https://github.com/andreikurilo/beatflow",
    tags: [
      "Java",
      "Kafka",
      "React",
      "TypeScript",
      "Microservices",
      "Streaming",
      "Backend",
      "Distributed Systems",
    ],
  },
  {
    name: "Minorag",
    description:
      "A local-first code RAG tool for repositories, combining indexing, retrieval, Ollama integration, and developer-focused AI workflows.",
    href: "https://github.com/minorag/minorag",
    tags: ["RAG", "Ollama", "AI", "C#", "Code Search", "Local-First"],
  },
  {
    name: "GitHub",
    description:
      "A broader collection of projects, experiments, and technical explorations across AI applications, backend systems, and product engineering.",
    href: "https://github.com/andreikurilo",
    tags: [
      "TypeScript",
      "C#",
      "Java",
      "React",
      "AI",
      "Backend",
      "Product Engineering",
    ],
  },
  {
    name: "Portfolio Website (this website)",
    description:
      "Personal portfolio website built with React and Vite, focused on presenting production systems, distributed architecture work, and real-world engineering experience.",
    href: "https://github.com/andreikurilo/portfolio",
    tags: ["TypeScript", "React", "Vite"],
  },
];

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches;
      const initial = prefersLight ? "light" : "dark";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />
      <main className="container">
        <section className="hero card">
          <p className="eyebrow">
            Andrei Kurilo · Full-Stack Software Engineer
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "🌕 Yoda" : "🌑 Vader"}
            </button>
          </p>

          <h1>
            Building reliable systems and data-intensive applications used in
            real-world environments.
          </h1>

          <p>
            I am a full-stack software engineer experienced in building and
            owning complex systems end-to-end.
          </p>
          <p>
            I have developed platforms from the ground up, including a
            GitOps-based deployment system for Kubernetes edge environments in
            critical infrastructure, as well as data-intensive energy management
            and sustainability systems.
          </p>
          <p>
            I take responsibility across the full lifecycle — from architecture
            and implementation to production — with a focus on reliability,
            scalability, and real-world impact.
          </p>

          <div className="actions">
            <a
              className="button button-primary"
              href={LinkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="button" href={XUrl} target="_blank" rel="noreferrer">
              Read on X
            </a>
            <a
              className="button"
              href={GitHubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </section>

        <section className="grid-two">
          <div className="card">
            <h2>Selected projects</h2>
            <div className="project-list">
              {projects.map((project) => (
                <a
                  key={project.name}
                  className="project"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="project-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="stack">
            <section className="card">
              <h2>About</h2>
              <p>
                I am a full-stack software engineer experienced in building
                complex systems from scratch. My work includes a GitOps-based
                deployment platform for Kubernetes edge environments in critical
                infrastructure, as well as data-intensive energy management and
                sustainability systems.
              </p>
              <p>
                I have worked on systems involving distributed architectures,
                large-scale data processing, dashboards, and reporting
                workflows. I focus on designing reliable, scalable software that
                delivers real-world value.
              </p>
            </section>

            <section className="card">
              <h2>What I bring</h2>
              <ul className="value-list">
                <li>
                  Experience building platforms and products from scratch to
                  production
                </li>
                <li>
                  Strong backend and system design (distributed systems, APIs,
                  data processing)
                </li>
                <li>
                  Practical approach to building reliable, maintainable, and
                  scalable software
                </li>
                <li>
                  Product mindset — focusing on real-world use cases and user
                  impact
                </li>
              </ul>
            </section>

            <section className="card">
              <h2>Links</h2>
              <ul className="link-list">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
