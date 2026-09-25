import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, parseDate } from "@pisagor/react";
import { useState } from "react";
import { DatePicker } from "..";
export function CustomFormat() {
  const [value, setValue] = useState([parseDate("2025-01-15")]);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date((value[0] ?? parseDate("2025-01-15")).toString()));

  return (
    <DatePicker onValueChange={(value) => setValue(value ?? [])} value={value}>
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          {formattedDate}
        </Button>
      </DatePicker.Trigger>
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
