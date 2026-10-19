import {
  DatePicker as CalendarPrimitive,
  parseDate as arkParseDate,
} from "@ark-ui/react";
import type {
  DatePickerClearTriggerProps,
  DatePickerContextProps,
  DatePickerControlProps,
  DatePickerLabelProps,
  DatePickerMonthSelectProps,
  DatePickerNextTriggerProps,
  DatePickerPresetTriggerProps,
  DatePickerPrevTriggerProps,
  DatePickerRangeTextProps,
  DatePickerRootProps,
  DatePickerTableBodyProps,
  DatePickerTableCellProps,
  DatePickerTableHeadProps,
  DatePickerTableHeaderProps,
  DatePickerTableProps,
  DatePickerTableRowProps,
  DatePickerTriggerProps,
  DatePickerViewControlProps,
  DatePickerViewProps,
  DatePickerYearSelectProps,
} from "@ark-ui/react";
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import type {
  CalendarRootContract,
  CalendarTableCellRootContract,
} from "@pisagor/contracts";
import {
  calendarRecipe,
  calendarTableCellRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: CalendarSlotsContext, useStyles } = createSlotRecipeContext({
  name: "Calendar",
  recipe: calendarRecipe,
});

export { CalendarSlotsContext };

// #endregion

// #region Types

export type CalendarControlProps = DatePickerControlProps;

export type CalendarLabelProps = DatePickerLabelProps;

export type CalendarTriggerProps = DatePickerTriggerProps;

export type CalendarPresetTriggerProps = DatePickerPresetTriggerProps;

export type CalendarViewDateProps = DatePickerRangeTextProps;

export type CalendarClearTriggerProps = DatePickerClearTriggerProps;

export type CalendarYearSelectProps = DatePickerYearSelectProps;

export type CalendarMonthSelectProps = DatePickerMonthSelectProps;

export type CalendarViewProps = DatePickerViewProps;

export type CalendarContextProps = DatePickerContextProps;

export type CalendarViewControlProps = DatePickerViewControlProps;

export type CalendarPrevTriggerProps = DatePickerPrevTriggerProps;

export type CalendarNextTriggerProps = DatePickerNextTriggerProps;

export type CalendarTableProps = DatePickerTableProps;

export type CalendarTableHeadProps = DatePickerTableHeadProps;

export type CalendarTableRowProps = DatePickerTableRowProps;

export type CalendarTableHeaderProps = DatePickerTableHeaderProps;

export type CalendarTableCellProps = DatePickerTableCellProps &
  CalendarTableCellRootContract;

export interface CalendarWeekDaysProps extends CalendarTableHeadProps {
  /**
   * The format of the week days
   *
   * @defaultValue "narrow"
   */
  format?: "narrow" | "short" | "long";
}

export type CalendarTableBodyProps = DatePickerTableBodyProps;

export interface CalendarTableNextMonthProps extends CalendarTableBodyProps {
  /**
   * The number of months to offset
   *
   * @defaultValue 1
   */
  months?: number;
}

export type CalendarRootProps = DatePickerRootProps;

