import { Card } from "@pisagor/react";
import { Calendar } from "..";
export function SelectToday() {
  return (
    <Calendar>
      <Card className="[--space:--spacing(2)]">
        <Card.Content>
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
        </Card.Content>
        <Card.Footer>
          <Calendar.TodayTrigger className="w-full" />
        </Card.Footer>
      </Card>
    </Calendar>
  );
}
