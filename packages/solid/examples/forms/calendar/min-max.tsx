import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card, parseDate } from "@pisagor/solid";

export function MinMax() {
  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar max={parseDate("2025-03-31")} min={parseDate("2025-03-05")}>
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