export interface CalendarProps extends CalendarRootProps, CalendarRootContract {
  /** Visual shell variant for embedded selects. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
function useCalendarSelectShell(className?: string) {
  const { slots, variants } = useStyles();
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant:
      (variants as { variant?: FormControlVariant }).variant ??
      ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return {
    className: cn(
      formControlShellRecipe({ size: "md", ...shellArgs }),
      slots.select(),
      className,
    ),
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

export function CalendarRoot({
  variant,
  children,
  recipe = calendarRecipe,
  className,
  ...rest
}: CalendarProps) {
  const slots = recipe();

  return (
    <CalendarSlotsContext value={{ slots, variants: { variant } as never }}>
      <CalendarPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        inline
      >
        {children}
      </CalendarPrimitive.Root>
    </CalendarSlotsContext>
  );
}

export function CalendarControl({ className, ...rest }: CalendarControlProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.Control
      {...rest}
      className={slots.control({ className })}
    />
  );
}

export function CalendarLabel({ className, ...rest }: CalendarLabelProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.Label {...rest} className={slots.label({ className })} />
  );
}

export function CalendarTrigger(props: CalendarTriggerProps) {
  return <CalendarPrimitive.Trigger {...props} />;
}

export function CalendarPresetTrigger(props: CalendarPresetTriggerProps) {
  return <CalendarPrimitive.PresetTrigger {...props} />;
}

export function CalendarViewDate({
  className,
  ...rest
}: CalendarViewDateProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.RangeText
      {...rest}
      className={slots.rangeText({ className })}
    />
  );
}

export function CalendarTodayTrigger({
  size = "lg",
  variant = "outline",
  ...rest
}: ButtonProps) {
  const { m } = useLocale();

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
          {m("calendar.today")}
        </Button>
      )}
    </CalendarContext>
  );
}

export function CalendarClearTrigger(props: CalendarClearTriggerProps) {
  return <CalendarPrimitive.ClearTrigger {...props} />;
}

export function CalendarYearSelect({
  className,
  ...rest
}: CalendarYearSelectProps) {
  const { slots } = useStyles();
  const { className: selectClassName, controlProps } =
    useCalendarSelectShell(className);

  return (
    <div
      className={slots.selectWrapper()}
      data-part="year-select-wrapper"
      data-scope="calendar"
    >
      <CalendarPrimitive.YearSelect
        {...rest}
        {...controlProps}
        className={selectClassName}
      />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="year-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarMonthSelect({
  className,
  ...rest
}: CalendarMonthSelectProps) {
  const { slots } = useStyles();
  const { className: selectClassName, controlProps } =
    useCalendarSelectShell(className);

  return (
    <div
      className={slots.selectWrapper()}
      data-part="month-select-wrapper"
      data-scope="calendar"
    >
      <CalendarPrimitive.MonthSelect
        {...rest}
        {...controlProps}
        className={selectClassName}
      />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarView({ className, ...rest }: CalendarViewProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.View {...rest} className={slots.view({ className })} />
  );
}

export function CalendarContext(props: CalendarContextProps) {
  return <CalendarPrimitive.Context {...props} />;
}

export function CalendarViewControl({
  className,
  ...rest
}: CalendarViewControlProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.ViewControl
      {...rest}
      className={slots.viewControl({ className })}
    />
  );
}

export function CalendarPrevTrigger(props: CalendarPrevTriggerProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.PrevTrigger {...props} asChild>
      <Button
        aria-label={m("calendar.previousMonth")}
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
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.NextTrigger {...props} asChild>
      <Button
        aria-label={m("calendar.nextMonth")}
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
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.Table {...rest} className={slots.table({ className })} />
  );
}

export function CalendarWeekDays({
  format = "narrow",
  ...rest
}: CalendarWeekDaysProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead {...rest}>
          <CalendarTableRow>
            {calendar.weekDays.map((weekDay) => (
              <CalendarTableHeader key={weekDay.short}>
                {weekDay[format]}
              </CalendarTableHeader>
            ))}
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  );
}

export function CalendarTableDays({
  tabIndex,
  ...rest
}: CalendarTableBodyProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...rest}>
          {calendar.weeks.map((week) => (
            <CalendarTableRow key={getWeekRowKey(week)}>
              {week.map((day) => (
                <CalendarTableCell
                  key={day.day}
                  tabIndex={tabIndex ?? undefined}
                  value={day}
                >
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

export function CalendarTableRow({
  className,
  ...rest
}: CalendarTableRowProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.TableRow
      {...rest}
      className={slots.tableRow({ className })}
    />
  );
}

export function CalendarTableHeader({
  className,
  ...rest
}: CalendarTableHeaderProps) {
  const { slots } = useStyles();

  return (
    <CalendarPrimitive.TableHeader
      {...rest}
      className={slots.tableHeader({ className })}
    />
  );
}

export function CalendarTableBody(props: CalendarTableBodyProps) {
  return <CalendarPrimitive.TableBody {...props} />;
}

export function CalendarTableCell({
  value,
  visibleRange,
  recipe = calendarTableCellRecipe,
  className,
  ...rest
}: CalendarTableCellProps) {
  const slots = recipe();

  return (
    <CalendarPrimitive.TableCell
      className={slots.base({ className })}
      value={value}
      visibleRange={visibleRange}
    >
      <CalendarPrimitive.TableCellTrigger
        {...rest}
        className={slots.trigger()}
      />
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

export const Calendar = Object.assign(CalendarRoot, {
  ClearTrigger: CalendarClearTrigger,
  Context: CalendarContext,
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
