import { SegmentGroup } from "..";

export function OrientationVertical() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  return (
    <SegmentGroup.Root
      className="rounded-lg"
      defaultValue="Profile"
      orientation="vertical"
    >
      {items.map((item) => (
        <SegmentGroup.Item
          className="px-2 py-1.5 text-sm"
          key={item}
          value={item}
        >
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
