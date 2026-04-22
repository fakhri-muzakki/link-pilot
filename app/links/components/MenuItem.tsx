const MenuItem = ({
  icon,
  label,
  danger,
  onClick,
}: {
  icon: React.ReactElement;
  label: string;
  danger?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 text-sm flex items-center gap-3 hover:bg-white/5 transition ${
        danger ? "text-red-400" : "text-gray-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default MenuItem;
