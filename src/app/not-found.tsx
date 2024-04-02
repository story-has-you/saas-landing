import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-violet-200">
      <div className="flex flex-col gap-5 h-screen items-center justify-center">
        <Badge>404</Badge>
        <Fonts.h2>Page not found</Fonts.h2>
        <Fonts.bodyLarge>Sorry, we couldn’t find the page you’re looking for.</Fonts.bodyLarge>
        <Link href={"/"}>
          <Button className="rounded-lg">Go back home</Button>
        </Link>
      </div>
    </div>
  );
}
