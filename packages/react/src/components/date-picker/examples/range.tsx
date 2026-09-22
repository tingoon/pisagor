import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, parseDate } from "@pisagor/react";
import { DatePicker } from "..";
export function Range() {
  return (
    <DatePicker focusedValue={parseDate(new Date())} selectionMode="range">
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date range" />
        </Button>
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
  );
}
