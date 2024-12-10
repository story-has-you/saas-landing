"use client";

import { store } from "@/atoms/store";
import { Provider as JotaiProvider } from "jotai";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  lang: string;
}

export default function Providers({ children, messages, lang }: Readonly<ProvidersProps>) {
  return (
    <NextIntlClientProvider locale={lang} messages={messages} timeZone="UTC">
      <JotaiProvider store={store}>{children}</JotaiProvider>
    </NextIntlClientProvider>
  );
}
