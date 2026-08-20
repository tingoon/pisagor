import {
  parseDate as arkParseDate,
  DatePicker as CalendarPrimitive,
} from "@ark-ui/react/date-picker";
import { CaretDownIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import {
  calendarControlVariants,
  calendarInline2Variants,
  calendarInline3Variants,
  calendarInline4Variants,
  calendarInlineVariants,
  calendarLabelVariants,
  calendarRangeTextVariants,
  calendarSelectLayoutVariants,
  calendarSelectWrapperVariants,
  calendarTableCellVariants,
  calendarTableHeaderVariants,
  calendarTableRowVariants,
  calendarTableVariants,
  calendarVariants,
  calendarViewControlVariants,
  calendarViewVariants,
} from "@pisagor/styles/ui/calendar";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";

// #region Types
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
// #endregion

// #region Parts
function useCalendarSelectShell(className?: string) {
  const resolved = useFormControlVariant();
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return {
    className: cn(
      formControlShellVariants({ size: "md", ...shellArgs }),
      calendarSelectLayoutVariants(),
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

export type CalendarRootProps = ComponentProps<typeof CalendarPrimitive.Root> & WithTestId;

export interface CalendarProps extends CalendarRootProps {
  /** Visual shell variant for embedded selects. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

export function CalendarRoot({
  lazyMount = true,
  unmountOnExit = true,
  className,
  testId,
  variant,
  ...rest
}: CalendarProps) {
  return (
    <FormControlVariantProvider value={variant}>
      <CalendarPrimitive.Root
        {...rest}
        className={calendarVariants({ className })}
        data-testid={testId}
        inline
        lazyMount={lazyMount}
        unmountOnExit={unmountOnExit}
      />
    </FormControlVariantProvider>
  );
}

export function CalendarControl(props: CalendarControlProps) {
  return <CalendarPrimitive.Control className={calendarControlVariants()} {...props} />;
}

export function CalendarLabel(props: CalendarLabelProps) {
  return <CalendarPrimitive.Label className={calendarLabelVariants()} {...props} />;
}

export function CalendarTrigger(props: CalendarTriggerProps) {
  return <CalendarPrimitive.Trigger {...props} />;
}

export function CalendarPresetTrigger(props: CalendarPresetTriggerProps) {
  return <CalendarPrimitive.PresetTrigger {...props} />;
}

export function CalendarViewDate({ className, ...rest }: CalendarViewDateProps) {
  return (
    <CalendarPrimitive.RangeText {...rest} className={calendarRangeTextVariants({ className })} />
  );
}

export function CalendarTodayTrigger({ variant = "outline", size = "lg", ...rest }: ButtonProps) {
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
  const { className: selectClassName, controlProps } = useCalendarSelectShell(className);
  const recipe = calendarSelectWrapperVariants();

  return (
    <div className={recipe.base()} data-part="year-select-wrapper" data-scope="calendar">
      <CalendarPrimitive.YearSelect {...rest} {...controlProps} className={selectClassName} />
      <CaretDownIcon className={recipe.icon()} data-part="year-select-icon" data-scope="calendar" />
    </div>
  );
}

export function CalendarMonthSelect({ className, ...rest }: CalendarMonthSelectProps) {
  const { className: selectClassName, controlProps } = useCalendarSelectShell(className);
  const recipe = calendarSelectWrapperVariants();

  return (
    <div className={recipe.base()} data-part="month-select-wrapper" data-scope="calendar">
      <CalendarPrimitive.MonthSelect {...rest} {...controlProps} className={selectClassName} />
      <CaretDownIcon
        className={recipe.icon()}
        data-part="month-select-icon"
        data-scope="calendar"
      />
    </div>
  );
}

export function CalendarView({ className, ...rest }: CalendarViewProps) {
  return <CalendarPrimitive.View {...rest} className={calendarViewVariants({ className })} />;
}

export function CalendarContext(props: CalendarContextProps) {
  return <CalendarPrimitive.Context {...props} />;
}

export function CalendarViewControl({ className, ...rest }: CalendarViewControlProps) {
  return (
    <CalendarPrimitive.ViewControl
      {...rest}
      className={calendarViewControlVariants({ className })}
    />
  );
}

export function CalendarPrevTrigger(props: CalendarPrevTriggerProps) {
  return (
    <CalendarPrimitive.PrevTrigger asChild {...props}>
      <Button
        aria-label="Previous month"
        className={calendarInlineVariants()}
        size="icon-md"
        variant="ghost"
      >
        <CaretLeftIcon aria-hidden className={calendarInline2Variants()} />
      </Button>
    </CalendarPrimitive.PrevTrigger>
  );
}

export function CalendarNextTrigger(props: CalendarNextTriggerProps) {
  return (
    <CalendarPrimitive.NextTrigger asChild {...props}>
      <Button
        aria-label="Next month"
        className={calendarInline3Variants()}
        size="icon-md"
        variant="ghost"
      >
        <CaretRightIcon aria-hidden className={calendarInline4Variants()} />
      </Button>
    </CalendarPrimitive.NextTrigger>
  );
}

export function CalendarTable({ className, ...rest }: CalendarTableProps) {
  return <CalendarPrimitive.Table {...rest} className={calendarTableVariants({ className })} />;
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
  months = 1,
  tabIndex,
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
  return (
    <CalendarPrimitive.TableRow {...rest} className={calendarTableRowVariants({ className })} />
  );
}

export function CalendarTableHeader({ className, ...rest }: CalendarTableHeaderProps) {
  return (
    <CalendarPrimitive.TableHeader
      {...rest}
      className={calendarTableHeaderVariants({ className })}
    />
  );
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
  const recipe = calendarTableCellVariants();

  return (
    <CalendarPrimitive.TableCell
      className={recipe.base()}
      value={value}
      visibleRange={visibleRange}
    >
      <CalendarPrimitive.TableCellTrigger {...rest} className={recipe.trigger({ className })} />
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
