"use client";

import { Fonts } from "@/components/fonts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-center items-center p-[120px_40px] space-x-60 rounded-none w-full">
        <div className="flex flex-row justify-between items-center w-[500px]">
          <div className="flex flex-col justify-center items-start gap-8">
            <Badge variant={"outline"}>Version 2.0 is here!</Badge>
            <Fonts.h1 className="text-start">Pathway to productivity</Fonts.h1>
            <Fonts.bodyLarge className="opacity-80 text-start w-2/3">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts,
              and celebrate your successes.
            </Fonts.bodyLarge>
            <div className="flex flex-row justify-center items-center p-0 gap-2.5 rounded-none">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
              >
                <Button className="rounded-xl">Get started</Button>
              </motion.div>
              <p>Learn more</p>
            </div>
          </div>
        </div>

        <motion.div
          className="w-full h-[598px] max-w-[600px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={"/images/shape-holo-1.png"} height={697} width={697} alt="shape-holo-1" />
        </motion.div>

        <motion.div
          className="absolute top-32 left-96 z-10"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={"/images/shape-holo-2.png"} height={236} width={236} alt="shape-holo-2" />
        </motion.div>

        <motion.div
          className="absolute top-[800px] right-16 rotate-45 z-10"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={"/images/shape-holo-3.png"} height={243} width={243} alt="shape-holo-2" />
        </motion.div>
      </div>
    </div>
  );
}
