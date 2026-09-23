import { useState } from "react";
import { Toggle } from "..";

export function Controlled() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <Toggle onPressedChange={setPressed} pressed={pressed} variant="outline">
        Toggle
      </Toggle>
      <p className="text-muted-foreground text-sm">{pressed ? "✅" : "❌"}</p>
    </div>
  );
}
