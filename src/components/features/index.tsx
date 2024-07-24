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

export default function Features() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <Fonts.h2 className="w-[750px]">Features</Fonts.h2>
      </div>
      <motion.ul
        className="flex flex-wrap gap-5 w-2/3 items-center justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <motion.li variants={item} key={index}>
            <Card className="w-[350px] gap-4 shadow-lg">
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
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
