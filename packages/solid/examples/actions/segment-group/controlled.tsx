import { SegmentGroup } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal<string | null>("Profile");

  return (
    <SegmentGroup
      class="rounded-lg"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
      onValueChange={setValue}
      value={value()}
    />
  );
}
