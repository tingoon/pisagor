import { SegmentGroup } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;
const items = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
];

export function Sizes() {
  return (
    <div class="flex flex-col items-start gap-2">
      <For each={sizes}>
        {(size) => (
          <SegmentGroup defaultValue="Profile" items={items} size={size} />
        )}
      </For>
    </div>
  );
}
