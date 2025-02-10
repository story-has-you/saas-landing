"use client";

import { Fonts } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import "@/styles/cta.css";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CTA: React.FC = () => {
  const t = useTranslations("cta");
  return (
    <div className="cta-container">
      <div className="cta-content">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyMedium className="cta-description">{t("description")}</Fonts.bodyMedium>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Button size="lg" className="cta-button">
          {t("buttonText")}
        </Button>
      </motion.div>
    </div>
  );
};

export default CTA;
