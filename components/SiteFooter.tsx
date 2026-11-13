import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-space-4 py-space-5 text-sm text-muted sm:px-space-6">
        {siteContent.footer}
      </div>
    </footer>
  );
}
