"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/styles/hero.css";
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
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text-section">
          <div className="hero-text-content">
            <Badge variant="outline">{t("badgeText")}</Badge>
            <Fonts.h1>{t("title")}</Fonts.h1>
            <Fonts.bodyLarge className="hero-description">{t("description")}</Fonts.bodyLarge>

            <div className="hero-buttons">
              <motion.div {...ANIMATION_SETTINGS.hover}>
                <Button className="hero-primary-button">{t("primaryButtonText")}</Button>
              </motion.div>
              <p>{t("secondaryButtonText")}</p>
            </div>
          </div>
        </div>

        <motion.div 
          className="hero-image-main"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img 
            src="https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png?scale-down-to=1024" 
            height={697} 
            width={697} 
            alt="shape-holo-1" 
          />
        </motion.div>

        <motion.div 
          className="hero-image-top"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img 
            src="https://framerusercontent.com/images/CoAe1eW9S1x6kWgYfFZw038Bw.png?scale-down-to=512" 
            height={236} 
            width={236} 
            alt="shape-holo-2" 
          />
        </motion.div>

        <motion.div 
          className="hero-image-bottom"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img 
            src="https://framerusercontent.com/images/MJeIlKDeZABMXLwJpB6Bztr0ofE.png?scale-down-to=512" 
            height={243} 
            width={243} 
            alt="shape-holo-2" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
