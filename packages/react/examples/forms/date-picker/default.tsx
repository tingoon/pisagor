import { Portal } from "@ark-ui/react";
import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, DatePicker } from "@pisagor/react";

export function Default() {
  return (
    <DatePicker.Root>
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date" />
        </Button>
      </DatePicker.Trigger>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
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
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
