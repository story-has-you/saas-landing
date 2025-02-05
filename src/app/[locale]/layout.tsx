import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


interface PageLayoutProps {
  children: React.ReactNode;
  params: any
}

export default async function PageLayout({ children, params }: Readonly<PageLayoutProps>) {
  const messages = await getMessages();
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", geistSans.variable, geistMono.variable)}>
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
