import React from "react";
import Card from "./Card";

const Problem = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-4 max-md:w-full text-center">
        <h2>
          Your work is everywhere. <br /> Your story is nowhere.
        </h2>
        <p className="max-w-4xl">
          In a world of scattered tools and platforms, your contributions get
          lost. DevHance solves the problem of fragmented narratives, helping
          you connect the dots of your creation journey.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
};

export default Problem;
