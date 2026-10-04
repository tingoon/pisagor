/** @jsxImportSource solid-js */
import { Calendar, Card } from "@pisagor/solid";
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
