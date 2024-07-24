"use client";

import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";

// 为图标名称定义一个类型
type IconName = keyof typeof Icons;
// 辅助函数：根据图标名称返回对应的图标组件
const getIconComponent = (iconName: string): React.ComponentType | null => {
  if (iconName in Icons) {
    return Icons[iconName as IconName];
  }
  return null;
};

export default function Supplier({ lang }: { lang: any }) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <Fonts.bodySmall className="opacity-50">{lang.title}</Fonts.bodySmall>
      <div className="flex flex-row opacity-50 w-full">
        <div className="flex flex-row justify-center items-center w-full gap-20">
          {lang.suppliers.map((item: any) => {
            const IconComponent = getIconComponent(item.icon);
            return (
              <div key={item.name} className="flex flex-row justify-center items-center gap-2">
                {IconComponent && <IconComponent />}
                <p className="text-sm font-bold">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
