"use client";

import React, { ReactNode, useRef } from "react";
import { Carousel, Card } from "@/components/landing/ui/apple-cards-carousel";
import { useInView, motion, Variants } from "framer-motion";

export function Showcase() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const ref = useRef(null);

  // The animation triggers every time this element enters the viewport
  // because the `once` option is not set to `true`.
  const isInView = useInView(ref);

  // A single variant for a blur-in, slide-up effect
  const sectionVariants = {
    hidden: { opacity: 0, y: 70, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <div ref={ref} className="w-full h-full py-20 text-center overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pl-4 m-auto text-xl md:text-5xl font-bold"
      >
        A Portfolio You'll Be Proud to Share.
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl m-auto mt-4 text-neutral-600"
      >
        Discover the innovative projects and influential creators shaping
        tomorrow. Each endeavor reflects a commitment to excellence and a vision
        for future impact.
      </motion.p>

      <Carousel items={cards} />
    </div>
  );
}

interface storyProps {
  title: string;
  what: ReactNode;
  when: ReactNode;
  why: ReactNode;
  how: ReactNode;
  techStack: string[];
  userBenefit: ReactNode;
}

const DummyContent = ({
  title,
  what,
  when,
  why,
  how,
  techStack,
  userBenefit,
}: storyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-16 md:mb-24"
    >
      <div className="w-full">
        <div className="rounded-2xl p-8 md:p-12 ">
          {/* --- HEADER SECTION --- */}
          <div>
            <p className="font-['Lexend'] text-sm font-medium text-purple-500 uppercase tracking-wider mb-3">
              {when}
            </p>

            <h3 className="font-['Syne'] text-3xl md:text-4xl font-bold mb-4 brand-gradient bg-clip-text text-transparent">
              {title}
            </h3>

            <p className="font-['Lexend'] text-white/80 text-lg mb-8">{what}</p>
          </div>

          <hr className="border-neutral-200" />

          {/* --- CORE NARRATIVE SECTION --- */}
          <div className="my-8 space-y-8">
            <div>
              <h4 className="font-['Syne'] font-semibold text-xl textGrad uppercase tracking-wider text-white/80 mb-3">
                Why? (The Problem)
              </h4>
              <div className="font-['Lexend'] text-white/60 leading-relaxed prose prose-neutral">
                {why}
              </div>
            </div>
            <div>
              <h4 className="font-['Syne'] font-semibold text-xl textGrad uppercase tracking-wider text-white/80 mb-3">
                How? (The Solution)
              </h4>
              <div className="font-['Lexend'] text-white/60 leading-relaxed prose prose-neutral">
                {how}
              </div>
            </div>
            <div>
              <h4 className="font-['Syne'] font-semibold text-xl textGrad uppercase tracking-wider text-white/80 mb-3">
                User Benefit (The Impact)
              </h4>
              <div className="font-['Lexend'] text-white/60 leading-relaxed prose prose-neutral">
                {userBenefit}
              </div>
            </div>
          </div>

          <hr className="border-neutral-200" />

          {/* --- TECH STACK SECTION --- */}
          <div className="mt-8">
            <h4 className="font-['Syne'] font-semibold text-xl textGrad uppercase tracking-wider text-white/80 mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-['Lexend'] bg-neutral-100 border border-neutral-200 text-neutral-600 text-sm font-medium px-3 py-1.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const data = [
  {
    category: "Design",
    title: "UX Case Study for a Mobile App.",
    src: "/appleCard/UX.svg",
    content: (
      <DummyContent
        title="Boosting Mobile App Activation by Redesigning the Onboarding Flow"
        what={
          <>
            This is a case study on the complete redesign of the first-time user
            experience for Clarity Wallet, a mobile personal finance app. The
            app was suffering from a high user drop-off rate during its complex
            setup process. As the lead UX Designer, I was tasked with
            identifying the key points of friction and redesigning the entire
            onboarding flow to be simpler, faster, and more reassuring for new
            users, guiding them to their first aha! moment.
          </>
        }
        when="Q2 2025 (April - June)"
        why={
          <>
            The core problem was twofold. From a business perspective, our
            analytics showed a 60% drop-off rate before a user successfully
            linked their bank account, representing a massive loss of potential
            customers. From a user perspective, qualitative feedback and app
            store reviews consistently mentioned that the initial setup was
            overwhelming,confusing, and demanded too much information upfront.
            The goal was to drastically reduce this friction and increase the
            percentage of new users who successfully activated the product's
            core feature.
          </>
        }
        how={
          <>
            My process followed a standard human-centered design approach. I
            began with Research & Discovery, conducting a heuristic evaluation
            of the existing flow, analyzing competitors' onboarding, and
            interviewing 8 potential users to map their pain points. Next, in
            the Ideation & Design phase, I created new user flow diagrams,
            low-fidelity wireframes, and ultimately high-fidelity mockups in
            Figma. A key decision was to introduce a progressive disclosure
            model, only asking for information when it was needed. I then built
            an interactive prototype in Figma and conducted moderated usability
            tests with 5 new users, which revealed key areas for refinement.
            Finally, after iteration, I collaborated with the engineering team
            for a phased rollout, using a clearly defined design system for a
            smooth handoff.
          </>
        }
        techStack={[
          "Figma (Design & Prototyping)",
          "Maze (Usability Testing)",
          "Dovetail (Research Analysis)",
          "Jira (Project Management)",
        ]}
        userBenefit={
          <>
            The redesign was a definitive success, directly impacting user
            activation and trust. Post-launch, we saw the onboarding drop-off
            rate decrease from 60% to 25%. More importantly, the number of users
            who successfully linked a bank account within their first session
            increased by 40%. Qualitative feedback from new users shifted from
            confusing to incredibly simple and reassuring, validating our
            hypothesis that a clearer, more guided experience was the key to
            building initial user confidence.
          </>
        }
      />
    ),
  },
  {
    category: "Marketing",
    title: "A/B Testing for Landing Page Conversion.",
    src: "/appleCard/AB.svg",
    content: (
      <DummyContent
        title="Boosting Landing Page Conversion with Strategic A/B Testing"
        what={
          <>
            This case study details a conversion rate optimization (CRO)
            initiative for a high-traffic SaaS landing page. The primary goal
            was to increase free trial sign-ups by identifying and eliminating
            user friction. As the lead Marketing Analyst, I was responsible for
            the entire testing lifecycle, from data analysis and hypothesis
            generation to variant design, implementation, and reporting on the
            final business impact.
          </>
        }
        when="Q3 2025 (July - September)"
        why={
          <>
            Despite attracting significant organic traffic, our main landing
            page had a high bounce rate and a conversion rate of only 2.5%, well
            below the industry average. Analytics showed users were hesitant to
            sign up, indicating a lack of clarity in our value proposition or a
            confusing call-to-action. The objective was to validate a new design
            hypothesis and achieve a statistically significant lift in
            conversions to reduce our customer acquisition cost (CAC).
          </>
        }
        how={
          <>
            The process began with a deep dive into user behavior using heatmaps
            and session recordings in Hotjar to identify where users dropped
            off. Based on this data, I formed a primary hypothesis: "A
            simplified headline and a more prominent, benefit-oriented CTA will
            increase sign-ups." I designed a new variant in Figma, then used
            Optimizely to run an A/B test targeting 50% of our traffic for four
            weeks. Throughout the test, I monitored results to ensure
            statistical validity before analyzing the final data and presenting
            the findings.
          </>
        }
        techStack={[
          "Google Analytics",
          "Hotjar",
          "Optimizely",
          "Figma",
          "Google Tag Manager",
        ]}
        userBenefit={
          <>
            The test was a clear success. The new variant outperformed the
            original by 18%, increasing the landing page's conversion rate from
            2.5% to nearly 3%. This directly resulted in a 12% increase in
            marketing qualified leads (MQLs) from this channel and lowered our
            overall CAC by 7%. The project provided actionable data that has
            since informed the redesign of our other core marketing pages.
          </>
        }
      />
    ),
  },
  {
    category: "Data Science",
    title: "Analyzing Big Data from E-commerce.",
    src: "/appleCard/ecommerce.svg",
    content: (
      <DummyContent
        title="Predictive Customer Churn Model for E-commerce"
        what={
          <>
            This project involved developing a machine learning model to predict
            customer churn for a large e-commerce platform. As a Data Scientist,
            my role was to process a large dataset of customer transactions and
            behaviors, engineer relevant features, and train a classification
            model to identify customers at high risk of churning in the next 30
            days.
          </>
        }
        when="H1 2025 (January - June)"
        why={
          <>
            The business was facing a rising customer churn rate, and the
            marketing team's retention efforts were generic and inefficient.
            Acquiring new customers is far more expensive than retaining
            existing ones, so the goal was to create a data-driven tool that
            would allow the marketing team to proactively target at-risk
            customers with personalized incentives, thereby improving retention
            and customer lifetime value (LTV).
          </>
        }
        how={
          <>
            I began with data extraction from our SQL database and performed
            extensive exploratory data analysis (EDA) in a Python Jupyter
            Notebook. I engineered features like 'days since last purchase,'
            'average order value,' and 'product category affinity.' After
            testing several models, I selected an XGBoost classifier for its
            performance. I trained the model on historical data, evaluated its
            accuracy using an AUC-ROC curve, and deployed it as a weekly batch
            process that outputs a list of at-risk customers to a Tableau
            dashboard for the marketing team.
          </>
        }
        techStack={[
          "Python (Pandas, Scikit-learn)",
          "Jupyter Notebooks",
          "SQL",
          "AWS S3",
          "Tableau",
          "XGBoost",
        ]}
        userBenefit={
          <>
            The final model achieved an 85% precision rate in identifying
            customers who would churn. Armed with this data, the marketing team
            launched a targeted retention campaign that resulted in a 15%
            decrease in the quarterly churn rate. This preserved significant
            revenue and demonstrated the power of predictive analytics to drive
            proactive business decisions.
          </>
        }
      />
    ),
  },
  {
    category: "Web Development",
    title: "Serverless Functions for a New Microservice.",
    src: "/appleCard/serverless.svg",
    content: (
      <DummyContent
        title="Building a Serverless Image Processing Microservice"
        what={
          <>
            This project involved architecting and building a new, independent
            microservice to handle all image uploads, resizing, and optimization
            for our main web application. As a Backend Engineer, I designed the
            service to be highly scalable and decoupled from our core monolith,
            improving performance and developer velocity.
          </>
        }
        when="Sprint 14-16, Q2 2025"
        why={
          <>
            Our main monolithic application was becoming slow and difficult to
            deploy. Image processing was a major bottleneck, causing high server
            load and slow response times during traffic spikes. The goal was to
            offload this intensive task to a dedicated, serverless architecture
            that could scale independently and reduce the complexity of the core
            codebase.
          </>
        }
        how={
          <>
            I chose a serverless approach using the AWS ecosystem. The flow was
            designed so that image uploads to an S3 bucket would trigger an AWS
            Lambda function. I wrote the function in Node.js and TypeScript,
            using the 'Sharp' library to efficiently generate multiple image
            sizes and optimize them for the web. An Amazon API Gateway was set
            up to expose endpoints for the frontend to request image URLs. The
            entire infrastructure was managed as code using the Serverless
            Framework and deployed automatically via a CI/CD pipeline in GitHub
            Actions.
          </>
        }
        techStack={[
          "AWS Lambda",
          "Amazon S3",
          "API Gateway",
          "Node.js",
          "TypeScript",
          "Serverless Framework",
          "GitHub Actions",
        ]}
        userBenefit={
          <>
            The new microservice drastically improved performance, reducing the
            main application's average API response time by over 200ms. The
            serverless architecture automatically scaled to handle thousands of
            simultaneous uploads without any manual intervention, and our
            infrastructure costs for image processing were cut by 30%. Most
            importantly, it allowed our team to deploy updates faster and with
            less risk.
          </>
        }
      />
    ),
  },
  {
    category: "Web3",
    title: "Exploring a Decentralized Application.",
    src: "/appleCard/web3.svg",
    content: (
      <DummyContent
        title="Smart Contract and dApp for a Decentralized Voting System"
        what={
          <>
            This is a proof-of-concept project creating a decentralized
            application (dApp) on the Ethereum blockchain for a transparent and
            tamper-proof voting system. I was responsible for writing the smart
            contract, testing it thoroughly, and building a minimalist frontend
            to interact with it.
          </>
        }
        when="Personal Project, Summer 2025"
        why={
          <>
            Centralized voting systems can be opaque and vulnerable to
            manipulation or censorship. The goal of this project was to explore
            how blockchain technology could provide a more trustworthy
            alternative. I wanted to create a system where proposals and votes
            are publicly verifiable on-chain and the rules of the election are
            enforced by immutable code, not a central administrator.
          </>
        }
        how={
          <>
            I wrote the core logic in a Solidity smart contract, defining
            functions for creating proposals, casting votes (ensuring one vote
            per address), and tallying results. I used the Hardhat development
            environment for compiling, running a comprehensive test suite, and
            deploying the contract to the Sepolia testnet. For the user
            interface, I built a simple React application using the Ethers.js
            library to connect to the blockchain, enabling users to connect
            their MetaMask wallet, view proposals, and securely cast their
            votes.
          </>
        }
        techStack={[
          "Solidity",
          "Ethereum",
          "Hardhat",
          "Ethers.js",
          "React",
          "TypeScript",
          "MetaMask",
        ]}
        userBenefit={
          <>
            The project successfully created a fully functional, trustless
            voting system. Every vote was recorded as an immutable transaction
            on the blockchain, providing complete transparency and auditability.
            This serves as a powerful demonstration of how dApps can be used to
            build fair and resilient governance models for online communities
            and DAOs.
          </>
        }
      />
    ),
  },
  {
    category: "Gaming",
    title: "Procedural World Generation in Unity",
    src: "/appleCard/Unity.svg",
    content: (
      <DummyContent
        title="Procedural World Generation for an Infinite Exploration Game"
        what={
          <>
            This project, developed for my final year at university, focuses on
            creating a robust system for procedurally generating infinite 2D
            tile-based worlds in Unity. As the sole developer, I designed and
            implemented the core algorithms to generate varied and engaging
            environments in real-time.
          </>
        }
        when="University Final Year Project, 2025"
        why={
          <>
            Manually designing large game worlds is one of the most
            time-consuming aspects of game development. For rogue-like or
            exploration games, replayability is key. The goal was to build a
            system that could create vast, unique, and playable worlds from a
            set of rules, providing endless variety for the player and saving
            massive amounts of development time.
          </>
        }
        how={
          <>
            Using C# in the Unity Engine, I based the core generation on Perlin
            Noise to create a foundational height map. Different noise
            frequencies were layered to produce varied terrain. I then wrote
            algorithms to assign specific tiles (water, sand, grass, mountain)
            based on height values, effectively creating biomes. Additional
            layers of logic were added to place environmental details like trees
            and resource nodes based on the biome rules. To ensure performance,
            the world was generated in 'chunks' around the player, creating a
            seamless and infinite map.
          </>
        }
        techStack={[
          "Unity Engine",
          "C#",
          "Perlin Noise",
          "Tilemap System",
          "Object Pooling",
        ]}
        userBenefit={
          <>
            The final system was capable of generating a completely new and
            coherent world for every playthrough, drastically increasing the
            game's potential for replayability. The chunk-based loading system
            maintained a high and stable frame rate, proving the architecture
            was performant enough for a commercial release. This project
            demonstrates a strong grasp of core game development concepts and
            algorithm design.
          </>
        }
      />
    ),
  },
];
