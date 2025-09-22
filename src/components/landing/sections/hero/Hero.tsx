"use client";
import Buttons from "@/components/landing/ui/Button";
import ScrollDown from "@/components/landing/sections/hero/scrollIcon/ScrollDown";
import React from "react";
import { LayoutTextFlip } from "@/components/landing/ui/layout-text-flip";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-40 h-[100vh] text-center px-10 flex flex-col gap-16 items-center max-md:pt-20">
      <div className="flex flex-col gap-8 items-center">
        <motion.h1
          className="pt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Your Product has a
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
            className="inline-block text-brand"
          >
            Story.
          </motion.span>
          <br />
          <motion.div
            className="relative mx-4 my-4 border-none flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          >
            <LayoutTextFlip
              text=""
              words={["Tell It", "Prove It", "Ship It.", "Validate It."]}
            />
          </motion.div>
        </motion.h1>
        <motion.p
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        >
          DevHance is the single source of truth for your build. We empower
          founders to connect their code, designs, and decisions into one
          compelling story that builds undeniable trust.
        </motion.p>
      </div>
      <motion.div
        className="flex justify-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
      >
        <Buttons
          text="Start Your Build Log"
          style="brand px-12 rounded-full flex items-center py-4 text-md font-bold max-md:px-4 max-md:text-xs max-md:py-2"
          href="/sign-in"
        />
        <Buttons
          text="View a Demo Project"
          style="relative m-auto bg-gray-900 text-white rounded-full px-8 py-4 font-semibold max-md:px-4 max-md:text-xs border-2"
          href="/sign-in"
        />
      </motion.div>
      <motion.span
        className="text-xs text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7, ease: "easeOut" }}
      >
        Trusted by the next generation of builders from Stanford, MIT, and Y
        Combinator
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.7, ease: "easeOut" }}
      >
        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Hero;
