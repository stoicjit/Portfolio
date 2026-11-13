import Image from "next/image";
import type { Project } from "@/content/projects";
import { projectContent } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-space-4 rounded-card border border-border p-space-4">
      {project.image.src ? (
        <Image
          className="aspect-video w-full rounded-control object-cover"
          src={project.image.src}
          alt={project.image.alt}
          width={640}
          height={360}
        />
      ) : (
        <div
          aria-label={project.image.alt}
          className="flex aspect-video items-center justify-center rounded-control border border-border text-small text-muted"
          role="img"
        >
          {project.image.placeholder}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-space-3">
        <h3 className="text-card-title font-semibold text-foreground">{project.title}</h3>
        <p className="text-muted">{project.description}</p>
        <ul aria-label={`${project.title} technologies and capabilities`} className="flex flex-wrap gap-space-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-control border border-border px-space-2 py-space-2 text-small text-muted">
              {tag}
            </li>
          ))}
        </ul>
        {(project.liveUrl || project.githubUrl) && (
          <ul className="mt-auto flex flex-wrap gap-space-4 pt-space-2">
            {project.liveUrl && (
              <li>
                <a className="text-foreground underline" href={project.liveUrl}>
                  {projectContent.linkLabels.live}
                </a>
              </li>
            )}
            {project.githubUrl && (
              <li>
                <a className="text-foreground underline" href={project.githubUrl}>
                  {projectContent.linkLabels.github}
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}
