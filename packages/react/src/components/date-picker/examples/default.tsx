import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar } from "@pisagor/react";
import { DatePicker } from "..";
export function Default() {
  return (
    <DatePicker>
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date" />
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
