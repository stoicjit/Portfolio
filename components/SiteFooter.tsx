import { siteContent } from "@/content/en/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-page px-6 py-8 text-small text-muted sm:px-10">
        {siteContent.footer}
      </div>
    </footer>
  );
}
