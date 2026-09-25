<script lang="ts">
import type { DatePickerTableHeadProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import CalendarTableHead from "./calendar-table-head.svelte";
import CalendarTableHeader from "./calendar-table-header.svelte";
import CalendarTableRow from "./calendar-table-row.svelte";

type Props = Omit<DatePickerTableHeadProps, "class"> & {
  class?: string | undefined;
  format?: "narrow" | "short" | "long";
};

let { format = "narrow", ...rest }: Props = $props();
</script>

<CalendarPrimitive.Context>
  {#snippet render(
  calendar,
)}
    <CalendarTableHead {...rest}>
      <CalendarTableRow>
        {#each calendar().weekDays as weekDay (weekDay.short)}
          <CalendarTableHeader>{weekDay[format]}</CalendarTableHeader>
        {/each}
      </CalendarTableRow>
    </CalendarTableHead>
  {/snippet}
</CalendarPrimitive.Context>
