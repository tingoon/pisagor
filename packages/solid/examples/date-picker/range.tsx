/** @jsxImportSource solid-js */

import { Button, Calendar, DatePicker, parseDate } from "@pisagor/solid";
import { CalendarIcon } from "@pisagor/solid/icons";
export function Range() {
  return (
    <DatePicker focusedValue={parseDate(new Date())} selectionMode="range">
      <DatePicker.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText placeholder="Pick a date range" />
          </Button>
        )}
      />
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
    </DatePicker>
  );
}
