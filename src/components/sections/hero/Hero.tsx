import Buttons from "@/components/ui/Button";
import ScrollDown from "@/components/sections/hero/scrollIcon/ScrollDown";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-30 max-w-5xl h-[100vh] text-center px-10 flex flex-col gap-15">
      <h1 className="pt-8">
        Your Product Has a <span>Story.</span> <br /> <span>Tell It.</span>
      </h1>
      <p>
        DevHance is the single source of truth for your build. We empower
        founders to connect their code, designs, and decisions into one
        compelling story that builds undeniable trust.
      </p>
      <div className="flex justify-center gap-8">
        <Buttons
          text="Start Your Build Log"
          style="brand px-8 rounded-full flex items-center"
        />
        <div className="relative w-60 inline-block py-1 rounded-full brand">
          <Buttons
            text="View a Demo Project"
            style="relative m-auto w-58 bg-gray-900 text-white rounded-full px-8 py-4 font-semibold "
          />
        </div>
      </div>
      <span className="text-[12px] text-gray-500">
        Trusted by the next generation of builders from Stanford, MIT, and Y
        Combinator
      </span>
      <div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
