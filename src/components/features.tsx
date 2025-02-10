"use client";

import { Fonts } from "@/components/fonts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import "@/styles/features.css";
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
    <div className="features-container">
      <div className="features-header">
        <Fonts.h2>{t("title")}</Fonts.h2>
      </div>

      <motion.ul
        className="features-list"
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((card: FeatureCard, index: number) => (
          <motion.li variants={item} key={index}>
            <Card className="feature-card">
              <CardHeader className="justify-center items-center">
                <div className="feature-icon-wrapper">
                  <Zap className="feature-icon" />
                </div>
              </CardHeader>
              <CardContent className="feature-content">
                <Fonts.h5>{card.title}</Fonts.h5>
                <Fonts.bodyMedium className="feature-description">{card.description}</Fonts.bodyMedium>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Features;
