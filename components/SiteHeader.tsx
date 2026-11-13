import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-space-4 px-space-4 py-space-4 sm:flex-row sm:items-center sm:justify-between sm:px-space-6">
        <a className="font-semibold text-foreground" href="#hero">
          {siteContent.name}
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-space-5 gap-y-space-2">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a className="text-muted hover:text-foreground" href={item.href}>
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
