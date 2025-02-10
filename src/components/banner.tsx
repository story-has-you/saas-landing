"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import "@/styles/banner.css";
import { useTranslations } from "next-intl";

const Banner: React.FC = () =>{
  const t = useTranslations("banner");
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">{t("notificationText")}</div>
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
