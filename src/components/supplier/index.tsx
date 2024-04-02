import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";

const suppliers = [
  {
    icon: <Icons.acmeCorp />,
    name: "Acme Corp",
  },
  {
    icon: <Icons.quantum />,
    name: "Quantum",
  },
  {
    icon: <Icons.echoValley />,
    name: "Echo Valley",
  },
  {
    icon: <Icons.apex />,
    name: "APEX",
  },
  {
    icon: <Icons.celestial />,
    name: "Celestial",
  },
];

export function Supplier() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <Fonts.bodySmall className="opacity-50">Trusted by the world’s most innovative teams</Fonts.bodySmall>
      <div className="flex flex-row opacity-50 w-full">
        <div className="flex flex-row justify-center items-center w-full gap-12">
          {suppliers.map((item) => (
            <div key={item.name} className="flex flex-row justify-center items-center gap-2">
              {item.icon}
              <p className="text-sm font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
