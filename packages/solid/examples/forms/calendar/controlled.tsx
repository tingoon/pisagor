import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, Card, parseDate } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal([parseDate(new Date(Date.now()))]);

  return (
    <div class="flex flex-col gap-2">
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar
            onValueChange={({ value }) => setValue(value)}
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
      <p class="text-muted-foreground text-center text-sm">
        {value().map((date) => date.toString())}
      </p>
    </div>
  );
}
