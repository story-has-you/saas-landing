"use client";

import { Fonts } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const BACKGROUND_STYLE = {
  backgroundColor: "hsla(132, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(circle at 91% 11%, hsla(13, 100%, 88%, 0.66) 4.038772213247173%, transparent 37.2265767974114%),
    radial-gradient(circle at 66% 37%, hsla(323, 100%, 88%, 1) 0%, transparent 63.33640956108327%),
    radial-gradient(circle at 36% 87%, hsla(268, 100%, 88%, 1) 12.107536057085522%, transparent 63.33640956108327%)
  `,
  backgroundBlendMode: "normal, normal, normal",
};

const CTA: React.FC = () => {
  const t = useTranslations("cta");
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 h-[450px]" style={BACKGROUND_STYLE}>
      <div className="flex flex-col items-center gap-5">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyMedium className="max-w-[420px]">{t("description")}</Fonts.bodyMedium>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Button size="lg" className="px-8 rounded-full hover:scale-105 transition-transform">
          {t("buttonText")}
        </Button>
      </motion.div>
    </div>
  );
};

export default CTA;
