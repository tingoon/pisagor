import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, parseDate } from "@pisagor/react";
import { DatePicker } from "..";
export function WithPresets() {
  const presets = [
    { days: 0, label: "Today" },
    { days: 1, label: "Tomorrow" },
    { days: 3, label: "In 3 days" },
    { days: 7, label: "In a week" },
  ] as const;
  return (
    <DatePicker defaultValue={[parseDate(new Date())]}>
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content>
        <div className="flex max-sm:flex-col">
          <div className="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
            <div className="flex h-full flex-col sm:border-e sm:pe-3">
              {presets.map((preset) => (
                <DatePicker.PresetTrigger
                  asChild
                  key={preset.label}
                  value={[
                    parseDate(
                      new Date(
                        new Date().setDate(new Date().getDate() + preset.days),
                      ),
                    ),
                  ]}
                >
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    {preset.label}
                  </Button>
                </DatePicker.PresetTrigger>
              ))}
            </div>
          </div>
          <div className="max-sm:pb-3 sm:ps-2">
            <Calendar.ViewControl>
              <Calendar.PrevTrigger />
              <Calendar.MonthSelect />
              <Calendar.YearSelect />
              <Calendar.NextTrigger />
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </div>
        </div>
      </DatePicker.Content>
    </DatePicker>
  );
}
