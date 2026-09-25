import { Card, parseDate } from "@pisagor/react";
import { useState } from "react";
import { Calendar } from "..";
export function Controlled() {
  const [value, setValue] = useState([parseDate(new Date(Date.now()))]);

  return (
    <div className="flex flex-col gap-2">
      <Card className="[--space:--spacing(2)]">
        <Card.Content>
          <Calendar
            onValueChange={({ value }) => setValue(value)}
            value={value}
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
      <p className="text-center text-muted-foreground text-sm">
        {value.map((date) => date.toString())}
      </p>
    </div>
  );
}
