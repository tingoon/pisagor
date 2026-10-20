import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card } from "@pisagor/solid";

export function Disabled() {
  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar disabled>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger
              asChild={(props) => (
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretLeftIcon aria-hidden class="rtl:rotate-180" />
                </Button>
              )}
            />
            <Calendar.ViewDate />
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
