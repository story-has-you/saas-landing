"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UserAvatar from "@/components/user-avatar";
import { User } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import { useState } from "react";

type PlaygroundProps = {
  lang: any;
  user: User | null;
};

export default function Playground({ lang, user }: PlaygroundProps) {
  const params = useParams();
  if (!user) {
    redirect("/");
  }

  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    // 这里应该是调用AI图像生成API的逻辑
    // 为了演示,我们使用一个占位图像
    setTimeout(() => {
      setGeneratedImage("https://via.placeholder.com/512x512.png?text=AI+Generated+Image");
      setIsLoading(false);
    }, 2000);
  };

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
            <div className="flex space-x-4">
              <Input placeholder={`${lang.inputPlaceholder}`} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="flex-grow" />
              <Button onClick={handleGenerate} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {lang.generateButton.loading}
                  </>
                ) : (
                  lang.generateButton.idle
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            {generatedImage ? (
              <img src={generatedImage} alt="AI Generated" className="w-full h-auto rounded-lg shadow-md" />
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">{lang.imagePlaceholder}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
