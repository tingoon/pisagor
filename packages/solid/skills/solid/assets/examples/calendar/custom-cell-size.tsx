/** @jsxImportSource solid-js */
import { Card } from "@pisagor/solid";
import { Calendar } from "@pisagor/solid/calendar";
export function CustomCellSize() {
  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar class="[--cell-size:--spacing(10)]">
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
