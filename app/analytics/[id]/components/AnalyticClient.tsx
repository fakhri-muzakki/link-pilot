"use client";

import {
  ArrowLeft,
  MousePointerClick,
  Users,
  Percent,
  Clock3,
} from "lucide-react";
// import { analyticsResponse } from "../data";
import formatCompact from "../formatCompact";
import CountriesChart from "./CountriesChart";
import DevicesChart from "./DevicesChart";
import ReferrersChart from "./ReferrersChart";
import StatCard from "./StatCard";
import TrafficChart from "./TrafficChart";
import Link from "next/link";
import type { Analytic } from "../type";

interface AnalyticClientProps {
  initialData: Analytic;
}

const AnalyticClient = ({ initialData }: AnalyticClientProps) => {
  const { link, summary, dailyClicks, topCountries, devices, referrers } =
    initialData;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-xl font-semibold tracking-tight">
            LinkPilot<span className="text-blue-500">.</span>
          </div>

          <Link
            href="/links"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm transition"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-2">Analytics Overview</p>

          <h1 className="text-3xl md:text-4xl font-semibold">{link.title}</h1>

          <a
            href={link.shortUrl}
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm"
          >
            {process.env.NEXT_PUBLIC_BASE_URL}
            {link.shortUrl}
          </a>
        </div>

        {/* KPI */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Clicks"
            value={formatCompact(summary.totalClicks)}
            icon={<MousePointerClick size={18} />}
          />

          <StatCard
            label="Unique Visitors"
            value={formatCompact(summary.uniqueVisitors)}
            icon={<Users size={18} />}
          />

          <StatCard
            label="Conversion Rate"
            value={`${summary.conversionRate}%`}
            icon={<Percent size={18} />}
          />

          <StatCard
            label="Last Activity"
            value={summary.lastClickedAt.toString()}
            icon={<Clock3 size={18} />}
          />
        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-6">
          {/* Traffic Chart */}
          <TrafficChart dailyClicks={dailyClicks} />

          {/* Right Column */}
          <div className="space-y-6">
            {/* Devices */}
            <DevicesChart devices={devices} />

            {/* Countries */}
            <CountriesChart topCountries={topCountries} />
          </div>
        </div>

        {/* Referrers */}
        <ReferrersChart referrers={referrers} />
      </section>
    </main>
  );
};

export default AnalyticClient;
