import { Portal } from "solid-js/web";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, DatePicker, Field, parseDate } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Clearable() {
  const [value, setValue] = createSignal([parseDate("2025-06-15")]);

  return (
    <div class="flex flex-col gap-2">
      <Field>
        <Field.Label>Input variant</Field.Label>
        <DatePicker
          clearable
          onValueChange={(value) => setValue(value ?? [])}
          placeholder="Select date"
          value={value()}
        />
      </Field>
      <Field>
        <Field.Label>Trigger variant</Field.Label>
        <DatePicker.Root
          onValueChange={(value) => setValue(value ?? [])}
          value={value()}
        >
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
      </Field>
    </div>
  );
}
