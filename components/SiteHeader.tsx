"use client";

import { useRef, useState } from "react";
import { siteContent } from "@/content/en/site";

type SiteHeaderProps = { locale: string };

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header>
      <div className="mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-4 px-6 py-6 sm:flex-nowrap sm:px-10">
        <a className="font-serif text-lg font-semibold text-ink" href={`/${locale}#hero`}>
          {siteContent.name}
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink sm:hidden"
          aria-label={isMenuOpen ? siteContent.menuLabels.close : siteContent.menuLabels.open}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
          }}
        >
          <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <nav
          id="primary-navigation"
          aria-label={siteContent.navigationLabel}
          className={`${isMenuOpen ? "block" : "hidden"} w-full sm:block sm:w-auto`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsMenuOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
        >
          <ul className="flex flex-col gap-3 pb-2 text-small sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:pb-0">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-muted hover:text-ink"
                  href={item.href.startsWith("/") ? item.href : `/${locale}${item.href}`}
                  download={"download" in item ? item.download : undefined}
                  onClick={() => setIsMenuOpen(false)}
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
