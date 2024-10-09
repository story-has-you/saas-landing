"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero({ lang }: { lang: any }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-center items-center p-[120px_40px] space-x-60 rounded-none w-full">
        <div className="flex flex-row justify-between items-center w-[500px]">
          <div className="flex flex-col justify-center items-start gap-8">
            <Badge variant={"outline"}>{lang.badgeText}</Badge>
            <Fonts.h1 className="text-start">{lang.title}</Fonts.h1>
            <Fonts.bodyLarge className="opacity-80 text-start w-2/3">{lang.description}</Fonts.bodyLarge>
            <div className="flex flex-row justify-center items-center p-0 gap-2.5 rounded-none">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
              >
                <Button className="rounded-xl">{lang.primaryButtonText}</Button>
              </motion.div>
              <p>{lang.secondaryButtonText}</p>
            </div>
          </div>
        </div>

        <motion.div className="w-full h-[598px] max-w-[600px]" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/mS28QhWcSped7JSQ7vltnisa5c8.png?scale-down-to=1024" height={697} width={697} alt="shape-holo-1" />
        </motion.div>

        <motion.div className="absolute top-32 left-96 z-10" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/CoAe1eW9S1x6kWgYfFZw038Bw.png?scale-down-to=512" height={236} width={236} alt="shape-holo-2" />
        </motion.div>

        <motion.div className="absolute top-[800px] right-16 rotate-45 z-10" animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <img src="https://framerusercontent.com/images/MJeIlKDeZABMXLwJpB6Bztr0ofE.png?scale-down-to=512" height={243} width={243} alt="shape-holo-2" />
        </motion.div>
      </div>
    </div>
  );
}
