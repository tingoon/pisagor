import { Portal } from "@ark-ui/react";
import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, DatePicker, Field, parseDate } from "@pisagor/react";
import { useState } from "react";

export function Clearable() {
  const [value, setValue] = useState([parseDate("2025-06-15")]);

  return (
    <div className="flex flex-col gap-2">
      <Field>
        <Field.Label>Input variant</Field.Label>
        <DatePicker
          clearable
          onValueChange={(value) => setValue(value ?? [])}
          placeholder="Select date"
          value={value}
        />
      </Field>
      <Field>
        <Field.Label>Trigger variant</Field.Label>
        <DatePicker.Root
          onValueChange={(value) => setValue(value ?? [])}
          value={value}
        >
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
      </Field>
    </div>
  );
}
