/** @jsxImportSource solid-js */

import { Card, parseDate } from "@pisagor/solid";
import { Calendar } from "@pisagor/solid/calendar";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal([parseDate(new Date(Date.now()))]);

  return (
    <div class="flex flex-col gap-2">
      <Card class="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar
            onValueChange={({ value }) => setValue(value)}
            value={value()}
          >
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
          </Calendar>
        </Card.Content>
      </Card>
      <p class="text-center text-muted-foreground text-sm">
        {value().map((date) => date.toString())}
      </p>
    </div>
  );
}
