import Image from "next/image";
import type { Project } from "@/content/en/projects";
import { projectContent } from "@/content/en/projects";

type ProjectListProps = { projects: Project[] };

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col gap-16 pt-6">
      {projects.map((project) => (
        <article key={project.slug} className="grid items-center gap-x-12 gap-y-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {project.image.src ? (
            <Image className="aspect-[16/10] w-full object-cover" src={project.image.src} alt={project.image.alt} width={960} height={600} />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center bg-surface text-center text-small text-muted" role="img" aria-label={project.image.alt}>
              {project.image.placeholder}
            </div>
          )}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-serif text-project-title leading-snug text-ink">{project.title}</h3>
            <p className="max-w-prose leading-relaxed text-muted">{project.description}</p>
            <ul aria-label={`${project.title}: ${projectContent.tagsLabel}`} className="flex flex-wrap gap-x-3 gap-y-1 text-small text-muted">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-small">
              {project.liveUrl && <li><a className="text-ink underline decoration-accent underline-offset-4" href={project.liveUrl}>{projectContent.linkLabels.live}</a></li>}
              {project.githubUrl && <li><a className="text-ink underline decoration-accent underline-offset-4" href={project.githubUrl}>{projectContent.linkLabels.github}</a></li>}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
