import CTA from "@/components/landing/sections/cta/CTA";
import Faq from "@/components/landing/sections/faq/Faq";
import Hero from "@/components/landing/sections/hero/Hero";
import Problem from "@/components/landing/sections/problem/Problem";
import { Showcase } from "@/components/landing/sections/showcase/Showcase";
import Solution from "@/components/landing/sections/solution/Solution";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-16 max-md:px-6 gap-20 max-w-[1440px] m-auto overflow-x-hidden">
        <Hero />
        <Problem />
        <Solution />
        <Showcase />
        <Faq />
        <CTA />
      </main>
    </>
  );
}
