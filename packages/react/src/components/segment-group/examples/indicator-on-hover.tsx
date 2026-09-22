import { useState } from "react";
import { SegmentGroup } from "..";

export function IndicatorOnHover() {
  const pages = ["Profile", "Account", "Security", "Notifications"];
  const [value, setValue] = useState("Profile");
  const [hoverValue, setHoverValue] = useState<string | null>(null);

  return (
    <SegmentGroup.Root
      className="rounded-lg"
      onValueChange={(value) => setValue(value ?? "Profile")}
      value={hoverValue ?? value}
    >
      {pages.map((page) => (
        <SegmentGroup.Item
          className="px-2 py-1.5 text-sm"
          key={page}
          onClick={() => setValue(page)}
          onMouseEnter={() => setHoverValue(page)}
          onMouseLeave={() => setHoverValue(null)}
          value={page}
        >
          {page}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
