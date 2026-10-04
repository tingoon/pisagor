/** @jsxImportSource solid-js */
import { SegmentGroup } from "@pisagor/solid/segment-group";

export function Disabled() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  return (
    <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" disabled>
      {items.map((item) => (
        <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
