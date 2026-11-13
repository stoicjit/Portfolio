import { siteContent } from "@/content/site";
import { projectContent } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-space-4 sm:px-space-6">
      {siteContent.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="flex min-h-48 flex-col justify-center gap-space-3 border-b border-border py-space-8 sm:min-h-64"
        >
          <h1
            id={`${section.id}-title`}
            className="text-heading font-semibold tracking-tight text-foreground sm:text-heading-wide"
          >
            {section.title}
          </h1>
          {section.id === "projects" ? (
            <>
              <p className="max-w-2xl text-muted">{section.description}</p>
              <div className="grid grid-cols-1 gap-space-4 pt-space-3 md:grid-cols-2 lg:grid-cols-3">
                {projectContent.projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </>
          ) : section.id === "experience" ? (
            <>
              <p className="max-w-2xl text-muted">{section.description}</p>
              <div className="pt-space-3">
                <ExperienceTimeline />
              </div>
            </>
          ) : (
            <p className="max-w-2xl text-muted">{section.description}</p>
          )}
        </section>
      ))}
    </main>
  );
}
