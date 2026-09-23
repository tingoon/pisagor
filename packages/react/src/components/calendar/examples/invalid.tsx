import { Card } from "@pisagor/react";
import { Calendar } from "..";
export function Invalid() {
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar invalid>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger />
            <Calendar.ViewDate />
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
