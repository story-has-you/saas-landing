"use client";

import { Fonts } from "@/components/fonts";
import Icons from "@/components/icon";
import { useTranslations } from "next-intl";

interface Supplier {
  name: string;
  icon: keyof typeof Icons;
}

interface IconComponentProps {
  name: keyof typeof Icons;
  className?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ name, className }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className={className} /> : null;
};

const SupplierItem: React.FC<{ supplier: Supplier }> = ({ supplier }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <IconComponent name={supplier.icon} />
      <p className="text-sm font-bold">{supplier.name}</p>
    </div>
  );
};

const Supplier: React.FC = () => {
  const t = useTranslations("supplier");
  const suppliers = t.raw("suppliers") as Supplier[];

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <Fonts.bodySmall className="opacity-50">{t("title")}</Fonts.bodySmall>

      <div className="flex flex-row opacity-50 w-full">
        <div className="flex flex-row justify-center items-center w-full gap-20">
          {suppliers.map((supplier) => (
            <SupplierItem key={supplier.name} supplier={supplier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
