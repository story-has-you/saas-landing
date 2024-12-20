"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ANIMATION_SETTINGS = {
  float: {
    y: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 2, repeat: Infinity },
    },
    x: {
      animate: { x: [0, 10, 0] },
      transition: { duration: 2, repeat: Infinity },
    },
    xReverse: {
      animate: { x: [0, -10, 0] },
      transition: { duration: 2, repeat: Infinity },
    },
  },
  hover: {
    whileHover: {
      scale: 1.1,
      transition: { duration: 1 },
    },
  },
} as const;

const Hero: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-start p-32 items-center space-x-60 rounded-none w-full">
        <div className="flex flex-row justify-between items-center w-[500px]">
          <div className="flex flex-col justify-center items-start gap-8">
            <Badge variant="outline">{t("badgeText")}</Badge>
            <Fonts.h1 className="text-start">{t("title")}</Fonts.h1>
            <Fonts.bodyLarge className="opacity-80 text-start w-2/3">{t("description")}</Fonts.bodyLarge>

            <div className="flex flex-row justify-center items-center p-0 gap-2.5 rounded-none">
              <motion.div {...ANIMATION_SETTINGS.hover}>
                <Button className="rounded-xl">{t("primaryButtonText")}</Button>
              </motion.div>
              <p>{t("secondaryButtonText")}</p>
            </div>
          </div>
        </div>

        <motion.div className="absolute left-1/3 max-w-[600px]" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png?scale-down-to=1024" height={697} width={697} alt="shape-holo-1" />
        </motion.div>

        <motion.div className="absolute top-32 left-64 z-10" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/CoAe1eW9S1x6kWgYfFZw038Bw.png?scale-down-to=512" height={236} width={236} alt="shape-holo-2" />
        </motion.div>

        <motion.div className="absolute top-[800px] right-16 rotate-45 z-10" animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/MJeIlKDeZABMXLwJpB6Bztr0ofE.png?scale-down-to=512" height={243} width={243} alt="shape-holo-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
