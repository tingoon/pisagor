/** @jsxImportSource solid-js */
import { SegmentGroup } from "@pisagor/solid";

export function CustomIndicator() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  return (
    <SegmentGroup.Root
      class="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
      defaultValue="Profile"
    >
      {items.map((item) => (
        <SegmentGroup.Item
          class="px-2 py-1.5 text-sm"
          disabled={item === "Security"}
          value={item}
        >
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
