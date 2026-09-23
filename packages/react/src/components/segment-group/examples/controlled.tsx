import { useState } from "react";
import { SegmentGroup } from "..";

export function Controlled() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  const [value, setValue] = useState<string | null>("Profile");

  return (
    <SegmentGroup.Root className="rounded-lg" onValueChange={setValue} value={value}>
      {items.map((item) => (
        <SegmentGroup.Item className="px-2 py-1.5 text-sm" key={item} value={item}>
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
