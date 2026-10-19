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
import { calendarRecipe, calendarTableCellRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal";
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

const getWeekRowKey = (
  week: Array<{
    year: number;

    month: number;

    day: number;
  }>,
) => week.map((day) => `${day.year}-${day.month}-${day.day}`).join("/");

const RootBase = withProvider<CalendarProps>(CalendarPrimitive.Root, {
  name: "Root",
});

function Root({ children, ...rest }: CalendarProps) {
  return (
    <RootBase {...rest} inline>
      {children}
    </RootBase>
  );
}

const Control = withContext<CalendarControlProps>(CalendarPrimitive.Control, {
  name: "Control",
});

const Label = withContext<CalendarLabelProps>(CalendarPrimitive.Label, {
  name: "Label",
});

function Trigger(props: CalendarTriggerProps) {
  return <CalendarPrimitive.Trigger {...props} />;
}

function PresetTrigger(props: CalendarPresetTriggerProps) {
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

function TodayTrigger({
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

function ClearTrigger(props: CalendarClearTriggerProps) {
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

function YearSelect({ className, ...rest }: CalendarYearSelectProps) {
  const { slots } = useStyles();

  return (
    <div
      className={slots.selectWrapper()}
      data-part="year-select-wrapper"
      data-scope="calendar"
    >
      <YearSelectBase {...rest} className={className} />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="year-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

function MonthSelect({ className, ...rest }: CalendarMonthSelectProps) {
  const { slots } = useStyles();

  return (
    <div
      className={slots.selectWrapper()}
      data-part="month-select-wrapper"
      data-scope="calendar"
    >
      <MonthSelectBase {...rest} className={className} />
      <CaretDownIcon
        className={slots.selectIcon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

const View = withContext<CalendarViewProps>(CalendarPrimitive.View, {
  name: "View",
});

function CalendarContext(props: CalendarContextProps) {
  return <CalendarPrimitive.Context {...props} />;
}

const ViewControl = withContext<CalendarViewControlProps>(
  CalendarPrimitive.ViewControl,
  { name: "ViewControl" },
);

function PrevTrigger(props: CalendarPrevTriggerProps) {
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

function NextTrigger(props: CalendarNextTriggerProps) {
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

const Table = withContext<CalendarTableProps>(CalendarPrimitive.Table, {
  name: "Table",
});

function WeekDays({ format = "narrow", ...rest }: CalendarWeekDaysProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <TableHead {...rest}>
          <TableRow>
            {calendar.weekDays.map((weekDay) => (
              <TableHeader key={weekDay.short}>{weekDay[format]}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
      )}
    </CalendarContext>
  );
}

function TableDays({ tabIndex, ...rest }: CalendarTableBodyProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <TableBody {...rest}>
          {calendar.weeks.map((week) => (
            <TableRow key={getWeekRowKey(week)}>
              {week.map((day) => (
                <TableCell
                  key={day.day}
                  tabIndex={tabIndex ?? undefined}
                  value={day}
                >
                  {day.day}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
    </CalendarContext>
  );
}

function TableNextMonth({
  tabIndex,
  months = 1,
  ...rest
}: CalendarTableNextMonthProps) {
  return (
    <CalendarContext>
      {(calendar) => {
        const offset = calendar.getOffset({ months });

        return (
          <TableBody {...rest}>
            {offset.weeks.map((week) => (
              <TableRow key={getWeekRowKey(week)}>
                {week.map((day) => (
                  <TableCell
                    key={day.day}
                    tabIndex={tabIndex ?? undefined}
                    value={day}
                    visibleRange={offset.visibleRange}
                  >
                    {day.day}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        );
      }}
    </CalendarContext>
  );
}

function TableHead(props: CalendarTableHeadProps) {
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

function TableBody(props: CalendarTableBodyProps) {
  return <CalendarPrimitive.TableBody {...props} />;
}

function TableCell({
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
