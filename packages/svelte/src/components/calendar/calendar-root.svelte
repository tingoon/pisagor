<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerRootProps,
  } from "@ark-ui/svelte";
  import type { CalendarRootContract } from "@pisagor/contracts";

  import { withProvider } from "./calendar.context";
  import CalendarDefaultView from "./calendar-default-view.svelte";

  type Props = DatePickerRootProps & CalendarRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => ({ ...rest, inline: true }), {
    name: "Root",
  });
</script>

<CalendarPrimitive.Root {...root.props}>
  <CalendarDefaultView>{@render children?.()}</CalendarDefaultView>
</CalendarPrimitive.Root>
