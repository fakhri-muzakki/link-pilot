"use client";

import Link from "next/link";
import { ArrowLeft, Home, Link2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            LinkPilot<span className="text-blue-500">.</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition"
          >
            <Home size={16} />
            Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-blue-600/15 text-blue-400 flex items-center justify-center border border-blue-500/10">
            <Link2 size={28} />
          </div>

          {/* Error Code */}
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400 mb-4">
            Error 404
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            This link has gone nowhere.
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-400 max-w-xl mx-auto leading-relaxed">
            The page you’re trying to access doesn’t exist, may have been moved,
            or the URL might be incorrect.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-medium transition"
            >
              <Home size={16} />
              Back to Home
            </Link>

            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-medium transition"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>

          {/* Bottom Card */}
        </div>
      </section>
    </main>
  );
}
