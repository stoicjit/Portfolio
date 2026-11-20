"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/content/en/projects";
import { projectContent } from "@/content/en/projects";

type ProjectListProps = {
  locale: string;
  projects: Project[];
};

export function ProjectList({ locale, projects }: ProjectListProps) {
  const [openProjectSlug, setOpenProjectSlug] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-16 pt-6">
      {projects.map((project) => {
        const isOpen = openProjectSlug === project.slug;

        return (
          <article key={project.slug} className="grid items-center gap-x-12 gap-y-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <button
              type="button"
              className="col-span-full grid w-full items-center gap-x-12 gap-y-6 text-left md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
              aria-expanded={isOpen}
              aria-controls={`project-details-${project.slug}`}
              aria-label={`${isOpen ? projectContent.caseStudyLabels.hideDetails : projectContent.caseStudyLabels.showDetails}: ${project.title}`}
              onClick={() => setOpenProjectSlug(isOpen ? null : project.slug)}
            >
              {project.image.src ? (
                <Image
                  className="aspect-[16/10] w-full object-cover"
                  src={project.image.src}
                  alt={project.image.alt}
                  width={960}
                  height={600}
                />
              ) : (
                <span
                  className="flex aspect-[16/10] w-full items-center justify-center bg-surface text-center text-small text-muted"
                  role="img"
                  aria-label={project.image.alt}
                >
                  {project.image.placeholder}
                </span>
              )}
              <span className="flex flex-col items-start gap-4">
                <span className="font-serif text-project-title leading-snug text-ink">{project.title}</span>
                <span className="max-w-prose leading-relaxed text-muted">{project.description}</span>
                <span
                  className="flex flex-wrap gap-x-3 gap-y-1 text-small text-muted"
                  role="group"
                  aria-label={`${project.title}: ${projectContent.tagsLabel}`}
                >
                  {project.tags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}
                </span>
              </span>
            </button>

            <div
              id={`project-details-${project.slug}`}
              hidden={!isOpen}
              className={`${isOpen ? "flex" : "hidden"} flex-col gap-4 md:col-start-2`}
            >
              <p className="max-w-prose leading-relaxed text-muted">
                <span className="font-medium text-ink">{projectContent.caseStudyLabels.role}: </span>
                {project.caseStudy.role}
              </p>
              <div>
                <h4 className="text-small font-medium text-ink">{projectContent.caseStudyLabels.stack}</h4>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-small text-muted">
                  {project.caseStudy.stack.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
                </ul>
              </div>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-small">
                <li>
                  <a className="text-ink underline decoration-accent underline-offset-4" href={`/${locale}/projects/${project.slug}`}>
                    {projectContent.caseStudyLabels.read}
                  </a>
                </li>
                {project.liveUrl && (
                  <li>
                    <a className="text-ink underline decoration-accent underline-offset-4" href={project.liveUrl}>
                      {projectContent.linkLabels.live}
                    </a>
                  </li>
                )}
                {project.githubUrl && (
                  <li>
                    <a className="text-ink underline decoration-accent underline-offset-4" href={project.githubUrl}>
                      {projectContent.linkLabels.github}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
