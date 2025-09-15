import React from "react";
import { Github, Figma, FileText, Youtube, Code } from "lucide-react";

// Reusable card for the "problem" section
const ProblemCard = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-xl border border-gray-700 bg-gray-900 text-white">
      <Icon className="w-6 h-6" />
      <span className="text-base font-medium">{text}</span>
    </div>
  );
};

// Reusable card for the "solution" section with a gradient border
const SolutionCard = () => {
  return (
    <div className="relative p-0.5 mt-8 rounded-xl brand">
      <div className="flex items-center space-x-4 p-6 rounded-[10px] bg-gray-900 text-white">
        <Code className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-xl font-bold">Unified Project Story</h3>
          <p className="mt-1 text-sm text-gray-400">
            Complete narrative with code, design, and impact
          </p>
        </div>
      </div>
    </div>
  );
};

// Main component for the section
const Card = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProblemCard icon={Github} text="Code scattered" />
        <ProblemCard icon={Figma} text="Design isolated" />
        <ProblemCard icon={FileText} text="Docs hidden" />
        <ProblemCard icon={Youtube} text="Demo buried" />
      </div>
      <SolutionCard />
    </div>
  );
};

export default Card;
