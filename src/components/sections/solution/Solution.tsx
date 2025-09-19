import React from "react";
import { AnimatedBeamDemo } from "./AnimatedBeam";
import { DisplayCard } from "./DisplayCard";
import { PenBoxIcon, PlugIcon, Users2 } from "lucide-react";

const Solution = () => {
  return (
    <section className="mt-10 flex flex-col gap-30">
      <div className="text-center">
        <h2>Unify Your Narrative. Build Trust.</h2>
        <p className="mt-4 max-w-4xl">
          From chaos to clarity, DevHance transforms your scattered efforts into
          a compelling, unified story, establishing your credibility as the
          single source of truth.
        </p>
      </div>
      <div>
        <AnimatedBeamDemo />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-8 mb-10">
          <div className="bg-cyan-300/15 p-8 rounded-2xl border border-cyan-300">
            <div className="bg-cyan-300/20 w-fit p-3 rounded-md mb-4">
              <PenBoxIcon className="text-cyan-300" />
            </div>
            <div>
              <h3 className="mb-2">Craft a narrative, not just a list</h3>
              <p>
                Our guided, block-based editor helps you structure your case
                study, from the initial problem statement to the challenges you
                overcame.
              </p>
            </div>
          </div>
          <div className="bg-violet-300/15 p-8 rounded-2xl border border-violet-300">
            <div className="bg-violet-300/20 w-fit p-3 rounded-md mb-4">
              <PlugIcon className="text-cyan-300" />
            </div>
            <div>
              <h3 className="mb-2">Connect your entire universe</h3>
              <p>
                Embed live Figma prototypes, link directly to your GitHub repo
                with commit highlights, and showcase your video demos—all in one
                place.
              </p>
            </div>
          </div>
          <div className="bg-green-300/15 p-8 rounded-2xl border border-green-300">
            <div className="bg-green-300/20 w-fit p-3 rounded-md mb-4">
              <Users2 className="text-cyan-300" />
            </div>
            <div>
              <h3 className="mb-2">Get inspired. Get noticed.</h3>
              <p>
                Share your work with a community of peers. Give and receive
                meaningful feedback, and get discovered for your skills.
              </p>
            </div>
          </div>
        </div>
        <DisplayCard />
      </div>
    </section>
  );
};

export default Solution;
