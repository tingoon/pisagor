import {
  parseDate as arkParseDate,
  DatePicker as CalendarPrimitive,
} from "@ark-ui/react/date-picker";
import { CaretDownIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { calendarRecipe, calendarTableCellRecipe } from "@pisagor/recipes/calendar";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import type { ComponentProps } from "react";
import { cn } from "../../internal/utils";
import { Button, type ButtonProps } from "../button";
import { CalendarSlotsContext, useCalendar } from "./calendar.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

export type CalendarControlProps = ComponentProps<typeof CalendarPrimitive.Control>;

export type CalendarLabelProps = ComponentProps<typeof CalendarPrimitive.Label>;

export type CalendarTriggerProps = ComponentProps<typeof CalendarPrimitive.Trigger>;

export type CalendarPresetTriggerProps = ComponentProps<typeof CalendarPrimitive.PresetTrigger>;

export type CalendarViewDateProps = ComponentProps<typeof CalendarPrimitive.RangeText>;

export type CalendarClearTriggerProps = ComponentProps<typeof CalendarPrimitive.ClearTrigger>;

export type CalendarYearSelectProps = ComponentProps<typeof CalendarPrimitive.YearSelect>;

export type CalendarMonthSelectProps = ComponentProps<typeof CalendarPrimitive.MonthSelect>;

export type CalendarViewProps = ComponentProps<typeof CalendarPrimitive.View>;

export type CalendarContextProps = ComponentProps<typeof CalendarPrimitive.Context>;

export type CalendarViewControlProps = ComponentProps<typeof CalendarPrimitive.ViewControl>;

export type CalendarPrevTriggerProps = ComponentProps<typeof CalendarPrimitive.PrevTrigger>;

export type CalendarNextTriggerProps = ComponentProps<typeof CalendarPrimitive.NextTrigger>;

export type CalendarTableProps = ComponentProps<typeof CalendarPrimitive.Table>;

export type CalendarTableHeadProps = ComponentProps<typeof CalendarPrimitive.TableHead>;

export type CalendarTableRowProps = ComponentProps<typeof CalendarPrimitive.TableRow>;

export type CalendarTableHeaderProps = ComponentProps<typeof CalendarPrimitive.TableHeader>;

export type CalendarTableCellProps = ComponentProps<typeof CalendarPrimitive.TableCell>;

export interface CalendarWeekDaysProps extends CalendarTableHeadProps {
  /**
   * The format of the week days
   *
   * @defaultValue 'narrow'
   */
  format?: "narrow" | "short" | "long";
}

export type CalendarTableBodyProps = ComponentProps<typeof CalendarPrimitive.TableBody>;

export interface CalendarTableNextMonthProps extends CalendarTableBodyProps {
  /**
   * The number of months to offset
   *
   * @defaultValue 1
   */
  months?: number;
}

export type CalendarRootProps = ComponentProps<typeof CalendarPrimitive.Root>;

export interface CalendarProps extends CalendarRootProps {
  /** Visual shell variant for embedded selects. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
function useCalendarSelectShell(className?: string) {
  const { slots } = useCalendar();
  const resolved = { surfaceVariant: undefined, variant: "primary" as FormControlVariant };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return {
    className: cn(formControlShellRecipe({ size: "md", ...shellArgs }), slots.select(), className),
    controlProps,
  };
}

export const parseDate = arkParseDate;

const getWeekRowKey = (
  week: Array<{
    year: number;

    month: number;

    day: number;
  }>,
) => week.map((day) => `${day.year}-${day.month}-${day.day}`).join("/");

export function CalendarRoot({ variant, children, className, ...rest }: CalendarProps) {
  const slots = calendarRecipe();

  return (
    <CalendarSlotsContext value={{ slots }}>
      <CalendarPrimitive.Root {...rest} className={slots.base({ className })} inline>
        {children}
      </CalendarPrimitive.Root>
    </CalendarSlotsContext>
  );
}

export function CalendarControl({ className, ...rest }: CalendarControlProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.Control {...rest} className={slots.control({ className })} />;
}

export function CalendarLabel({ className, ...rest }: CalendarLabelProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.Label {...rest} className={slots.label({ className })} />;
}

export function CalendarTrigger(props: CalendarTriggerProps) {
  return <CalendarPrimitive.Trigger {...props} />;
}

export function CalendarPresetTrigger(props: CalendarPresetTriggerProps) {
  return <CalendarPrimitive.PresetTrigger {...props} />;
}

export function CalendarViewDate({ className, ...rest }: CalendarViewDateProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.RangeText {...rest} className={slots.rangeText({ className })} />;
}

export function CalendarTodayTrigger({ size = "lg", variant = "outline", ...rest }: ButtonProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <Button
          {...rest}
          data-part="today-trigger"
          data-scope="calendar"
          onClick={() => calendar.selectToday()}
          size={size}
          variant={variant}
        >
          Today
        </Button>
      )}
    </CalendarContext>
  );
}

export function CalendarClearTrigger(props: CalendarClearTriggerProps) {
  return <CalendarPrimitive.ClearTrigger {...props} />;
}

export function CalendarYearSelect({ className, ...rest }: CalendarYearSelectProps) {
  const { slots } = useCalendar();
  const { className: selectClassName, controlProps } = useCalendarSelectShell(className);

  return (
    <div className={slots.selectWrapper()} data-part="year-select-wrapper" data-scope="calendar">
      <CalendarPrimitive.YearSelect {...rest} {...controlProps} className={selectClassName} />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="year-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarMonthSelect({ className, ...rest }: CalendarMonthSelectProps) {
  const { slots } = useCalendar();
  const { className: selectClassName, controlProps } = useCalendarSelectShell(className);

  return (
    <div className={slots.selectWrapper()} data-part="month-select-wrapper" data-scope="calendar">
      <CalendarPrimitive.MonthSelect {...rest} {...controlProps} className={selectClassName} />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarView({ className, ...rest }: CalendarViewProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.View {...rest} className={slots.view({ className })} />;
}

export function CalendarContext(props: CalendarContextProps) {
  return <CalendarPrimitive.Context {...props} />;
}

export function CalendarViewControl({ className, ...rest }: CalendarViewControlProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.ViewControl {...rest} className={slots.viewControl({ className })} />;
}

export function CalendarPrevTrigger(props: CalendarPrevTriggerProps) {
  const { slots } = useCalendar();

  return (
    <CalendarPrimitive.PrevTrigger {...props} asChild>
      <Button
        aria-label="Previous month"
        className={slots.prevTrigger()}
        size="icon-md"
        variant="ghost"
      >
        <CaretLeftIcon aria-hidden className={slots.prevIcon()} />
      </Button>
    </CalendarPrimitive.PrevTrigger>
  );
}

export function CalendarNextTrigger(props: CalendarNextTriggerProps) {
  const { slots } = useCalendar();

  return (
    <CalendarPrimitive.NextTrigger {...props} asChild>
      <Button
        aria-label="Next month"
        className={slots.nextTrigger()}
        size="icon-md"
        variant="ghost"
      >
        <CaretRightIcon aria-hidden className={slots.nextIcon()} />
      </Button>
    </CalendarPrimitive.NextTrigger>
  );
}

export function CalendarTable({ className, ...rest }: CalendarTableProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.Table {...rest} className={slots.table({ className })} />;
}

export function CalendarWeekDays({ format = "narrow", ...rest }: CalendarWeekDaysProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead {...rest}>
          <CalendarTableRow>
            {calendar.weekDays.map((weekDay) => (
              <CalendarTableHeader key={weekDay.short}>{weekDay[format]}</CalendarTableHeader>
            ))}
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  );
}

export function CalendarTableDays({ tabIndex, ...rest }: CalendarTableBodyProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...rest}>
          {calendar.weeks.map((week) => (
            <CalendarTableRow key={getWeekRowKey(week)}>
              {week.map((day) => (
                <CalendarTableCell key={day.day} tabIndex={tabIndex ?? undefined} value={day}>
                  {day.day}
                </CalendarTableCell>
              ))}
            </CalendarTableRow>
          ))}
        </CalendarTableBody>
      )}
    </CalendarContext>
  );
}

export function CalendarTableNextMonth({
  tabIndex,
  months = 1,
  ...rest
}: CalendarTableNextMonthProps) {
  return (
    <CalendarContext>
      {(calendar) => {
        const offset = calendar.getOffset({ months });

        return (
          <CalendarTableBody {...rest}>
            {offset.weeks.map((week) => (
              <CalendarTableRow key={getWeekRowKey(week)}>
                {week.map((day) => (
                  <CalendarTableCell
                    key={day.day}
                    tabIndex={tabIndex ?? undefined}
                    value={day}
                    visibleRange={offset.visibleRange}
                  >
                    {day.day}
                  </CalendarTableCell>
                ))}
              </CalendarTableRow>
            ))}
          </CalendarTableBody>
        );
      }}
    </CalendarContext>
  );
}

export function CalendarTableHead(props: CalendarTableHeadProps) {
  return <CalendarPrimitive.TableHead {...props} />;
}

export function CalendarTableRow({ className, ...rest }: CalendarTableRowProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.TableRow {...rest} className={slots.tableRow({ className })} />;
}

export function CalendarTableHeader({ className, ...rest }: CalendarTableHeaderProps) {
  const { slots } = useCalendar();

  return <CalendarPrimitive.TableHeader {...rest} className={slots.tableHeader({ className })} />;
}

export function CalendarTableBody(props: CalendarTableBodyProps) {
  return <CalendarPrimitive.TableBody {...props} />;
}

export function CalendarTableCell({
  value,
  visibleRange,
  className,
  ...rest
}: CalendarTableCellProps) {
  const slots = calendarTableCellRecipe();

  return (
    <CalendarPrimitive.TableCell className={slots.base()} value={value} visibleRange={visibleRange}>
      <CalendarPrimitive.TableCellTrigger {...rest} className={slots.trigger({ className })} />
    </CalendarPrimitive.TableCell>
  );
}
// #endregion

// #region Display Names
CalendarRoot.displayName = "Calendar";
CalendarControl.displayName = "Calendar.Control";
CalendarLabel.displayName = "Calendar.Label";
CalendarTrigger.displayName = "Calendar.Trigger";
CalendarPresetTrigger.displayName = "Calendar.PresetTrigger";
CalendarViewDate.displayName = "Calendar.ViewDate";
CalendarTodayTrigger.displayName = "Calendar.TodayTrigger";
CalendarClearTrigger.displayName = "Calendar.ClearTrigger";
CalendarYearSelect.displayName = "Calendar.YearSelect";
CalendarMonthSelect.displayName = "Calendar.MonthSelect";
CalendarView.displayName = "Calendar.View";
CalendarContext.displayName = "Calendar.Context";
CalendarViewControl.displayName = "Calendar.ViewControl";
CalendarPrevTrigger.displayName = "Calendar.PrevTrigger";
CalendarNextTrigger.displayName = "Calendar.NextTrigger";
CalendarTable.displayName = "Calendar.Table";
CalendarWeekDays.displayName = "Calendar.WeekDays";
CalendarTableDays.displayName = "Calendar.TableDays";
CalendarTableNextMonth.displayName = "Calendar.TableNextMonth";
CalendarTableHead.displayName = "Calendar.TableHead";
CalendarTableRow.displayName = "Calendar.TableRow";
CalendarTableHeader.displayName = "Calendar.TableHeader";
CalendarTableBody.displayName = "Calendar.TableBody";
CalendarTableCell.displayName = "Calendar.TableCell";
// #endregion
