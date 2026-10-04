/** @jsxImportSource solid-js */
import { Calendar, Card } from "@pisagor/solid";
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
