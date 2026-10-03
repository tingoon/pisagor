<script lang="ts">
import { Button, Calendar } from "@pisagor/svelte";
import { parseDate } from "@pisagor/svelte/calendar";
import { DatePicker } from "@pisagor/svelte/date-picker";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";
</script>

<DatePicker focusedValue={parseDate(new Date())} selectionMode="range">
  <DatePicker.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">
        <CalendarIcon />
        <DatePicker.ValueText placeholder="Pick a date range" />
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
