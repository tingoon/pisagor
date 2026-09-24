<script lang="ts">
import type { DatePickerTableBodyProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import CalendarTableBody from "./calendar-table-body.svelte";
import CalendarTableCell from "./calendar-table-cell.svelte";
import CalendarTableRow from "./calendar-table-row.svelte";

type Props = DatePickerTableBodyProps & { tabIndex?: number | null };

function getWeekRowKey(week: Array<{ day: number; month: number; year: number }>) {
  return week.map((day) => `${day.year}-${day.month}-${day.day}`).join("/");
}

let { tabIndex, ...rest }: Props = $props();
</script>

<CalendarPrimitive.Context>
  {#snippet render(
  calendar,
)}
    <CalendarTableBody {...rest}>
      {#each calendar().weeks as week (getWeekRowKey(week))}
        <CalendarTableRow>
          {#each week as day (`${day.year}-${day.month}-${day.day}`)}
            <CalendarTableCell tabindex={tabIndex ?? undefined} value={day}>
              {day.day}
            </CalendarTableCell>
          {/each}
        </CalendarTableRow>
      {/each}
    </CalendarTableBody>
  {/snippet}
</CalendarPrimitive.Context>
