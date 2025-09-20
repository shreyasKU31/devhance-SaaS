import type { FC } from "react";
import styles from "./style.module.css";
import Buttons from "@/components/landing/ui/Button";

const CTA: FC = () => {
  return (
    <section className="relative py-20 max-xl:w-[100vw]  max-xl:rounded-none w-full h-[500px] rounded-4xl text-center overflow-hidden flex flex-col items-center justify-center px-8">
      <div className={`brand ${styles.animatedBrandBg}`}></div>

      {/* Foreground Content */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Ready to Build Credibility?
        </h2>
        <span className="max-w-4xl text-white">
          Join DevHance today and transform your work into a powerful story that
          inspires trust and showcases your momentum.
        </span>
      </div>
      <Buttons
        text="Become the Source of Truth"
        style="bg-black px-16 py-4 rounded-full mt-10"
      />
    </section>
  );
};

export default CTA;
