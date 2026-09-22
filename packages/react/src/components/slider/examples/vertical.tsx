import { Slider } from "..";

export function Vertical() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Slider className="h-40" defaultValue={[75]} max={100} orientation="vertical" step={1} />
      <Slider className="h-40" defaultValue={[25]} max={100} orientation="vertical" step={1} />
    </div>
  );
}
