import type { PathEntry } from "@/content/en/path";

type PathTimelineProps = { entries: PathEntry[] };

export function PathTimeline({ entries }: PathTimelineProps) {
  const newestFirst = [...entries].sort((first, second) => Number(second.year) - Number(first.year));

  return (
    <ol className="flex flex-col gap-8 pt-6">
      {newestFirst.map((entry) => (
        <li key={`${entry.year}-${entry.title}`} className="grid gap-2 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
          <p className="text-small font-medium text-accent">{entry.year}</p>
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-ink">{entry.title}</h3>
            <p className="text-muted">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
