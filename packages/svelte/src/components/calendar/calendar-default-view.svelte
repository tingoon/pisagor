<script lang="ts">
  import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
  import type { Snippet } from "svelte";

  /**
   * @ark-ui/svelte's view-props context is strict (React/Solid default to
   * `{ view: "day" }`), so parts like `Calendar.ViewControl` throw when used
   * without `Calendar.View`. Provide a layout-neutral, always-visible day view
   * so shorthand trees work as in React; explicit `Calendar.View`s still override.
   */
  let { children }: { children?: Snippet } = $props();
</script>

<CalendarPrimitive.View hidden={false} style="display: contents" view="day">
  {@render children?.()}
</CalendarPrimitive.View>
