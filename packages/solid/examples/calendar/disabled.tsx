/** @jsxImportSource solid-js */
import { Card } from "@pisagor/solid";
import { Calendar } from "@pisagor/solid/calendar";
export function Disabled() {
  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar disabled>
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
