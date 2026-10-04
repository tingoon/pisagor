<script lang="ts">
import { Calendar, DatePicker } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
      <DatePicker variant="primary">
        <DatePicker.Input placeholder="Primary" />
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
      <DatePicker variant="secondary">
        <DatePicker.Input placeholder="Secondary" />
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
    </div>
