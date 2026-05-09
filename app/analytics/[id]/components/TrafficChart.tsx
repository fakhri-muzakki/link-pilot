import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface DailyClick {
  date: string;
  clicks: number;
}

const TrafficChart = ({ dailyClicks }: { dailyClicks: DailyClick[] }) => {
  return (
    <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Traffic (Last 7 Days)</h2>
        <p className="text-sm text-gray-400 mt-1">
          Daily click performance for this short link.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        {/* container dalam dengan lebar minimum */}
        <div className="min-w-125 md:min-w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyClicks}>
              <defs>
                <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="date"
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

              <Area
                type="monotone"
                dataKey="clicks"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#fillBlue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;
