/** @jsxImportSource solid-js */

import { Button, Calendar, parseDate } from "@pisagor/solid";
import { DatePicker } from "@pisagor/solid/date-picker";
import { CalendarIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function CustomFormat() {
  const [value, setValue] = createSignal([parseDate("2025-01-15")]);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date((value()[0] ?? parseDate("2025-01-15")).toString()));

  return (
    <DatePicker
      onValueChange={(value) => setValue(value() ?? [])}
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
