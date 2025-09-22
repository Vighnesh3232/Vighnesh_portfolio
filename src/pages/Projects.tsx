import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getProjects();
      setProjects(data);
    })();
  }, []);

  return (
    <main className="projects-page">
      <h1 className="projects-title">Projects</h1>

      <div className="project-grid">
        {projects.map((p) => {
          const card = (
            <article className="project-card" key={p.title}>
              <img
                src={p.image?.url || 'https://picsum.photos/seed/project/800/450'}
                alt={p.title}
                className="project-thumb"
              />
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
              {card}
            </a>
          ) : (
            card
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
