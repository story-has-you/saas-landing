import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = ["About", "Features", "Customers", "Updates", "Help"];

export default function Navigation() {
  return (
    <div className="flex flex-row justify-between items-center p-5 z-0">
      <Icons.logo className="w-5 h-5" />
      <div className="flex flex-row justify-center items-center overflow-hidden z-20 gap-5 rounded-none text-black">
        {links.map((item) => (
          <div key={item}>
            <Link href={item} target="_blank" className="opacity-60">
              {item}
            </Link>
          </div>
        ))}

        <Button className="rounded-xl">Get for free</Button>
      </div>
    </div>
  );
}
