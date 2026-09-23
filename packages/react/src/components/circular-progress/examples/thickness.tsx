import { CircularProgress } from "..";

export function Thickness() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <CircularProgress size={24} thickness={2} value={35} />
      <CircularProgress size={66} thickness={6} value={62} />
      <CircularProgress size={100} thickness={8} value={84} />
    </div>
  );
}
