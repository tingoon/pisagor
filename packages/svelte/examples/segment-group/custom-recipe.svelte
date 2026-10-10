<script lang="ts">
import { segmentGroupRecipe } from "@pisagor/recipes";
import { SegmentGroup } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSegmentGroupRecipe = tv({
  extend: segmentGroupRecipe,
  slots: {
    indicator: "bg-emerald-600",
    item: "data-[state=checked]:text-white",
  },
  variants: {},
});
</script>

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
