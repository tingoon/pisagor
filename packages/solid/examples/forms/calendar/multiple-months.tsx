import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card, parseDate } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function MultipleMonths() {
  const [value, setValue] = createSignal([parseDate(new Date(Date.now()))]);

  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar
          numOfMonths={2}
          onValueChange={({ value }) => setValue(value)}
          selectionMode="range"
          value={value()}
        >
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
          <div class="flex gap-2">
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableNextMonth />
            </Calendar.Table>
          </div>
        </Calendar>
      </Card.Content>
    </Card>
  );
}
