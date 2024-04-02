import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <div className="top-0 left-0 w-full h-[46px] flex flex-row justify-center items-center bg-black p-0 gap-5">
      <div className="flex flex-row justify-center items-center overflow-visible p-0 gap-5 rounded-none">
        <div className="whitespace-pre font-bold font-satoshi text-white text-center text-sm leading-none tracking-normal font-sans">
          SaaS Conf 2024・Dive into the Future of SaaS
        </div>
        <div>
          <Button variant={"outline"} className="w-full" size={"sm"}>
            Register now
          </Button>
        </div>
      </div>
    </div>
  );
}
