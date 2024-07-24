import { buildMetadata, buildViewport } from "@/config/site";
import "@/styles/globals.css";

export const metadata = buildMetadata();
export const viewport = buildViewport();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
