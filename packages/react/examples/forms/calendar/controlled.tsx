import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Button, Calendar, Card, parseDate } from "@pisagor/react";
import { useState } from "react";

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
              <Calendar.PrevTrigger asChild>
                <Button size="icon-md" variant="ghost">
                  <CaretLeftIcon aria-hidden className="rtl:rotate-180" />
                </Button>
              </Calendar.PrevTrigger>
              <Calendar.MonthSelect />
              <Calendar.YearSelect />
              <Calendar.NextTrigger asChild>
                <Button size="icon-md" variant="ghost">
                  <CaretRightIcon aria-hidden className="rtl:rotate-180" />
                </Button>
              </Calendar.NextTrigger>
            </Calendar.ViewControl>
            <Calendar.Table>
              <Calendar.WeekDays />
              <Calendar.TableDays />
            </Calendar.Table>
          </Calendar>
        </Card.Content>
      </Card>
      <p className="text-muted-foreground text-center text-sm">
        {value.map((date) => date.toString())}
      </p>
    </div>
  );
}
