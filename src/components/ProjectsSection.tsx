import { Project } from '../types';
import projectsData from '../data/projects.json';

export default function ProjectsSection() {
  const projects = projectsData as unknown as Project[];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="project-row">
        {projects.map((p) => {
          const Card = (
            <article className="project-card" key={p.title}>
              <img src={p.image?.url} alt={p.title} className="project-thumb" />
              <div className="project-meta">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <small>{p.techUsed}</small>
              </div>
            </article>
          );

          return p.links?.github ? (
            <a
              key={p.title}
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              aria-label={`${p.title} on GitHub`}
            >
              {Card}
            </a>
          ) : (
            Card
          );
        })}
      </div>
    </section>
  );
}
