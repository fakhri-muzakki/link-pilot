import ProgressRow from "./ProgressRow";

interface Devices {
  mobile: number;
  desktop: number;
  tablet: number;
}

const DevicesChart = ({ devices }: { devices: Devices }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold mb-5">Devices</h2>

      <ProgressRow label="Mobile" value={devices.mobile} />
      <ProgressRow label="Desktop" value={devices.desktop} />
      <ProgressRow label="Tablet" value={devices.tablet} />
    </div>
  );
};

export default DevicesChart;
