/** @jsxImportSource solid-js */

import { Calendar, Card, parseDate } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function MultipleMonths() {
  const [value, setValue] = createSignal([parseDate(new Date(Date.now()))]);

  return (
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar
          numOfMonths={2}
          onValueChange={({ value }) => setValue(value)}
          selectionMode="range"
          value={value()}
        >
          <Calendar.ViewControl>
            <Calendar.PrevTrigger />
            <Calendar.ViewDate />
            <Calendar.NextTrigger />
          </Calendar.ViewControl>
          <div class="flex gap-2">
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableNextMonth />
            </Calendar.Table>
          </div>
        </Calendar>
      </Card.Content>
    </Card>
  );
}
