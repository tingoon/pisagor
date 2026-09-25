import { Calendar } from "../index";

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
