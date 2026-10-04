/** @jsxImportSource solid-js */

import { SegmentGroup } from "@pisagor/solid/segment-group";
import { createSignal } from "solid-js";
export function Controlled() {
  const items = ["Profile", "Account", "Security", "Notifications"];
  const [value, setValue] = createSignal<string | null>("Profile");

  return (
    <SegmentGroup.Root
      class="rounded-lg"
      onValueChange={setValue}
      value={value()}
    >
      {items.map((item) => (
        <SegmentGroup.Item class="px-2 py-1.5 text-sm" value={item}>
          {item}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
