import { Calendar, Card } from "@pisagor/solid";
export function SelectToday() {
  return (
    <Calendar>
      <Card class="[--space:--spacing(2)]">
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
          <Calendar.TodayTrigger class="w-full" />
        </Card.Footer>
      </Card>
    </Calendar>
  );
}
