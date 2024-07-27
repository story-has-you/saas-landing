"use client";

import { Fonts } from "@/components/fonts";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Features({ lang }: { lang: any }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <Fonts.h2 className="w-[750px]">{lang.title}</Fonts.h2>
      </div>
      <motion.ul
        className="flex flex-wrap gap-5 w-full max-w-[1280px] items-center justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {lang.cards.map((card: any, index: number) => (
          <motion.li variants={item} key={index}>
            <Card className="w-[350px] h-[300px] gap-4 shadow-lg">
              <CardHeader className="justify-center items-center">
                <div className="flex w-14 h-14 bg-black justify-center items-center rounded-xl">
                  <Icons.lightning className="text-white w-7 h-7" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Fonts.h5>{card.title}</Fonts.h5>
                <Fonts.bodyMedium className="opacity-80">{card.description}</Fonts.bodyMedium>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
