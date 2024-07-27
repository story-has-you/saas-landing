"use client";

import { Fonts } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";

type CTAProps = {
  lang: any;
  user: User | null;
};

const BACKGROUND_STYLE = {
  background: `radial-gradient(101.4% 61.3% at 12.4% 100%, #0832bd 0%, rgb(189, 204, 255) 86.293%, rgb(235, 239, 255) 100%)`,
};

export default function CTA({ lang, user }: CTAProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 p-5 h-[450px]" style={BACKGROUND_STYLE}>
      <div className="flex flex-col items-center gap-5">
        <Fonts.h2>{lang.title}</Fonts.h2>
        <Fonts.bodyMedium className="max-w-[420px]">{lang.description}</Fonts.bodyMedium>
      </div>
      {!user && (
        <div className="flex felx-row">
          <Button className="w-full rounded-xl">{lang.buttonText}</Button>
        </div>
      )}
    </div>
  );
}
