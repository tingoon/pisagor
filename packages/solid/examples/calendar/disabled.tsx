/** @jsxImportSource solid-js */
import { Calendar, Card } from "@pisagor/solid";
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
