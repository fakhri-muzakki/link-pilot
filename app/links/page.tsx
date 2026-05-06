import type { Metadata } from "next";
import LinksPage from "./LinksPageClient";
import StatCard from "./components/StatCard";
import getToken from "@/lib/getToken";

export const metadata: Metadata = { title: "Link Page" };

export default async function LinkPage() {
  const session = await getToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/links`, {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!res) {
    throw new Error("Error pada saat fetch");
  }

  const result = await res.json();

  return (
    <LinksPage
      links={result.data}
      statsSection={
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <StatCard label="Total Links" value={`${result.meta.totalLinks}`} />
          <StatCard
            label="Total Clicks"
            value={result.meta.totalClicks.toString()}
          />
          <StatCard
            label="Active Campaigns"
            value={result.meta.activeCampaigns.toString()}
          />
        </div>
      }
    />
  );
}
