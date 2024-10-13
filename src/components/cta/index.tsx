"use client";

import { Fonts } from "@/components/fonts";

type CTAProps = {
  lang: any;
};

const BACKGROUND_STYLE = {
  backgroundColor: "hsla(132, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(circle at 91% 11%, hsla(13, 100%, 88%, 0.66) 4.038772213247173%, transparent 37.2265767974114%),
    radial-gradient(circle at 66% 37%, hsla(323, 100%, 88%, 1) 0%, transparent 63.33640956108327%),
    radial-gradient(circle at 36% 87%, hsla(268, 100%, 88%, 1) 12.107536057085522%, transparent 63.33640956108327%)
  `,
  backgroundBlendMode: "normal, normal, normal",
};

export default function CTA({ lang }: CTAProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 h-[450px]" style={BACKGROUND_STYLE}>
      <div className="flex flex-col items-center gap-5">
        <Fonts.h2>{lang.title}</Fonts.h2>
        <Fonts.bodyMedium className="max-w-[420px]">{lang.description}</Fonts.bodyMedium>
      </div>
    </div>
  );
}
