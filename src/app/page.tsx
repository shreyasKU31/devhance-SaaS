import CTA from "@/components/sections/cta/CTA";
import Faq from "@/components/sections/faq/Faq";
import Hero from "@/components/sections/hero/Hero";
import Problem from "@/components/sections/problem/Problem";
import { AppleCardsCarouselDemo } from "@/components/sections/showcase/Showcase";
import Solution from "@/components/sections/solution/Solution";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-16 max-md:px-6 gap-20 max-w-[1440px] m-auto">
        <Hero />
        <Problem />
        <Solution />
        <AppleCardsCarouselDemo />
        <Faq />
        <CTA />
      </main>
    </>
  );
}
