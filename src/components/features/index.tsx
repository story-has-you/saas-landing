import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Features() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <Badge variant={"outline"}>Progress tracking</Badge>
        <Fonts.long className="w-[750px]">
          Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and
          celebrate your successes, one task at a time.
        </Fonts.long>
      </div>
      <div className="flex flex-row gap-5">
        {[1, 2, 3].map((item) => (
          <Card className="w-[350px] gap-4" key={item}>
            <CardHeader className="justify-center items-center">
              <div className="flex w-14 h-14 bg-black justify-center items-center rounded-xl">
                <Icons.lightning className="text-white w-7 h-7" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Fonts.h5>Integration ecosystem</Fonts.h5>
              <Fonts.bodyMedium className="opacity-80">
                Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one
                place.
              </Fonts.bodyMedium>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
