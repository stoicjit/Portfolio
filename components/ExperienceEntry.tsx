import type { Experience } from "@/content/en/experience";
import { experienceContent } from "@/content/en/experience";

type ExperienceEntryProps = {
  experience: Experience;
};

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <article className="flex flex-col gap-5 pt-6">
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-ink">
        <span className="font-medium">{experience.company}</span>
        <span>{experience.role}</span>
        <span className="text-small text-muted">
          {experience.startDate} – {experience.endDate}
        </span>
      </p>
      <p className="max-w-prose text-muted">{experience.description}</p>
      <ul className="flex flex-col gap-4">
        {experience.points.map((point) => (
          <li key={point.heading}>
            <h3 className="font-medium text-ink">{point.heading}</h3>
            <p className="mt-1 max-w-prose text-muted">{point.description}</p>
          </li>
        ))}
      </ul>
      <ul aria-label={`${experience.role}: ${experienceContent.technologiesLabel}`} className="flex flex-wrap gap-x-3 gap-y-1 text-small text-muted">
        {experience.techTags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  );
}
