import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card } from "@pisagor/solid";

export function BookedDates() {
  const isWeekend = (date: { year: number; month: number; day: number }) => {
    const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();

    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar isDateUnavailable={isWeekend}>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger
              asChild={(props) => (
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretLeftIcon aria-hidden class="rtl:rotate-180" />
                </Button>
              )}
            />
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger
              asChild={(props) => (
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretRightIcon aria-hidden class="rtl:rotate-180" />
                </Button>
              )}
            />
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
