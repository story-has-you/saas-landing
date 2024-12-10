"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

const Banner: React.FC = () =>{
  const t = useTranslations("banner");
  return (
    <div className="top-0 left-0 w-full h-[46px] flex flex-row justify-center items-center bg-black p-0 gap-5">
      <div className="flex flex-row justify-center items-center overflow-visible p-0 gap-5 rounded-none">
        <div className="whitespace-pre font-bold font-satoshi text-white text-center text-sm leading-none tracking-normal font-sans">{t("notificationText")}</div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="w-full" size={"sm"}>
                {t("buttonText")}
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Banner
