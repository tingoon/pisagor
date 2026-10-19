import {
  DatePicker as CalendarPrimitive,
  parseDate as arkParseDate,
} from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type {
  CalendarRootContract,
  CalendarTableCellRootContract,
} from "@pisagor/contracts";
import { calendarRecipe, calendarTableCellRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { CaretDownIcon, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const {
  Context: CalendarSlotsContext,
  withContext,
  withProvider,
  useStyles,
} = createSlotRecipeContext({
  name: "Calendar",
  recipe: calendarRecipe,
});

export { CalendarSlotsContext };
// #endregion

// #region Types
type CalendarControlProps = DatePickerControlProps;

type CalendarLabelProps = DatePickerLabelProps;

type CalendarTriggerProps = DatePickerTriggerProps;

type CalendarPresetTriggerProps = DatePickerPresetTriggerProps;

type CalendarViewDateProps = DatePickerRangeTextProps;

type CalendarClearTriggerProps = DatePickerClearTriggerProps;

type CalendarYearSelectProps = DatePickerYearSelectProps;

type CalendarMonthSelectProps = DatePickerMonthSelectProps;

type CalendarViewProps = DatePickerViewProps;

type CalendarContextProps = DatePickerContextProps;

type CalendarViewControlProps = DatePickerViewControlProps;

type CalendarPrevTriggerProps = DatePickerPrevTriggerProps;

type CalendarNextTriggerProps = DatePickerNextTriggerProps;

type CalendarTableProps = DatePickerTableProps;

type CalendarTableHeadProps = DatePickerTableHeadProps;

type CalendarTableRowProps = DatePickerTableRowProps;

type CalendarTableHeaderProps = DatePickerTableHeaderProps;

type CalendarTableCellProps = DatePickerTableCellProps &
  CalendarTableCellRootContract;

interface CalendarWeekDaysProps extends CalendarTableHeadProps {
  /**
   * The format of the week days
   *
   * @defaultValue "narrow"
   */
  format?: "narrow" | "short" | "long";
}

type CalendarTableBodyProps = DatePickerTableBodyProps;

interface CalendarTableNextMonthProps extends CalendarTableBodyProps {
  /**
   * The number of months to offset
   *
   * @defaultValue 1
   */
  months?: number;
}

type CalendarRootProps = DatePickerRootProps & CalendarRootContract;

type CalendarProps = CalendarRootProps;
// #endregion

// #region Parts
export const parseDate = arkParseDate;

const RootBase = withProvider<CalendarProps>(CalendarPrimitive.Root, {
  name: "Root",
});

function Root(props: CalendarProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <RootBase {...rest} inline>
      {local.children}
    </RootBase>
  );
}

const Control = withContext<CalendarControlProps>(CalendarPrimitive.Control, {
  name: "Control",
});

const Label = withContext<CalendarLabelProps>(CalendarPrimitive.Label, {
  name: "Label",
});

function Trigger(props: CalendarTriggerProps): JSX.Element {
  return <CalendarPrimitive.Trigger {...props} />;
}

function PresetTrigger(props: CalendarPresetTriggerProps): JSX.Element {
  return <CalendarPrimitive.PresetTrigger {...props} />;
}

const ViewDate = withContext<CalendarViewDateProps>(
  CalendarPrimitive.RangeText,
  {
    name: "ViewDate",
    part: "range-text",
    slot: "rangeText",
  },
);

function TodayTrigger(props: ButtonProps): JSX.Element {
  const { m } = useLocale();
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
          {m("calendar.today")}
        </Button>
      )}
    </CalendarContext>
  );
}

function ClearTrigger(props: CalendarClearTriggerProps): JSX.Element {
  return <CalendarPrimitive.ClearTrigger {...props} />;
}

const MonthSelectBase = withContext<CalendarMonthSelectProps>(
  CalendarPrimitive.MonthSelect,
  {
    name: "MonthSelect",
    part: "select",
    slot: "select",
  },
);

const YearSelectBase = withContext<CalendarYearSelectProps>(
  CalendarPrimitive.YearSelect,
  {
    name: "YearSelect",
    part: "select",
    slot: "select",
  },
);

