"use client";
import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  UserX,
  Lock,
  AlertCircle,
  ShieldAlert,
  ServerCrash,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

// Error configuration mapping
const errorConfig = {
  404: {
    icon: UserX,
    title: "User Not Found",
    description:
      "Sorry, a user with that name does not exist. They may have changed their username or the account might have been deleted.",
    primaryAction: { label: "Go Home", href: "/" },
    showSearch: true,
  },
  401: {
    icon: Lock,
    title: "Unauthorized Access",
    description:
      "You need to be logged in to access this page. Please sign in with your account to continue.",
    primaryAction: { label: "Sign In", href: "/login" },
    showSearch: false,
  },
  403: {
    icon: ShieldAlert,
    title: "Access Forbidden",
    description:
      "You don't have permission to access this resource. Contact an administrator if you believe this is an error.",
    primaryAction: { label: "Go Home", href: "/" },
    showSearch: false,
  },
  500: {
    icon: ServerCrash,
    title: "Server Error",
    description:
      "Something went wrong on our end. Our team has been notified and is working to fix the issue.",
    primaryAction: { label: "Try Again", href: "/" },
    showSearch: false,
  },
  default: {
    icon: AlertCircle,
    title: "Something Went Wrong",
    description:
      "An unexpected error occurred. Please try again or contact support if the problem persists.",
    primaryAction: { label: "Go Home", href: "/" },
    showSearch: false,
  },
};

export default function DynamicErrorPage() {
  const searchParams = useSearchParams();

  // Get error details from URL params
  const errorCode = searchParams.get("code") || "404";
  const customMessage = searchParams.get("message");
  const customTitle = searchParams.get("title");

  // Get configuration for this error type
  const config =
    errorConfig[errorCode as keyof typeof errorConfig] || errorConfig.default;
  const Icon = config.icon;

  // Use custom message/title if provided, otherwise use default
  const title = customTitle || config.title;
  const description = customMessage || config.description;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 font-['Lexend']">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-2xl w-full">
        {/* Main Card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-green-400/20 rounded-3xl blur-2xl"></div>

          {/* Content */}
          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800/50 p-8 md:p-12 text-center">
            {/* Error Code */}
            <div className="relative mb-6">
              <h1 className="text-8xl md:text-9xl font-bold font-['Syne'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 leading-none">
                {errorCode}
              </h1>
              <div className="absolute inset-0 blur-2xl opacity-50">
                <h1 className="text-8xl md:text-9xl font-bold font-['Syne'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 leading-none">
                  {errorCode}
                </h1>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full blur-lg opacity-50"></div>
                <div className="relative w-20 h-20 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-700/50">
                  <Icon className="w-10 h-10 text-slate-300" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold font-['Syne'] text-white mb-4">
              {title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Button */}
              <Link
                href={config.primaryAction.href}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 text-slate-950 rounded-xl font-semibold text-base overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-400/50 hover:scale-105 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                <Home className="relative w-5 h-5" />
                <span className="relative">{config.primaryAction.label}</span>
              </Link>

              {/* Secondary Button */}
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-xl font-semibold text-base border border-slate-700/50 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-400/20 w-full sm:w-auto"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Alternative Actions - Only show for certain error types */}
            {config.showSearch && (
              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <p className="text-sm text-slate-500 mb-4">
                  Looking for something else?
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/search"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 text-slate-300 rounded-lg text-sm hover:bg-slate-800/50 transition-all border border-slate-800/50 hover:border-slate-700"
                  >
                    <Search className="w-4 h-4" />
                    Search Users
                  </Link>
                  <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 text-slate-300 rounded-lg text-sm hover:bg-slate-800/50 transition-all border border-slate-800/50 hover:border-slate-700"
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div
          className="absolute -top-10 -right-10 w-20 h-20 border-2 border-purple-400/20 rounded-lg rotate-12"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full"
          style={{
            animation: "float-delayed 4s ease-in-out infinite",
            animationDelay: "1s",
          }}
        ></div>
      </div>
    </div>
  );
}
