import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card } from "@pisagor/solid";

export function SelectToday() {
  return (
    <Calendar>
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
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
        </Card.Content>
        <Card.Footer>
          <Calendar.TodayTrigger class="w-full" />
        </Card.Footer>
      </Card>
    </Calendar>
  );
}
