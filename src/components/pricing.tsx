"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/styles/pricing.css";
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
  const cardStyles = cn("pricing-card", isHighlighted && "pricing-card--highlighted");
  const buttonStyles = cn("pricing-card__button", isHighlighted && "pricing-card__button--highlighted");

  return (
    <div className={cardStyles}>
      <div className="pricing-card__header">
        <h2 className="pricing-card__title">{plan.name}</h2>
        {plan.badge && (
          <Badge variant="secondary" className="text-black">
            {plan.badge}
          </Badge>
        )}
      </div>

      <p className="pricing-card__price">
        ${plan.price}
        <span className="pricing-card__period">{plan.period}</span>
      </p>

      <Button className={buttonStyles} variant={isHighlighted ? "outline" : "default"}>
        {plan.buttonText}
      </Button>

      <ul className="pricing-card__features">
        {plan.features.map((feature) => (
          <li key={feature} className="pricing-card__feature">
            <Check className="pricing-card__feature-icon" />
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
    <div className="pricing-container">
      <div className="pricing-header">
        <Fonts.h2>{t("title")}</Fonts.h2>
        <Fonts.bodyLarge className="pricing-subtitle">{t("subtitle")}</Fonts.bodyLarge>
      </div>

      <div className="pricing-cards-container">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} isHighlighted={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
