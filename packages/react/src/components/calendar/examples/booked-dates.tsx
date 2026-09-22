import { Card } from "@pisagor/react";
import { Calendar } from "..";
export function BookedDates() {
  const isWeekend = (date: { year: number; month: number; day: number }) => {
    const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar isDateUnavailable={isWeekend}>
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
      </Card.Content>
    </Card>
  );
}
