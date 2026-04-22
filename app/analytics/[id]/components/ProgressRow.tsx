const ProgressRow = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-300">{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressRow;
