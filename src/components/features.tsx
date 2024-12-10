"use client";

import { Fonts } from "@/components/fonts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";

interface FeatureCard {
  title: string;
  description: string;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Features: React.FC = () => {
  const t = useTranslations("features");
  const cards = t.raw("cards") as FeatureCard[];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <Fonts.h2>{t("title")}</Fonts.h2>
      </div>

      <motion.ul
        className="flex flex-wrap gap-5 w-full max-w-[1280px] items-center justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card: FeatureCard, index: number) => (
          <motion.li variants={item} key={index}>
            <Card className="w-[400px] h-[300px] gap-4 shadow-lg">
              <CardHeader className="justify-center items-center">
                <div className="flex w-14 h-14 bg-black justify-center items-center rounded-xl">
                  <Zap className="text-white w-7 h-7" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Fonts.h5>{card.title}</Fonts.h5>
                <Fonts.bodyMedium className="opacity-80">{card.description}</Fonts.bodyMedium>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Features;
