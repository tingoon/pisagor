import { segmentGroupRecipe } from "@pisagor/recipes";
import { SegmentGroup } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandSegmentGroupRecipe = tv({
  extend: segmentGroupRecipe,
  slots: {
    indicator: "bg-emerald-600",
    item: "data-[state=checked]:text-white",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <SegmentGroup
      class="rounded-lg"
      defaultValue="Profile"
      items={[
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ]}
      recipe={brandSegmentGroupRecipe}
    />
  );
}
