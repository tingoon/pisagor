import { SegmentGroup } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function IndicatorOnHover() {
  const pages = ["Profile", "Account", "Security", "Notifications"];
  const [value, setValue] = createSignal("Profile");
  const [hoverValue, setHoverValue] = createSignal<string | null>(null);

  return (
    <SegmentGroup.Root
      class="rounded-lg"
      onValueChange={(value) => setValue(value ?? "Profile")}
      value={hoverValue() ?? value()}
    >
      {pages.map((page) => (
        <SegmentGroup.Item
          class="px-2 py-1.5 text-sm"
          onClick={() => setValue(page)}
          onMouseEnter={() => setHoverValue(page)}
          onMouseLeave={() => setHoverValue(null)}
          value={page}
        >
          {page}
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
