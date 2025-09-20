"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Card from "./Card";

const Problem = () => {
  const ref = useRef(null);
  // The only change is here: added 'amount: 0.5'
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section ref={ref} className="relative overflow-hidden py-16">
      <div className="flex flex-col gap-6 max-md:w-full text-center">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Your work is everywhere. <br /> Your story is
          <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-500 to-green-400">
            no where.
          </span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          In a world of scattered tools and platforms, your contributions get
          lost. DevHance solves the problem of fragmented narratives, helping
          you connect the dots of your creation journey.
        </motion.p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card />
      </motion.div>
    </section>
  );
};

export default Problem;
