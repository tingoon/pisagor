import { useState } from "react";
import { CircularSlider } from "..";

export function Controlled() {
  const [value, setValue] = useState(45);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground text-sm">More than: 180</div>
      <CircularSlider aria-label="Angle" onValueChange={setValue} value={value} />
      <div className="text-center text-muted-foreground text-sm">{value > 180 ? "✅" : "❌"}</div>
    </div>
  );
}
