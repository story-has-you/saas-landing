"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface PricingPlan {
  name: string;
  badge?: string;
  price: number;
  period: string;
  buttonText: string;
  features: string[];
}

const PricingCard: React.FC<{
  plan: PricingPlan;
  isHighlighted: boolean;
}> = ({ plan, isHighlighted }) => {
  const cardStyles = cn("flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-[400px]", isHighlighted && "bg-black text-white");

  const buttonStyles = cn("w-full", isHighlighted && "bg-white text-black");

  return (
    <div className={cardStyles}>
      <div className="flex flex-row w-full justify-between items-center">
        <h2 className="text-lg font-semibold opacity-50">{plan.name}</h2>
        {plan.badge && (
          <Badge variant="secondary" className="text-black">
            {plan.badge}
          </Badge>
        )}
      </div>

      <p className="text-5xl font-bold">
        ${plan.price}
        <span className="text-sm opacity-50">{plan.period}</span>
      </p>

      <Button className={buttonStyles} variant={isHighlighted ? "outline" : "default"}>
        {plan.buttonText}
      </Button>

      <ul className="mt-5 space-y-5 text-start">
        {plan.features.map((feature) => (
          <li key={feature} className="flex flex-row justify-start items-center">
            <Check className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing: React.FC = () => {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as PricingPlan[];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-5">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">{t("subtitle")}</Fonts.bodyLarge>
      </div>

      <div className="w-full flex flex-row items-end justify-center gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} isHighlighted={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
