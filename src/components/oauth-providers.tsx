import Icons from "@/components/icon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import "@/styles/oauth-providers.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface Provider {
  id: string;
  translationKey: string;
  icon: keyof typeof Icons;
  bgColor?: string;
  hoverColor?: string;
}

const providers: Provider[] = [
  {
    id: "google",
    translationKey: "google",
    icon: "google",
    bgColor: "bg-white",
    hoverColor: "hover:bg-gray-50",
  },
  {
    id: "github",
    translationKey: "github",
    icon: "gitHub",
    bgColor: "bg-[#24292F]",
    hoverColor: "hover:bg-[#24292F]/90",
  },
];

interface OAuthProvidersProps {
  callbackUrl?: string;
}

const OAuthProviders = ({ callbackUrl = "/" }: OAuthProvidersProps) => {
  const t = useTranslations("auth.oauth");
  const { toast } = useToast();

  const handleOAuthSignIn = async (provider: Provider) => {
    try {
      // await signIn(provider.id, {
      //   callbackUrl,
      // });
    } catch (error) {
      console.error(`${provider.id} sign in error:`, error);
      toast({
        variant: "destructive",
        title: t("error.title"),
        description: t("error.description", {
          provider: t(`providers.${provider.translationKey}`),
        }),
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="oauth-providers-container" variants={container} initial="hidden" animate="show">
      {providers.map((provider) => {
        const Icon = Icons[provider.icon];
        const providerName = t(`providers.${provider.translationKey}`);

        return (
          <motion.div key={provider.id} variants={item} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
            <Button
              variant="outline"
              className="oauth-provider-button"
              onClick={() => handleOAuthSignIn(provider)}
              type="button"
            >
              <div className="oauth-provider-gradient">
                <div className="oauth-provider-gradient-overlay" />
              </div>

              <div className="oauth-provider-content">
                <Icon className="oauth-provider-icon" aria-hidden="true" />
                <span className="text-base font-medium">{t("continue", { provider: providerName })}</span>
              </div>

              <div className="oauth-provider-arrow">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default OAuthProviders;
