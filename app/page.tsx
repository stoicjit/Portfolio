import { siteContent } from "@/content/site";

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
          <p className="max-w-2xl text-muted">{section.description}</p>
        </section>
      ))}
    </main>
  );
}
