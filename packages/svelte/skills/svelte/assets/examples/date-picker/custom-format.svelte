<script lang="ts">
import { Button, Calendar } from "@pisagor/svelte";
import { parseDate } from "@pisagor/svelte/calendar";
import { DatePicker } from "@pisagor/svelte/date-picker";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";

let value = $state([parseDate("2025-01-15")]);

const formattedDate = $derived(
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date((value[0] ?? parseDate("2025-01-15")).toString()),
  ),
);
</script>

<DatePicker onValueChange={(details) => (value = details.value ?? [])} {value}>
  <DatePicker.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">
        <CalendarIcon />
        {formattedDate}
      </Button>
    {/snippet}
  </DatePicker.Trigger>
  <DatePicker.Content>
    <Calendar.ViewControl>
      <Calendar.PrevTrigger />
      <Calendar.MonthSelect />
      <Calendar.YearSelect />
      <Calendar.NextTrigger />
    </Calendar.ViewControl>
    <Calendar.Table>
      <Calendar.WeekDays />
      <Calendar.TableDays />
    </Calendar.Table>
  </DatePicker.Content>
</DatePicker>
