import { Card } from "@pisagor/react";
import { Calendar } from "..";
export function Range() {
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar selectionMode="range">
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
