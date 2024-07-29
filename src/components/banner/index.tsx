"use client";

import Login from "@/components/login";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function Banner({ lang }: { lang: any }) {
  return (
    <div className="top-0 left-0 w-full h-[46px] flex flex-row justify-center items-center bg-black p-0 gap-5">
      <div className="flex flex-row justify-center items-center overflow-visible p-0 gap-5 rounded-none">
        <div className="whitespace-pre font-bold font-satoshi text-white text-center text-sm leading-none tracking-normal font-sans">{lang.notificationText}</div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="w-full" size={"sm"}>
                {lang.buttonText}
              </Button>
            </DialogTrigger>
            <Login lang={lang.login} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}
