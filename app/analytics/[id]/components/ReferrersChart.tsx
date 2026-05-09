import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface Referrers {
  source: string;
  clicks: number;
}

const ReferrersChart = ({ referrers }: { referrers: Referrers[] }) => {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Top Referrers</h2>
        <p className="text-sm text-gray-400 mt-1">
          Where your traffic comes from.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        {/* container dalam dengan lebar minimum */}
        <div className="min-w-125 md:min-w-full h-70">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={referrers}>
              <XAxis
                dataKey="source"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />

              <Bar dataKey="clicks" radius={[8, 8, 0, 0]} fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReferrersChart;
