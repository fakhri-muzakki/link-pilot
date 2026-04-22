import formatCompact from "../formatCompact";

interface TopCountries {
  country: string;
  clicks: number;
}

const CountriesChart = ({ topCountries }: { topCountries: TopCountries[] }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold mb-5">Top Countries</h2>

      <div className="space-y-4">
        {topCountries.map((item) => (
          <div
            key={item.country}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-300">{item.country}</span>

            <span className="font-medium">{formatCompact(item.clicks)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesChart;
