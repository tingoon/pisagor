/** @jsxImportSource solid-js */
import { SegmentGroup } from "@pisagor/solid";

export function Variants() {
  const items = ["Profile", "Account", "Security", "Notifications"];

  return (
    <div class="flex flex-col gap-2">
      <SegmentGroup.Root
        class="rounded-lg"
        defaultValue="Profile"
        variant="default"
      >
        {items.map((item) => (
          <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
      <SegmentGroup.Root defaultValue="Profile" variant="underline">
        {items.map((item) => (
          <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
      <SegmentGroup.Root
        defaultValue="Profile"
        orientation="vertical"
        variant="underline"
      >
        {items.map((item) => (
          <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
            {item}
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}
