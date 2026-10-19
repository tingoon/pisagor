import { SegmentGroup } from "@pisagor/solid";

const sizes = ["sm", "md", "lg"] as const;
const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
];

export function Sizes() {
  return (
    <div class="flex flex-col items-start gap-2">
      {sizes.map((size) => (
        <SegmentGroup defaultValue="Profile" items={items} size={size} />
      ))}
    </div>
  );
}
