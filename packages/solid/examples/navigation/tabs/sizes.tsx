import { Tabs } from "@pisagor/solid";
import { For } from "solid-js";
import { profileTabs } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <Tabs defaultValue="tab-1" items={profileTabs()} size={size} />
        )}
      </For>
    </div>
  );
}
