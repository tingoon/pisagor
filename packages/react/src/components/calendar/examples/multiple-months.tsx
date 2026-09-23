import { Card, parseDate } from "@pisagor/react";
import { useState } from "react";
import { Calendar } from "..";
export function MultipleMonths() {
  const [value, setValue] = useState([parseDate(new Date(Date.now()))]);

  return (
    <Card className="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar
          numOfMonths={2}
          onValueChange={({ value }) => setValue(value)}
          selectionMode="range"
          value={value}
        >
          <Calendar.ViewControl>
            <Calendar.PrevTrigger />
            <Calendar.ViewDate />
            <Calendar.NextTrigger />
          </Calendar.ViewControl>
          <div className="flex gap-2">
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
