import { Portal } from "@ark-ui/react";
import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/react";

export function Range() {
  return (
    <DatePicker.Root focusedValue={parseDate(new Date())} selectionMode="range">
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date range" />
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
