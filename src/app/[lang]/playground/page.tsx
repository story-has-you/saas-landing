import Playground from "@/components/playground/page";
import { dictionary, Locale } from "@/config/locale";
import { getServerUser } from "@/lib/user";
import { redirect } from "next/navigation";

const BACKGROUND_STYLE = {
  backgroundColor: "hsla(132, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(circle at 91% 11%, hsla(13, 100%, 88%, 0.66) 4.038772213247173%, transparent 37.2265767974114%),
    radial-gradient(circle at 66% 37%, hsla(323, 100%, 88%, 1) 0%, transparent 63.33640956108327%),
    radial-gradient(circle at 36% 87%, hsla(268, 100%, 88%, 1) 12.107536057085522%, transparent 63.33640956108327%)
  `,
  backgroundBlendMode: "normal, normal, normal",
};

export default async function PlaygroundPage({ params: { lang } }: { params: { lang: Locale } }) {
  const [user, playgroundLang] = await Promise.all([getServerUser(), dictionary(lang, "playground")]);
  if (!user) {
    redirect("/en");
  }
  return (
    <div className="min-h-screen w-full flex flex-col" style={BACKGROUND_STYLE}>
      <Playground user={user} lang={playgroundLang} />
    </div>
  );
}
