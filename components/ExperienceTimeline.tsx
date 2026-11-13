import { experienceContent, type Experience } from "@/content/experience";

function toDateValue(date: string) {
  if (date === "Present") return Number.POSITIVE_INFINITY;

  const value = Date.parse(date);
  return Number.isNaN(value) ? 0 : value;
}

function sortByDate(first: Experience, second: Experience) {
  const endDateDifference = toDateValue(second.endDate) - toDateValue(first.endDate);
  if (endDateDifference !== 0) return endDateDifference;

  return toDateValue(second.startDate) - toDateValue(first.startDate);
}

export function ExperienceTimeline() {
  const entries = [...experienceContent.entries].sort(sortByDate);

  return (
    <ol className="flex flex-col gap-space-4">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.role}-${entry.startDate}`}>
          <article className="flex flex-col gap-space-4 rounded-card border border-border p-space-4 sm:p-space-5">
            <header className="flex flex-col gap-space-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-space-2">
                <h3 className="text-card-title font-semibold text-foreground">{entry.role}</h3>
                <p className="text-muted">{entry.company} · {entry.location}</p>
              </div>
              <p className="text-small text-muted">{entry.startDate} – {entry.endDate}</p>
            </header>
            <p className="text-muted">{entry.description}</p>
            <ul className="flex list-disc flex-col gap-space-2 pl-space-5 text-muted">
              {entry.accomplishments.map((accomplishment) => (
                <li key={accomplishment}>{accomplishment}</li>
              ))}
            </ul>
            <ul aria-label={`${entry.role} technologies`} className="flex flex-wrap gap-space-2">
              {entry.techTags.map((tag) => (
                <li key={tag} className="rounded-control border border-border px-space-2 py-space-2 text-small text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
