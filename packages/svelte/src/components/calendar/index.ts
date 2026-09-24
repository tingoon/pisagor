import { DatePicker as CalendarPrimitive, parseDate } from "@ark-ui/svelte/date-picker";
import { setCalendarSlotsContext, useCalendar } from "./calendar.context";
import CalendarClearTrigger from "./calendar-clear-trigger.svelte";
import CalendarControl from "./calendar-control.svelte";
import CalendarLabel from "./calendar-label.svelte";
import CalendarMonthSelect from "./calendar-month-select.svelte";
import CalendarNextTrigger from "./calendar-next-trigger.svelte";
import CalendarPresetTrigger from "./calendar-preset-trigger.svelte";
import CalendarPrevTrigger from "./calendar-prev-trigger.svelte";
import CalendarRoot from "./calendar-root.svelte";
import CalendarTable from "./calendar-table.svelte";
import CalendarTableBody from "./calendar-table-body.svelte";
import CalendarTableCell from "./calendar-table-cell.svelte";
import CalendarTableDays from "./calendar-table-days.svelte";
import CalendarTableHead from "./calendar-table-head.svelte";
import CalendarTableHeader from "./calendar-table-header.svelte";
import CalendarTableNextMonth from "./calendar-table-next-month.svelte";
import CalendarTableRow from "./calendar-table-row.svelte";
import CalendarTodayTrigger from "./calendar-today-trigger.svelte";
import CalendarTrigger from "./calendar-trigger.svelte";
import CalendarView from "./calendar-view.svelte";
import CalendarViewControl from "./calendar-view-control.svelte";
import CalendarViewDate from "./calendar-view-date.svelte";
import CalendarWeekDays from "./calendar-week-days.svelte";
import CalendarYearSelect from "./calendar-year-select.svelte";

export { parseDate, setCalendarSlotsContext, useCalendar };

export const Calendar = Object.assign(CalendarRoot, {
  ClearTrigger: CalendarClearTrigger,
  Context: CalendarPrimitive.Context,
  Control: CalendarControl,
  Label: CalendarLabel,
  MonthSelect: CalendarMonthSelect,
  NextTrigger: CalendarNextTrigger,
  PresetTrigger: CalendarPresetTrigger,
  PrevTrigger: CalendarPrevTrigger,
  Table: CalendarTable,
  TableBody: CalendarTableBody,
  TableCell: CalendarTableCell,
  TableDays: CalendarTableDays,
  TableHead: CalendarTableHead,
  TableHeader: CalendarTableHeader,
  TableNextMonth: CalendarTableNextMonth,
  TableRow: CalendarTableRow,
  TodayTrigger: CalendarTodayTrigger,
  Trigger: CalendarTrigger,
  View: CalendarView,
  ViewControl: CalendarViewControl,
  ViewDate: CalendarViewDate,
  WeekDays: CalendarWeekDays,
  YearSelect: CalendarYearSelect,
});
