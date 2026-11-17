"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/content/en/projects";
import { projectContent } from "@/content/en/projects";

type ProjectListProps = { projects: Project[] };

export function ProjectList({ projects }: ProjectListProps) {
  const [openProjectSlug, setOpenProjectSlug] = useState<string | null>(null);

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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
              {project.githubUrl && (
                <a className="inline-flex min-h-11 items-center bg-ink px-4 py-2 text-small text-paper" href={project.githubUrl}>
                  {projectContent.linkLabels.github}
                </a>
              )}
              {project.liveUrl && (
                <a className="text-small text-ink underline decoration-accent underline-offset-4" href={project.liveUrl}>
                  {projectContent.linkLabels.live}
                </a>
              )}
              <button
                type="button"
                className="min-h-11 text-small text-ink underline decoration-accent underline-offset-4"
                aria-expanded={openProjectSlug === project.slug}
                aria-controls={`case-study-${project.slug}`}
                onClick={() => setOpenProjectSlug((openSlug) => openSlug === project.slug ? null : project.slug)}
              >
                {openProjectSlug === project.slug ? projectContent.caseStudyLabels.close : projectContent.caseStudyLabels.read}
              </button>
            </div>
            <div
              id={`case-study-${project.slug}`}
              hidden={openProjectSlug !== project.slug}
              className={`${openProjectSlug === project.slug ? "flex" : "hidden"} w-full flex-col gap-4 pt-2`}
            >
                <p className="max-w-prose leading-relaxed text-muted">
                  <span className="font-medium text-ink">{projectContent.caseStudyLabels.problem}: </span>
                  {project.caseStudy.problem}
                </p>
                <p className="max-w-prose leading-relaxed text-muted">
                  <span className="font-medium text-ink">{projectContent.caseStudyLabels.role}: </span>
                  {project.caseStudy.role}
                </p>
                <div>
                  <h4 className="text-small font-medium text-ink">{projectContent.caseStudyLabels.stack}</h4>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 text-small text-muted">
                    {project.caseStudy.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <p className="max-w-prose leading-relaxed text-muted">
                  <span className="font-medium text-ink">{projectContent.caseStudyLabels.architecture}: </span>
                  {project.caseStudy.architecture}
                </p>
                <p className="max-w-prose leading-relaxed text-muted">
                  <span className="font-medium text-ink">{projectContent.caseStudyLabels.challenges}: </span>
                  {project.caseStudy.challenges}
                </p>
                <p className="max-w-prose leading-relaxed text-muted">
                  <span className="font-medium text-ink">{projectContent.caseStudyLabels.learnings}: </span>
                  {project.caseStudy.learnings}
                </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
