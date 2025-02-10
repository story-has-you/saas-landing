"use client";

import { Fonts } from "@/components/fonts";
import Icons from "@/components/icon";
import "@/styles/supplier.css";
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
    <div className="supplier-item">
      <IconComponent name={supplier.icon} />
      <p className="supplier-item-text">{supplier.name}</p>
    </div>
  );
};

const Supplier: React.FC = () => {
  const t = useTranslations("supplier");
  const suppliers = t.raw("suppliers") as Supplier[];

  return (
    <div className="supplier-container">
      <Fonts.bodySmall className="supplier-title">{t("title")}</Fonts.bodySmall>

      <div className="supplier-list-wrapper">
        <div className="supplier-list">
          {suppliers.map((supplier) => (
            <SupplierItem key={supplier.name} supplier={supplier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplier;
