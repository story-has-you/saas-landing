import TailwindIndicator from "@/components/tailwind-indicator";
import { Locale } from "@/config/locale";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

export default async function PageLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1">
            <div className="mx-auto flex flex-col w-full gap-20">{children}</div>
            <TailwindIndicator />
          </main>
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GAID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID} />}
    </html>
  );
}
