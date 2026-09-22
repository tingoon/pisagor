import { SegmentGroup } from "..";

export function CustomIndicator() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  return (
    <SegmentGroup.Root
      className="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
      defaultValue="Profile"
    >
      {items.map((item) => (
        <SegmentGroup.Item
          className="px-2 py-1.5 text-sm"
          disabled={item === "Security"}
          key={item}
          value={item}
        >
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
