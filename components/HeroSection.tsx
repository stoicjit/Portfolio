import { siteContent } from "@/content/en/site";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="grid flex-1 items-center gap-x-12 gap-y-section py-section md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.75fr)]">
      <div className="flex flex-col items-start gap-5">
        <p className="text-small font-medium text-accent">{siteContent.role}</p>
        <h1 id="hero-title" className="font-serif text-display leading-tight text-ink">{siteContent.name}</h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted">{siteContent.introduction}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3">
          <a className="inline-flex min-h-12 items-center bg-ink px-6 py-3 text-paper" href="#contact">{siteContent.actions.contact}</a>
          <a className="text-ink underline decoration-accent underline-offset-4" href="#selected-work">{siteContent.actions.selectedWork}</a>
        </div>
        <p className="pt-3 text-small text-muted">{siteContent.status}</p>
      </div>
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-surface text-center text-small text-muted" role="img" aria-label={siteContent.portrait.alt}>
        {siteContent.portrait.placeholder}
      </div>
    </section>
  );
}
