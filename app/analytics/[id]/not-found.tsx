"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, Link2 } from "lucide-react";

export default function AnalyticsNotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            LinkPilot<span className="text-blue-500">.</span>
          </Link>

          <Link
            href="/links"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition"
          >
            <ArrowLeft size={16} />
            Back to Links
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-blue-600/15 text-blue-400 flex items-center justify-center border border-blue-500/10">
            <BarChart3 size={28} />
          </div>

          {/* Label */}
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400 mb-4">
            Analytics Not Found
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            No analytics available.
          </h1>

          {/* Desc */}
          <p className="mt-5 text-gray-400 max-w-xl mx-auto leading-relaxed">
            The analytics report you’re looking for doesn’t exist, may have been
            removed, or this link has not received any tracked clicks yet.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/links"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-medium transition"
            >
              <Link2 size={16} />
              View Your Links
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
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm text-gray-400 mb-2">Possible reasons</p>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>• The selected link does not exist.</li>
              <li>• The link was deleted or deactivated.</li>
              <li>• No click activity has been recorded yet.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
