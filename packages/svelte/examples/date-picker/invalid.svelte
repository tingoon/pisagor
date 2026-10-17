<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Calendar, DatePicker } from "@pisagor/svelte";
</script>

<DatePicker invalid>
  <DatePicker.Input placeholder="Select date" />
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
