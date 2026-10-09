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
  DatePickerTableHeaderProps,
  DatePickerTableHeadProps,
  DatePickerTableProps,
  DatePickerTableRowProps,
  DatePickerTriggerProps,
  DatePickerViewControlProps,
  DatePickerViewProps,
  DatePickerYearSelectProps,
} from "@ark-ui/solid/date-picker";
import {
  parseDate as arkParseDate,
  DatePicker as CalendarPrimitive,
} from "@ark-ui/solid/date-picker";
import type {
  CalendarProps as BaseCalendarProps,
  CalendarTableCellProps as BaseCalendarTableCellProps,
} from "@pisagor/props";
import {
  calendarRecipe,
  calendarTableCellRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "../internal/icons";
import { Button, type ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: CalendarSlotsContext, useStyles: useCalendar } =
  createSlotRecipeContext({
    name: "Calendar",
    recipe: calendarRecipe,
  });

export { CalendarSlotsContext };

// #endregion

type FormControlVariant = "primary" | "secondary";

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

export interface CalendarTableCellProps
  extends DatePickerTableCellProps,
    BaseCalendarTableCellProps {}

export interface CalendarWeekDaysProps extends CalendarTableHeadProps {
  format?: "narrow" | "short" | "long";
}

export type CalendarTableBodyProps = DatePickerTableBodyProps;

export interface CalendarTableNextMonthProps extends CalendarTableBodyProps {
  months?: number;
}

export type CalendarRootProps = DatePickerRootProps;

export interface CalendarProps extends CalendarRootProps, BaseCalendarProps {
  variant?: FormControlVariant;
}

function useCalendarSelectShell(className?: string) {
  const styles = useCalendar();
  const surfaceVariant = useFormControlSurface();
  const variant = "primary" as FormControlVariant;
  return {
    className: cn(
      formControlShellRecipe({ size: "md", surfaceVariant, variant }),
      styles.slots.select(),
      className,
    ),
    controlProps: { "data-variant": variant },
  };
}

export const parseDate = arkParseDate;

export function CalendarRoot(props: CalendarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "recipe",
    "class",
  ]);
  const slots = createMemo(() => (local.recipe ?? calendarRecipe)());

  return (
    <CalendarSlotsContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <CalendarPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        inline
      >
        {local.children}
      </CalendarPrimitive.Root>
    </CalendarSlotsContext>
  );
}

export function CalendarControl(props: CalendarControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.Control
      {...rest}
      class={styles.slots.control({ class: local.class })}
    />
  );
}

export function CalendarLabel(props: CalendarLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.Label
      {...rest}
      class={styles.slots.label({ class: local.class })}
    />
  );
}

export function CalendarTrigger(props: CalendarTriggerProps): JSX.Element {
  return <CalendarPrimitive.Trigger {...props} />;
}

export function CalendarPresetTrigger(
  props: CalendarPresetTriggerProps,
): JSX.Element {
  return <CalendarPrimitive.PresetTrigger {...props} />;
}

export function CalendarViewDate(props: CalendarViewDateProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.RangeText
      {...rest}
      class={styles.slots.rangeText({ class: local.class })}
    />
  );
}

export function CalendarTodayTrigger(props: ButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant"]);
  return (
    <CalendarContext>
      {(calendar) => (
        <Button
          {...rest}
          data-part="today-trigger"
          data-scope="calendar"
          onClick={() => calendar().selectToday()}
          size={local.size ?? "lg"}
          variant={local.variant ?? "outline"}
        >
          Today
        </Button>
      )}
    </CalendarContext>
  );
}

export function CalendarClearTrigger(
  props: CalendarClearTriggerProps,
): JSX.Element {
  return <CalendarPrimitive.ClearTrigger {...props} />;
}

export function CalendarYearSelect(
  props: CalendarYearSelectProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();
  const shell = useCalendarSelectShell(local.class);

  return (
    <div
      class={styles.slots.selectWrapper()}
      data-part="year-select-wrapper"
      data-scope="calendar"
    >
      <CalendarPrimitive.YearSelect
        {...rest}
        {...shell.controlProps}
        class={shell.className}
      />
      <CaretDownIcon
        class={styles.slots.selectIcon()}
        data-part="year-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarMonthSelect(
  props: CalendarMonthSelectProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();
  const shell = useCalendarSelectShell(local.class);

  return (
    <div
      class={styles.slots.selectWrapper()}
      data-part="month-select-wrapper"
      data-scope="calendar"
    >
      <CalendarPrimitive.MonthSelect
        {...rest}
        {...shell.controlProps}
        class={shell.className}
      />
      <CaretDownIcon
        class={styles.slots.selectIcon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarView(props: CalendarViewProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.View
      {...rest}
      class={styles.slots.view({ class: local.class })}
    />
  );
}

export function CalendarContext(props: CalendarContextProps): JSX.Element {
  return <CalendarPrimitive.Context {...props} />;
}

export function CalendarViewControl(
  props: CalendarViewControlProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.ViewControl
      {...rest}
      class={styles.slots.viewControl({ class: local.class })}
    />
  );
}

export function CalendarPrevTrigger(
  props: CalendarPrevTriggerProps,
): JSX.Element {
  const styles = useCalendar();
  return (
    <CalendarPrimitive.PrevTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: styles.slots.prevTrigger() })}
          aria-label="Previous month"
          size="icon-md"
          variant="ghost"
        >
          <CaretLeftIcon aria-hidden class={styles.slots.prevIcon()} />
        </Button>
      )}
    />
  );
}

