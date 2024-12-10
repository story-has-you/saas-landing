"use client";

import { GitHub, Google } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

const CALLBACK_URL = "/playground";

interface AuthProvider {
  id: "google" | "github";
  icon: React.ComponentType<{ className?: string }>;
}

const authProviders: AuthProvider[] = [
  { id: "google", icon: Google },
  { id: "github", icon: GitHub },
];

const Login: React.FC = () => {
  const t = useTranslations("login");

  const handleSignIn = async (providerId: AuthProvider["id"]) => {
    try {
      await signIn(providerId, { callbackUrl: CALLBACK_URL });
    } catch (error) {
      console.error(`Failed to sign in with ${providerId}:`, error);
      // 这里可以添加错误处理，比如显示错误提示
    }
  };

  return (
    <DialogContent>
      <CardHeader>
        <CardTitle className="text-2xl">{t("cardTitle")}</CardTitle>
        <CardDescription>{t("cardDescription")}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          {authProviders.map(({ id, icon: Icon }) => (
            <Button key={id} variant="outline" className="w-full" onClick={() => handleSignIn(id)}>
              <Icon className="w-4 h-4 mr-2" />
              {t(`${id}LoginButton`)}
            </Button>
          ))}
        </div>
      </CardContent>
    </DialogContent>
  );
};

export default Login;
