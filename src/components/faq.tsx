"use client";

import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "@/styles/faq.css";
import { useTranslations } from "next-intl";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const t = useTranslations("faq");
  const questions = t.raw("questions") as FAQItem[];

  return (
    <div className="faq-container">
      <div className="faq-inner">
        <div className="faq-header">
          <Fonts.h2>{t("title")}</Fonts.h2>
          <Fonts.bodyLarge className="faq-subtitle">{t("subtitle")}</Fonts.bodyLarge>
        </div>

        <div className="faq-content">
          <Accordion type="single" collapsible>
            {questions.map((item: FAQItem, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <Fonts.h5>{item.question}</Fonts.h5>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <Fonts.bodyMedium className="faq-answer">{item.answer}</Fonts.bodyMedium>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
