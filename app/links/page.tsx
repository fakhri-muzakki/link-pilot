import type { Metadata } from "next";
import LinksPage from "./LinksPageClient";
import dummyLinksBackend from "./data";
import StatCard from "./components/StatCard";

export const metadata: Metadata = { title: "LinkPage" };

export default function LinkPage() {
  return (
    <LinksPage
      links={dummyLinksBackend.data}
      statsSection={
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            label="Total Links"
            value={`${dummyLinksBackend.meta.totalLinks}`}
          />
          <StatCard
            label="Total Clicks"
            value={dummyLinksBackend.meta.totalClicks.toString()}
          />
          <StatCard
            label="Active Campaigns"
            value={dummyLinksBackend.meta.activeCampaigns.toString()}
          />
        </div>
      }
    />
  );
}
