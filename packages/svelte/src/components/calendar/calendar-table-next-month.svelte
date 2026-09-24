<script lang="ts">
import type { DatePickerTableBodyProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import CalendarTableBody from "./calendar-table-body.svelte";
import CalendarTableCell from "./calendar-table-cell.svelte";
import CalendarTableRow from "./calendar-table-row.svelte";

type Props = DatePickerTableBodyProps & {
  months?: number;
  tabIndex?: number | null;
};

function getWeekRowKey(week: Array<{ day: number; month: number; year: number }>) {
  return week.map((day) => `${day.year}-${day.month}-${day.day}`).join("/");
}

let { tabIndex, months = 1, ...rest }: Props = $props();
</script>

<CalendarPrimitive.Context>
  {#snippet render(
  calendar,
)}
    {@const offset = calendar().getOffset({ months })}
    <CalendarTableBody {...rest}>
      {#each offset.weeks as week (getWeekRowKey(week))}
        <CalendarTableRow>
          {#each week as day (`${day.year}-${day.month}-${day.day}`)}
            <CalendarTableCell
              tabindex={tabIndex ?? undefined}
              value={day}
              visibleRange={offset.visibleRange}
            >
              {day.day}
            </CalendarTableCell>
          {/each}
        </CalendarTableRow>
      {/each}
    </CalendarTableBody>
  {/snippet}
</CalendarPrimitive.Context>
