<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTableHeadProps,
} from "@ark-ui/svelte/date-picker";
import CalendarTableHead from "./calendar-table-head.svelte";
import CalendarTableHeader from "./calendar-table-header.svelte";
import CalendarTableRow from "./calendar-table-row.svelte";

type Props = DatePickerTableHeadProps & {
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
