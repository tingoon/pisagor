import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button, Calendar, Card, parseDate } from "@pisagor/react";

export function MinMax() {
  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar max={parseDate("2025-03-31")} min={parseDate("2025-03-05")}>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger asChild>
              <Button size="icon-md" variant="ghost">
                <CaretLeftIcon aria-hidden className="rtl:rotate-180" />
              </Button>
            </Calendar.PrevTrigger>
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger asChild>
              <Button size="icon-md" variant="ghost">
                <CaretRightIcon aria-hidden className="rtl:rotate-180" />
              </Button>
            </Calendar.NextTrigger>
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
