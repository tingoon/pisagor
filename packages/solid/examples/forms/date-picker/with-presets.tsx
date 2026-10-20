import { Portal } from "solid-js/web";
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/solid";

export function WithPresets() {
  const presets = [
    { days: 0, label: "Today" },
    { days: 1, label: "Tomorrow" },
    { days: 3, label: "In 3 days" },
    { days: 7, label: "In a week" },
  ] as const;

  return (
    <DatePicker.Root defaultValue={[parseDate(new Date())]}>
      <DatePicker.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText />
          </Button>
        )}
      />
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <div class="flex max-sm:flex-col">
              <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
                <div class="flex h-full flex-col sm:border-e sm:pe-3">
                  {presets.map((preset) => (
                    <DatePicker.PresetTrigger
                      value={[
                        parseDate(
                          new Date(
                            new Date().setDate(
                              new Date().getDate() + preset.days,
                            ),
                          ),
                        ),
                      ]}
                      asChild={(props) => (
                        <Button
                          {...props()}
                          class="w-full justify-start"
                          size="sm"
                          variant="ghost"
                        >
                          {preset.label}
                        </Button>
                      )}
                    />
                  ))}
                </div>
              </div>
              <div class="max-sm:pb-3 sm:ps-2">
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
              </div>
            </div>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
