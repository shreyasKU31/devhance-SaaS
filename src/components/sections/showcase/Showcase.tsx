"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 text-center">
      <h2 className=" pl-4 m-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
        A Portfolio You'll Be Proud to Share.
      </h2>
      <p className="max-w-4xl m-auto mt-4">
        Discover the innovative projects and influential creators shaping
        tomorrow. Each endeavor reflects a commitment to excellence and a vision
        for future impact.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Design",
    title: "UX Case Study for a Mobile App.",
    src: "/appleCard/UX.svg",
    content: <DummyContent />,
  },
  {
    category: "Marketing",
    title: "A/B Testing for Landing Page Conversion.",
    src: "/appleCard/AB.svg",
    content: <DummyContent />,
  },
  {
    category: "Data Science",
    title: "Analyzing Big Data from E-commerce.",
    src: "/appleCard/ecommerce.svg",
    content: <DummyContent />,
  },
  {
    category: "Web Development",
    title: "Serverless Functions for a New Microservice.",
    src: "/appleCard/serverless.svg",
    content: <DummyContent />,
  },
  {
    category: "Web3",
    title: "Exploring a Decentralized Application.",
    src: "/appleCard/web3.svg",
    content: <DummyContent />,
  },
  {
    category: "Gaming",
    title: "Procedural World Generation in Unity",
    src: "/appleCard/Unity.svg",
    content: <DummyContent />,
  },
];
