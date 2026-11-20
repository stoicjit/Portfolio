import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectContent } from "@/content/en/projects";
import { siteContent } from "@/content/en/site";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * Optional fields this page can use once you add them to your content.
 * Everything here is optional, so existing projects keep working unchanged.
 * Move these into your real content type when you're ready.
 */
type CaseStudyExtras = {
  tagline?: string;
  timeline?: string;
  outcomes?: { value: string; label: string }[];
  gallery?: { src: string; alt: string; caption?: string; width?: number; height?: number }[];
};

type Text = string | string[];

// English fallbacks so this compiles before you add the new labels to content.
// Move them into projectContent.caseStudyLabels so they can be translated.
const labels = {
  timeline: "Timeline",
  outcomes: "Outcomes",
  gallery: "Gallery",
  next: "Next project",
  previous: "Previous project",
  moreProjects: "More projects",
  opensInNewTab: "(opens in a new tab)",
  ...projectContent.caseStudyLabels,
};

function getProject(locale: string, slug: string) {
  if (locale !== "en") return undefined;
  return projectContent.projects.find((project) => project.slug === slug);
}

function getNeighbours(slug: string) {
  const { projects } = projectContent;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || projects.length < 2) return {};
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

const toParagraphs = (text: Text) => (Array.isArray(text) ? text : [text]);

export function generateStaticParams() {
  return projectContent.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  if (!project) return {};

  const title = `${project.title} | ${siteContent.name}`;
  const images = project.image.src ? [{ url: project.image.src, alt: project.image.alt }] : undefined;

  return {
    title,
    description: project.description,
    openGraph: { title, description: project.description, type: "article", images },
    twitter: { card: images ? "summary_large_image" : "summary", title, description: project.description },
  };
}

function ExternalLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const base = "inline-flex items-center px-5 py-2.5 text-small font-medium underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const style = primary ? "bg-ink text-surface no-underline" : "text-ink underline decoration-accent";
  return (
    <a className={`${base} ${style}`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {labels.opensInNewTab}</span>
    </a>
  );
}

