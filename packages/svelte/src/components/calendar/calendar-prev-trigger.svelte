<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerPrevTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./calendar.context";

  const { m } = useLocale();

  let { children, ...rest }: DatePickerPrevTriggerProps = $props();
  // Localized default label; pass your own button / icon via `asChild`.
  const part = withContext(
    () => ({ "aria-label": m("calendar.previousMonth"), ...rest }),
    { name: "PrevTrigger" },
  );
</script>

<CalendarPrimitive.PrevTrigger {...part.props}>
  {@render children?.()}
</CalendarPrimitive.PrevTrigger>
