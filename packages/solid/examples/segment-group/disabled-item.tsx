/** @jsxImportSource solid-js */
import { SegmentGroup } from "@pisagor/solid";

export function DisabledItem() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  return (
    <SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
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
