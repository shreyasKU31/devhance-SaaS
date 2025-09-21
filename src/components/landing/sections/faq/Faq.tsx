import React from "react";
import FaqItem from "./Question";

const questions = [
  {
    qns: "How is DevHance different from my GitHub profile or a personal website?",
    ans: `Your GitHub profile is a great place to store your code, but it doesn't tell the full story. It shows what you built, but not the why or the how.\n\n DevHance is different because it's a guided storytelling platform. Our editor helps you create a detailed case study for each project, explaining the real-world problem you solved, the technical challenges you overcame, and the impact of your work. It transforms your code into a compelling career story.`,
  },
  {
    qns: "Who is DevHance for?",
    ans: `DevHance is designed for anyone who builds and creates with technology. Our primary users are:\n\n Individual Makers: Developers, designers, data scientists, and product managers who want to prove their skills, advance their careers, and get hired for the right reasons.\n\n SaaS Builders & Founders: Early-stage startup founders and indie hackers who need to build credibility, showcase their execution velocity, and attract talent, customers, and investors.`,
  },
  {
    qns: "Do I need to be a great writer to use DevHance?",
    ans: `Not at all. In fact, DevHance is designed for people who are great at building, not necessarily writing. Our Storytelling Editor provides a clear structure and prompts you with questions to guide your thoughts. It makes it easy to articulate the important details of your work without having to stare at a blank page.`,
  },
  {
    qns: "How long does it take to create a good project story?",
    ans: `For your most important project, you should plan to spend about 30-60 minutes to create a truly detailed and compelling story. While it takes a little time, the result is a powerful asset you can use for years to showcase your skills. It's an investment that pays off.`,
  },
  {
    qns: "Can I document private or proprietary company work?",
    ans: `Yes, absolutely. This is a very common use case. You are in complete control of what you share. You can write a detailed story about the problem, your process, and the technical solutions you implemented without showing any proprietary code. The goal is to showcase your thinking and skills, not to leak secrets.`,
  },
  {
    qns: "I'm a founder, not looking for a job. How can DevHance help my startup?",
    ans: `DevHance is your "Build in Public" headquarters. You can create a Project Hub for your startup to:\n\nBuild Trust: Showcase your team's execution and progress through "Update Stories."\n\nAttract Talent: Link to your team's impressive individual profiles.\n\nSecure Investment: Use our private "Investor View" to provide technical due diligence and prove your team can deliver.`,
  },
];

const Faq = () => {
  return (
    <section id="faq">
      <div className="text-center">
        <h2>Have Questions? We've Got Answers.</h2>
        <p className="max-w-4xl mt-4">
          Here are some of the most common questions to help you get started
          with DevHance.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-16">
        {questions.map((qna, idx) => (
          <FaqItem key={idx} question={qna.qns} answer={qna.ans} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
