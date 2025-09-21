"use client"; // Required for Framer Motion hooks

import React, { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

// Assuming these are your existing component imports
import { AnimatedBeamDemo } from "./AnimatedBeam";
import { DisplayCard } from "./DisplayCard";
import { PenBoxIcon, PlugIcon, Users2 } from "lucide-react";

// A reusable wrapper component for the continuous scroll-reveal animation
const ScrollFadeIn = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  // This hook triggers the animation when the element is 30% in view
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 }, // Start invisible and slightly down
        visible: { opacity: 1, y: 0 }, // Fade in and slide to original position
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Your original component, now with animation wrappers
const Solution = () => {
  return (
    <section id="solution" className="mt-10 flex flex-col gap-30">
      <ScrollFadeIn>
        <div className="text-center">
          <h2>
            Unify Your <span className="textGrad ml-2">Narrative.</span> Build
            <span className="textGrad ml-2">Trust.</span>
          </h2>
          <p className="m-auto mt-4 max-w-4xl">
            From chaos to clarity, DevHance transforms your scattered efforts
            into a compelling, unified story, establishing your credibility as
            the single source of truth.
          </p>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div>
          <AnimatedBeamDemo />
        </div>
      </ScrollFadeIn>

      <div className="md:flex md:gap-8">
        <div className="grid grid-cols-1 gap-8 max-md:grid-cols-1 mb-10 w-100 max-md:w-full">
          <ScrollFadeIn>
            <div className="bg-cyan-300/15 p-8 rounded-2xl border border-cyan-300 h-full">
              <div className="bg-cyan-300/20 w-fit p-3 rounded-md mb-4">
                <PenBoxIcon className="text-cyan-300" />
              </div>
              <div>
                <h3 className="mb-2">Craft a narrative, not just a list</h3>
                <p>
                  Our guided, block-based editor helps you structure your case
                  study, from the initial problem statement to the challenges
                  you overcame.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="bg-violet-300/15 p-8 rounded-2xl border border-violet-300 h-full">
              <div className="bg-violet-300/20 w-fit p-3 rounded-md mb-4">
                <PlugIcon className="text-violet-300" />
              </div>
              <div>
                <h3 className="mb-2">Connect your entire universe</h3>
                <p>
                  Embed live Figma prototypes, link directly to your GitHub repo
                  with commit highlights, and showcase your video demos—all in
                  one place.
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="bg-green-300/15 p-8 rounded-2xl border border-green-300 h-full">
              <div className="bg-green-300/20 w-fit p-3 rounded-md mb-4">
                <Users2 className="text-green-300" />
              </div>
              <div>
                <h3 className="mb-2">Get inspired. Get noticed.</h3>
                <p>
                  Share your work with a community of peers. Give and receive
                  meaningful feedback, and get discovered for your skills.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
          <DisplayCard />
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Solution;