export function CalendarNextTrigger(
  props: CalendarNextTriggerProps,
): JSX.Element {
  const styles = useCalendar();
  return (
    <CalendarPrimitive.NextTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: styles.slots.nextTrigger() })}
          aria-label="Next month"
          size="icon-md"
          variant="ghost"
        >
          <CaretRightIcon aria-hidden class={styles.slots.nextIcon()} />
        </Button>
      )}
    />
  );
}

export function CalendarTable(props: CalendarTableProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.Table
      {...rest}
      class={styles.slots.table({ class: local.class })}
    />
  );
}

export function CalendarWeekDays(props: CalendarWeekDaysProps): JSX.Element {
  const [local, rest] = splitProps(props, ["format"]);
  const format = () => local.format ?? "narrow";

  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead {...rest}>
          <CalendarTableRow>
            <For each={calendar().weekDays}>
              {(weekDay) => (
                <CalendarTableHeader>{weekDay[format()]}</CalendarTableHeader>
              )}
            </For>
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  );
}

export function CalendarTableDays(props: CalendarTableBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["tabIndex"]);

  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...rest}>
          <For each={calendar().weeks}>
            {(week) => (
              <CalendarTableRow>
                <For each={week}>
                  {(day) => (
                    <CalendarTableCell
                      tabIndex={local.tabIndex ?? undefined}
                      value={day}
                    >
                      {day.day}
                    </CalendarTableCell>
                  )}
                </For>
              </CalendarTableRow>
            )}
          </For>
        </CalendarTableBody>
      )}
    </CalendarContext>
  );
}

export function CalendarTableNextMonth(
  props: CalendarTableNextMonthProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["tabIndex", "months"]);
  const months = () => local.months ?? 1;

  return (
    <CalendarContext>
      {(calendar) => {
        const offset = () => calendar().getOffset({ months: months() });
        return (
          <CalendarTableBody {...rest}>
            <For each={offset().weeks}>
              {(week) => (
                <CalendarTableRow>
                  <For each={week}>
                    {(day) => (
                      <CalendarTableCell
                        tabIndex={local.tabIndex ?? undefined}
                        value={day}
                        visibleRange={offset().visibleRange}
                      >
                        {day.day}
                      </CalendarTableCell>
                    )}
                  </For>
                </CalendarTableRow>
              )}
            </For>
          </CalendarTableBody>
        );
      }}
    </CalendarContext>
  );
}

export function CalendarTableHead(props: CalendarTableHeadProps): JSX.Element {
  return <CalendarPrimitive.TableHead {...props} />;
}

export function CalendarTableRow(props: CalendarTableRowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.TableRow
      {...rest}
      class={styles.slots.tableRow({ class: local.class })}
    />
  );
}

export function CalendarTableHeader(
  props: CalendarTableHeaderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCalendar();

  return (
    <CalendarPrimitive.TableHeader
      {...rest}
      class={styles.slots.tableHeader({ class: local.class })}
    />
  );
}

export function CalendarTableBody(props: CalendarTableBodyProps): JSX.Element {
  return <CalendarPrimitive.TableBody {...props} />;
}

export function CalendarTableCell(props: CalendarTableCellProps): JSX.Element {
  const [local] = splitProps(props, [
    "value",
    "visibleRange",
    "recipe",
    "class",
    "children",
    "tabIndex",
  ]);
  const slots = () => (local.recipe ?? calendarTableCellRecipe)();

  return (
    <CalendarPrimitive.TableCell
      class={slots().base()}
      value={local.value}
      visibleRange={local.visibleRange}
    >
      <CalendarPrimitive.TableCellTrigger
        class={slots().trigger({ class: local.class })}
        tabIndex={local.tabIndex}
      >
        {local.children}
      </CalendarPrimitive.TableCellTrigger>
    </CalendarPrimitive.TableCell>
  );
}

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