function YearSelect(props: CalendarYearSelectProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStyles();

  return (
    <div
      class={slots.selectWrapper()}
      data-part="year-select-wrapper"
      data-scope="calendar"
    >
      <YearSelectBase {...rest} class={local.class} />
      <CaretDownIcon
        class={slots.selectIcon()}
        data-part="year-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

function MonthSelect(props: CalendarMonthSelectProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStyles();

  return (
    <div
      class={slots.selectWrapper()}
      data-part="month-select-wrapper"
      data-scope="calendar"
    >
      <MonthSelectBase {...rest} class={local.class} />
      <CaretDownIcon
        class={slots.selectIcon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

const View = withContext<CalendarViewProps>(CalendarPrimitive.View, {
  name: "View",
});

function CalendarContext(props: CalendarContextProps): JSX.Element {
  return <CalendarPrimitive.Context {...props} />;
}

const ViewControl = withContext<CalendarViewControlProps>(
  CalendarPrimitive.ViewControl,
  { name: "ViewControl" },
);

const PrevTriggerBase = withContext<CalendarPrevTriggerProps>(
  CalendarPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

/**
 * Previous trigger with a localized default `aria-label`; pass your button /
 * icon.
 */
function PrevTrigger(props: CalendarPrevTriggerProps): JSX.Element {
  const { m } = useLocale();

  return (
    <PrevTriggerBase aria-label={m("calendar.previousMonth")} {...props} />
  );
}

const NextTriggerBase = withContext<CalendarNextTriggerProps>(
  CalendarPrimitive.NextTrigger,
  { name: "NextTrigger" },
);

/** Next trigger with a localized default `aria-label`; pass your button / icon. */
function NextTrigger(props: CalendarNextTriggerProps): JSX.Element {
  const { m } = useLocale();

  return <NextTriggerBase aria-label={m("calendar.nextMonth")} {...props} />;
}

const Table = withContext<CalendarTableProps>(CalendarPrimitive.Table, {
  name: "Table",
});

function WeekDays(props: CalendarWeekDaysProps): JSX.Element {
  const [local, rest] = splitProps(props, ["format"]);
  const format = () => local.format ?? "narrow";

  return (
    <CalendarContext>
      {(calendar) => (
        <TableHead {...rest}>
          <TableRow>
            <For each={calendar().weekDays}>
              {(weekDay) => <TableHeader>{weekDay[format()]}</TableHeader>}
            </For>
          </TableRow>
        </TableHead>
      )}
    </CalendarContext>
  );
}

function TableDays(props: CalendarTableBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["tabIndex"]);

  return (
    <CalendarContext>
      {(calendar) => (
        <TableBody {...rest}>
          <For each={calendar().weeks}>
            {(week) => (
              <TableRow>
                <For each={week}>
                  {(day) => (
                    <TableCell
                      tabIndex={local.tabIndex ?? undefined}
                      value={day}
                    >
                      {day.day}
                    </TableCell>
                  )}
                </For>
              </TableRow>
            )}
          </For>
        </TableBody>
      )}
    </CalendarContext>
  );
}

function TableNextMonth(props: CalendarTableNextMonthProps): JSX.Element {
  const [local, rest] = splitProps(props, ["tabIndex", "months"]);
  const months = () => local.months ?? 1;

  return (
    <CalendarContext>
      {(calendar) => {
        const offset = () => calendar().getOffset({ months: months() });

        return (
          <TableBody {...rest}>
            <For each={offset().weeks}>
              {(week) => (
                <TableRow>
                  <For each={week}>
                    {(day) => (
                      <TableCell
                        tabIndex={local.tabIndex ?? undefined}
                        value={day}
                        visibleRange={offset().visibleRange}
                      >
                        {day.day}
                      </TableCell>
                    )}
                  </For>
                </TableRow>
              )}
            </For>
          </TableBody>
        );
      }}
    </CalendarContext>
  );
}

function TableHead(props: CalendarTableHeadProps): JSX.Element {
  return <CalendarPrimitive.TableHead {...props} />;
}

const TableRow = withContext<CalendarTableRowProps>(
  CalendarPrimitive.TableRow,
  { name: "TableRow" },
);

const TableHeader = withContext<CalendarTableHeaderProps>(
  CalendarPrimitive.TableHeader,
  { name: "TableHeader" },
);

function TableBody(props: CalendarTableBodyProps): JSX.Element {
  return <CalendarPrimitive.TableBody {...props} />;
}

function TableCell(props: CalendarTableCellProps): JSX.Element {
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
      class={slots().base({ class: local.class })}
      value={local.value}
      visibleRange={local.visibleRange}
    >
      <CalendarPrimitive.TableCellTrigger
        class={slots().trigger()}
        tabIndex={local.tabIndex}
      >
        {local.children}
      </CalendarPrimitive.TableCellTrigger>
    </CalendarPrimitive.TableCell>
  );
}
// #endregion

export const Calendar = Object.assign(Root, {
  ClearTrigger,
  Context: CalendarContext,
  Control,
  Label,
  MonthSelect,
  NextTrigger,
  PresetTrigger,
  PrevTrigger,
  Table,
  TableBody,
  TableCell,
  TableDays,
  TableHead,
  TableHeader,
  TableNextMonth,
  TableRow,
  TodayTrigger,
  Trigger,
  View,
  ViewControl,
  ViewDate,
  WeekDays,
  YearSelect,
});
