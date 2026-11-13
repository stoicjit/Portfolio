import { HeroSection } from "@/components/HeroSection";
import { ExperienceEntry } from "@/components/ExperienceEntry";
import { ProjectList } from "@/components/ProjectList";
import { experienceContent } from "@/content/en/experience";
import { projectContent } from "@/content/en/projects";
import { siteContent } from "@/content/en/site";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-page flex-1 flex-col px-6 sm:px-10">
      <HeroSection />
      {siteContent.sections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="py-section">
          <h2 id={`${section.id}-title`} className="font-serif text-section-title text-ink">
            {section.title}
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">{section.description}</p>
          {section.id === "selected-work" && <ProjectList projects={projectContent.projects} />}
          {section.id === "experience" && experienceContent.entries.map((experience) => (
            <ExperienceEntry key={`${experience.company}-${experience.role}`} experience={experience} />
          ))}
        </section>
      ))}
    </main>
  );
}
