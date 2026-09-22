import { CircularSlider } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {[120, 180, 240].map((size) => (
        <CircularSlider aria-label="Angle" defaultValue={45} key={size} size={size}>
          <CircularSlider.ValueText suffix="°" />
        </CircularSlider>
      ))}
    </div>
  );
}
