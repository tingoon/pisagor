import { Portal } from "solid-js/web";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function CustomFormat() {
  const [value, setValue] = createSignal([parseDate("2025-01-15")]);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date((value()[0] ?? parseDate("2025-01-15")).toString()));

  return (
    <DatePicker.Root
      onValueChange={(value) => setValue(value ?? [])}
      value={value()}
    >
      <DatePicker.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            <CalendarIcon />
            {formattedDate}
          </Button>
        )}
      />
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
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
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
