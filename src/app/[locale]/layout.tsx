import Providers from "@/components/providers";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getMessages } from "next-intl/server";

interface PageLayoutProps {
  children: React.ReactNode;
  params: any
}

export default async function PageLayout({ children, params }: Readonly<PageLayoutProps>) {
  const messages = await getMessages();
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", fontSans.className)}>
        <main>
          <Providers lang={locale} messages={messages}>
            {children}
          </Providers>
        </main>
      </body>
      {process.env.NEXT_PUBLIC_GAID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID} />}
    </html>
  );
}
