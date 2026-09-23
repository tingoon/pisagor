import { Calendar } from "@pisagor/react";
import { DatePicker } from "..";
export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <DatePicker variant="primary">
        <DatePicker.Input placeholder="Primary" />
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
      <DatePicker variant="secondary">
        <DatePicker.Input placeholder="Secondary" />
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
    </div>
  );
}
