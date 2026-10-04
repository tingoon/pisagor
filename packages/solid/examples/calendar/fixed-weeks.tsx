/** @jsxImportSource solid-js */
import { Card } from "@pisagor/solid";
import { Calendar } from "@pisagor/solid/calendar";
export function FixedWeeks() {
  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar fixedWeeks>
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
