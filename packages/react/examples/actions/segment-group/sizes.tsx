import { SegmentGroup } from "@pisagor/react";

const sizes = ["sm", "md", "lg"] as const;
const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
];

export function Sizes() {
  return (
    <div className="flex flex-col items-start gap-2">
      {sizes.map((size) => (
        <SegmentGroup
          defaultValue="Profile"
          items={items}
          key={size}
          size={size}
        />
      ))}
    </div>
  );
}
