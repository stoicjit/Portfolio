import { siteContent } from "@/content/en/site";

type SiteHeaderProps = { locale: string };

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header>
      <div className="mx-auto flex w-full max-w-page flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <a className="font-serif text-lg font-semibold text-ink" href={`/${locale}#hero`}>
          {siteContent.name}
        </a>
        <nav aria-label={siteContent.navigationLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-small">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-muted hover:text-ink"
                  href={item.href.startsWith("/") ? item.href : `/${locale}${item.href}`}
                  download={"download" in item ? item.download : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
