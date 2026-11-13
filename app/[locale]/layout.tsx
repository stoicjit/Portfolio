import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/en/site";
import "../globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return (
    <html lang={locale} className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <a className="skip-link" href={`/${locale}#main-content`}>
          {siteContent.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
