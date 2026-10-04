/** @jsxImportSource solid-js */
import { Calendar } from "@pisagor/solid";

export function Default() {
  return (
    <Calendar>
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
    </Calendar>
  );
}
