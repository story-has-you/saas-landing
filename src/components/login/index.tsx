import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import { signIn } from "next-auth/react";

export default function Login({ lang }: { lang: any }) {
  return (
    <DialogContent>
      <CardHeader>
        <CardTitle className="text-2xl">{lang.cardTitle}</CardTitle>
        <CardDescription>{lang.cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
            <Icons.google className="w-4 h-4 mr-2" />
            {lang.googleLoginButton}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => signIn("github")}>
            <Icons.gitHub className="w-4 h-4 mr-2" />
            {lang.githubLoginButton}
          </Button>
        </div>
      </CardContent>
    </DialogContent>
  );
}
