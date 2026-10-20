import { Portal } from "solid-js/web";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, DatePicker } from "@pisagor/solid";

export function Default() {
  return (
    <DatePicker.Root>
      <DatePicker.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText placeholder="Pick a date" />
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
