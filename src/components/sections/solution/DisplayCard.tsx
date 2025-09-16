import React from "react";
import { HeartIcon, MessageCircle } from "lucide-react";

export const DisplayCard = () => {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-gray-900 border border-gray-700 overflow-hidden">
      {/* Browser Header */}
      <div className="flex items-center w-full h-16 bg-gray-800 border-b border-gray-700 p-6">
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        {/* URL Bar */}
        <div className="flex-grow flex items-center h-7 ml-8 px-4 rounded-full bg-gray-700">
          <span className="text-sm text-gray-400 font-sans">
            http://devhance.in/project/ai-chat-app
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 space-y-8">
        {/* Project Header */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">
            AI Chat Application
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-3 py-1 rounded-full bg-cyan-800/20 text-cyan-400 text-sm border border-cyan-400">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-800/20 text-purple-400 text-sm border border-purple-400">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-full bg-green-800/20 text-green-400 text-sm border border-green-400">
              UX Pilot AI
            </span>
          </div>
        </div>

        {/* Problem Statement Card */}
        <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Problem Statement
          </h3>
          <p className="text-gray-400">
            Users needed a more intuitive way to interact with AI models, so I
            developed an AI chat application...
          </p>
        </div>

        {/* Live Prototype Card */}
        <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            Live Prototype
          </h3>
          <div className="flex items-center justify-center h-72 rounded-lg bg-gray-700">
            <span className="text-lg text-gray-500">
              Live Prototype Placeholder
            </span>
          </div>
        </div>

        {/* Community Feedback Card */}
        <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            Community Feedback
          </h3>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <HeartIcon className="w-5 h-5 text-red-400" />
              <span>24</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-violet-400" />
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
