import getToken from "@/lib/getToken";
import AnalyticClient from "./components/AnalyticClient";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnalyticsPage({ params }: Props) {
  const { id } = await params;
  const session = await getToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/links/${id}/analytics`,
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    },
  );
  // api/links/413f31a6-534a-4cda-a57b-3cd08a354ba8/analytics

  if (!res) {
    throw new Error("Error pada saat fetch");
  }

  const result = await res.json();

  return <AnalyticClient initialData={result.data} />;
}