function Narrative({ id, title, text }: { id: string; title: string; text: Text }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <h2 id={id} className="font-serif text-section-title text-ink lg:sticky lg:top-8 lg:self-start">
        {title}
      </h2>
      <div className="flex max-w-prose flex-col gap-5 leading-relaxed text-muted">
        {toParagraphs(text).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  if (!project) notFound();

  const study = project.caseStudy as typeof project.caseStudy & CaseStudyExtras;
  const { previous, next } = getNeighbours(slug);
  const hasLinks = Boolean(project.liveUrl || project.githubUrl || project.demoVideoUrl);

  return (
    <main className="mx-auto flex w-full max-w-page flex-1 flex-col px-6 py-section sm:px-10">
      <Link
        className="mb-10 w-fit text-small text-ink underline decoration-accent underline-offset-4"
        href={`/${locale}#selected-work`}
      >
        {projectContent.caseStudyLabels.backToProjects}
      </Link>

      {/* Header: opens with the pitch, then the actions */}
      <header className="flex flex-col gap-6">
        <h1 className="max-w-4xl font-serif text-display leading-tight text-ink">{project.title}</h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted">{study.tagline ?? project.description}</p>

        {hasLinks && (
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.liveUrl && (
              <li>
                <ExternalLink href={project.liveUrl} primary>
                  {projectContent.linkLabels.live}
                </ExternalLink>
              </li>
            )}
            {project.githubUrl && (
              <li>
                <ExternalLink href={project.githubUrl}>{projectContent.linkLabels.github}</ExternalLink>
              </li>
            )}
            {project.demoVideoUrl && (
              <li>
                <ExternalLink href={project.demoVideoUrl}>{projectContent.caseStudyLabels.watchDemo}</ExternalLink>
              </li>
            )}
          </ul>
        )}
      </header>

      {/* Hero media: shown in full, never cropped */}
      <figure className="mt-12">
        {project.image.src ? (
          <Image
            className="max-h-[42rem] w-full bg-surface object-contain"
            src={project.image.src}
            alt={project.image.alt}
            width={1600}
            height={1000}
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
        ) : (
          <div
            className="flex aspect-[16/10] w-full items-center justify-center bg-surface text-center text-small text-muted"
            role="img"
            aria-label={project.image.alt}
          >
            {project.image.placeholder}
          </div>
        )}
      </figure>

      {/* Meta: the quick facts, so the body can be pure story */}
      <dl className="mt-10 grid gap-x-10 gap-y-6 border-y border-muted/30 py-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
        <div>
          <dt className="text-small text-muted">{projectContent.caseStudyLabels.role}</dt>
          <dd className="mt-1 text-ink">{study.role}</dd>
        </div>
        {study.timeline && (
          <div>
            <dt className="text-small text-muted">{labels.timeline}</dt>
            <dd className="mt-1 text-ink">{study.timeline}</dd>
          </div>
        )}
        <div className="sm:col-span-2 lg:col-span-1">
          <dt className="text-small text-muted">{projectContent.caseStudyLabels.stack}</dt>
          <dd className="mt-1">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-ink">
              {study.stack.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {/* Outcomes: only renders when you provide them */}
      {study.outcomes && study.outcomes.length > 0 && (
        <section aria-labelledby="outcomes-title" className="mt-16">
          <h2 id="outcomes-title" className="font-serif text-section-title text-ink">
            {labels.outcomes}
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {study.outcomes.map((outcome, index) => (
              <li key={`${outcome.label}-${index}`} className="flex flex-col gap-2">
                <span className="font-serif text-display leading-none text-ink">{outcome.value}</span>
                <span className="max-w-xs text-muted">{outcome.label}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Story */}
      <div className="mt-20 flex flex-col gap-section">
        <Narrative id="problem-title" title={projectContent.caseStudyLabels.problem} text={study.problem} />
        <Narrative id="architecture-title" title={projectContent.caseStudyLabels.architecture} text={study.architecture} />

        {study.gallery && study.gallery.length > 0 && (
          <section aria-label={labels.gallery} className="flex flex-col gap-10">
            {study.gallery.map((shot, index) => (
              <figure key={`${shot.src}-${index}`} className="flex flex-col gap-3">
                <Image
                  className="w-full bg-surface object-contain"
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width ?? 1600}
                  height={shot.height ?? 1000}
                  sizes="(min-width: 1280px) 1200px, 100vw"
                />
                {shot.caption && <figcaption className="max-w-prose text-small text-muted">{shot.caption}</figcaption>}
              </figure>
            ))}
          </section>
        )}

        <Narrative id="challenges-title" title={projectContent.caseStudyLabels.challenges} text={study.challenges} />
        <Narrative id="learnings-title" title={projectContent.caseStudyLabels.learnings} text={study.learnings} />
      </div>

      {/* Previous / next: keeps readers moving through the portfolio */}
      {(previous || next) && (
        <nav aria-label={labels.moreProjects} className="mt-24 grid gap-8 border-t border-muted/30 pt-10 sm:grid-cols-2">
          {previous ? (
            <Link href={`/${locale}/projects/${previous.slug}`} className="group flex flex-col gap-1" rel="prev">
              <span className="text-small text-muted">{labels.previous}</span>
              <span className="font-serif text-section-title text-ink underline decoration-transparent underline-offset-4 group-hover:decoration-accent group-focus-visible:decoration-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/${locale}/projects/${next.slug}`} className="group flex flex-col gap-1 sm:items-end sm:text-right" rel="next">
              <span className="text-small text-muted">{labels.next}</span>
              <span className="font-serif text-section-title text-ink underline decoration-transparent underline-offset-4 group-hover:decoration-accent group-focus-visible:decoration-accent">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}