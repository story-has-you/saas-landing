import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pricing({ lang }: { lang: any }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-5">
        <Fonts.h2>{lang.title}</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">{lang.subtitle}</Fonts.bodyLarge>
      </div>
      <div className="flex flex-row items-end justify-center gap-6 w-full max-w-[1280px]">
          {lang.plans.map((plan: any, index: number) => (
            <div key={plan.name} className={`flex flex-col justify-end items-start p-6 border rounded-lg shadow-lg gap-8 w-80 ${index === 1 ? "bg-black text-white" : ""}`}>
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
              <Button className={`w-full ${index === 1 ? "bg-white text-black" : ""}`} variant={index === 1 ? "outline" : "default"}>
                {plan.buttonText}
              </Button>
              <ul className="mt-5 space-y-5 text-start">
                {plan.features.map((feature: any) => (
                  <li key={feature} className="flex flex-row justify-start items-center">
                    <Icons.check className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
