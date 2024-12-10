"use client";

import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const t = useTranslations("faq");
  const questions = t.raw("questions") as FAQItem[];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center justify-center w-full gap-14 py-14">
        <div className="flex flex-col gap-5 text-center">
          <Fonts.h2>{t("title")}</Fonts.h2>
          <Fonts.bodyLarge className="opacity-50">{t("subtitle")}</Fonts.bodyLarge>
        </div>

        <div className="w-full md:w-2/3">
          <Accordion type="single" collapsible>
            {questions.map((item: FAQItem, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <Fonts.h5>{item.question}</Fonts.h5>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <Fonts.bodyMedium className="text-start opacity-80">{item.answer}</Fonts.bodyMedium>
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
