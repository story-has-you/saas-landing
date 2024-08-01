"use client";

import SubmitButton from "@/components/playground/submit-button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UserAvatar from "@/components/user-avatar";
import { action } from "@/lib/action";
import { User } from "@prisma/client";
import { redirect, useParams } from "next/navigation";
import { useFormState } from "react-dom";

type PlaygroundProps = {
  lang: any;
  user: User | null;
};

export default function Playground({ lang, user }: PlaygroundProps) {
  const params = useParams();
  if (!user) {
    redirect("/");
  }
  const [state, formAction] = useFormState(action, { success: false, type: "" });

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-border/40 backdrop-blur bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{lang.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <UserAvatar user={user} lang={lang} locale={params.lang} />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto p-8">
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <form action={formAction}>
              <div className="flex space-x-4">
                <Input name="prompt" placeholder={lang.inputPlaceholder} className="flex-grow" />
                <SubmitButton lang={lang} />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-gray-500">{lang.imagePlaceholder}</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
