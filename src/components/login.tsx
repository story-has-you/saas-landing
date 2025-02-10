"use client";

import { GitHub, Google } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import "@/styles/login.css";
import { useTranslations } from "next-intl";

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
      // await signIn(providerId, { callbackUrl: CALLBACK_URL });
    } catch (error) {
      console.error(`Failed to sign in with ${providerId}:`, error);
      // 这里可以添加错误处理，比如显示错误提示
    }
  };

  return (
    <DialogContent>
      <CardHeader>
        <CardTitle className="login-title">{t("cardTitle")}</CardTitle>
        <CardDescription>{t("cardDescription")}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="login-content">
          {authProviders.map(({ id, icon: Icon }) => (
            <Button key={id} variant="outline" className="login-button" onClick={() => handleSignIn(id)}>
              <Icon className="login-provider-icon" />
              {t(`${id}LoginButton`)}
            </Button>
          ))}
        </div>
      </CardContent>
    </DialogContent>
  );
};

export default Login;
