import { Calendar, Card } from "@pisagor/react";
export function CustomCellSize() {
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar className="[--cell-size:--spacing(10)]">
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
