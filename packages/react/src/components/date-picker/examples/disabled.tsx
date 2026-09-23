import { Calendar } from "@pisagor/react";
import { DatePicker } from "..";
export function Disabled() {
  return (
    <DatePicker disabled>
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
  );
}
