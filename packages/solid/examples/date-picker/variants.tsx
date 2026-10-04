/** @jsxImportSource solid-js */
import { Calendar } from "@pisagor/solid";
import { DatePicker } from "@pisagor/solid/date-picker";
export function Variants() {
  return (
    <div class="flex flex-col gap-2">
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
