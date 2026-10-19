<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerNextTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./calendar.context";

  const { m } = useLocale();

  let { children, ...rest }: DatePickerNextTriggerProps = $props();
  // Localized default label; pass your own button / icon via `asChild`.
  const part = withContext(
    () => ({ "aria-label": m("calendar.nextMonth"), ...rest }),
    { name: "NextTrigger" },
  );
</script>

<CalendarPrimitive.NextTrigger {...part.props}>
  {@render children?.()}
</CalendarPrimitive.NextTrigger>
