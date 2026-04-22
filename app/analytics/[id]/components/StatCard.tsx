const StatCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-4">
        {icon}
      </div>

      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default StatCard;
