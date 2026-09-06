import {
  parseDate as arkParseDate,
  DatePicker as DatePickerPrimitive,
  type UseDatePickerContext,
} from "@ark-ui/vue/date-picker";
import { PhCaretDown, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { calendarRecipe, calendarTableCellRecipe } from "@pisagor/recipes/calendar";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type UnwrapRef } from "vue";
import { Button, type ButtonProps } from "../button";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];
type ClassValue = Parameters<typeof cn>[0];
type CalendarApi = UnwrapRef<UseDatePickerContext>;
type CalendarDay = CalendarApi["weeks"][number][number];

// #region Types
interface CalendarWeekDaysProps {
  /**
   * The format of the week days
   *
   * @defaultValue 'narrow'
   */
  format?: "narrow" | "short" | "long";
}

interface CalendarTableNextMonthProps {
  /**
   * The number of months to offset
   *
   * @defaultValue 1
   */
  months?: number;
  tabIndex?: number | string;
}

export interface CalendarProps {
  /**
   * Style recipe. Defaults to `calendarRecipe` from `@pisagor/recipes/calendar`.
   *
   * @defaultValue calendarRecipe
   */
  recipe?: typeof calendarRecipe;
  class?: unknown;
  /** Visual shell variant for embedded selects. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
function useCalendarSelectShell(
  className?: ClassValue,
  recipe: NonNullable<CalendarProps["recipe"]> = calendarRecipe,
) {
  const resolved = { surfaceVariant: undefined, variant: "primary" as FormControlVariant };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return {
    className: cn(
      formControlShellRecipe({ size: "md", ...shellArgs }),
      recipe().select(),
      className,
    ),
    controlProps,
  };
}

export const parseDate = arkParseDate;

const getWeekRowKey = (week: CalendarDay[]) =>
  week.map((day) => `${day.year}-${day.month}-${day.day}`).join("/");

export const CalendarRoot = defineComponent({
  inheritAttrs: false,
  name: "CalendarRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    lazyMount: { default: true, type: Boolean },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe().base(), props.class),
          inline: true,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const CalendarControl = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Control",
  props: {
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.Control as ArkPart,
        { ...attrs, class: props.recipe().control() },
        slots,
      );
  },
});

export const CalendarLabel = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Label",
  props: {
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(DatePickerPrimitive.Label as ArkPart, { ...attrs, class: props.recipe().label() }, slots);
  },
});

export const CalendarTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Trigger",
  setup(_, { attrs, slots }) {
    return () => h(DatePickerPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarPresetTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.PresetTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DatePickerPrimitive.PresetTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarViewDate = defineComponent({
  inheritAttrs: false,
  name: "Calendar.ViewDate",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(DatePickerPrimitive.RangeText as ArkPart, {
        ...attrs,
        class: cn(props.recipe().rangeText(), props.class),
      });
  },
});

export const CalendarTodayTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TodayTrigger",
  props: {
    size: { default: "lg", type: String as PropType<ButtonProps["size"]> },
    variant: { default: "outline", type: String as PropType<ButtonProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(CalendarContext, null, {
        default: (calendar: CalendarApi) =>
          h(
            Button as ArkPart,
            {
              ...attrs,
              "data-part": "today-trigger",
              "data-scope": "calendar",
              onClick: () => calendar.selectToday(),
              size: props.size,
              variant: props.variant,
            },
            () => "Today",
          ),
      });
  },
});

export const CalendarClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.ClearTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DatePickerPrimitive.ClearTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarYearSelect = defineComponent({
  inheritAttrs: false,
  name: "Calendar.YearSelect",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const { className: selectClassName, controlProps } = useCalendarSelectShell(
        props.class,
        props.recipe,
      );
      const slots = props.recipe();

      return h(
        "div",
        {
          class: slots.selectWrapper(),
          "data-part": "year-select-wrapper",
          "data-scope": "calendar",
        },
        [
          h(DatePickerPrimitive.YearSelect as ArkPart, {
            ...attrs,
            ...controlProps,
            class: selectClassName,
          }),
          h(PhCaretDown, {
            "aria-hidden": true,
            class: slots.selectIcon(),
            "data-part": "year-select-icon",
            "data-scope": "calendar",
          }),
        ],
      );
    };
  },
});

export const CalendarMonthSelect = defineComponent({
  inheritAttrs: false,
  name: "Calendar.MonthSelect",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const { className: selectClassName, controlProps } = useCalendarSelectShell(
        props.class,
        props.recipe,
      );
      const slots = props.recipe();

      return h(
        "div",
        {
          class: slots.selectWrapper(),
          "data-part": "month-select-wrapper",
          "data-scope": "calendar",
        },
        [
          h(DatePickerPrimitive.MonthSelect as ArkPart, {
            ...attrs,
            ...controlProps,
            class: selectClassName,
          }),
          h(PhCaretDown, {
            "aria-hidden": true,
            class: slots.selectIcon(),
            "data-part": "month-select-icon",
            "data-scope": "calendar",
          }),
        ],
      );
    };
  },
});

export const CalendarView = defineComponent({
  inheritAttrs: false,
  name: "Calendar.View",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.View as ArkPart,
        { ...attrs, class: cn(props.recipe().view(), props.class) },
        slots,
      );
  },
});

export const CalendarContext = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Context",
  setup(_, { attrs, slots }) {
    return () =>
      h(DatePickerPrimitive.Context as ArkPart, { ...attrs }, { default: slots.default });
  },
});

export const CalendarViewControl = defineComponent({
  inheritAttrs: false,
  name: "Calendar.ViewControl",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.ViewControl as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe().viewControl(), props.class),
        },
        slots,
      );
  },
});

export const CalendarPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.PrevTrigger",
  props: {
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(DatePickerPrimitive.PrevTrigger as ArkPart, { ...attrs, asChild: true }, () =>
        h(
          Button as ArkPart,
          {
            "aria-label": "Previous month",
            class: props.recipe().prevTrigger(),
            size: "icon-md",
            variant: "ghost",
          },
          () => h(PhCaretLeft, { "aria-hidden": true, class: props.recipe().prevIcon() }),
        ),
      );
  },
});

export const CalendarNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.NextTrigger",
  props: {
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(DatePickerPrimitive.NextTrigger as ArkPart, { ...attrs, asChild: true }, () =>
        h(
          Button as ArkPart,
          {
            "aria-label": "Next month",
            class: props.recipe().nextTrigger(),
            size: "icon-md",
            variant: "ghost",
          },
          () => h(PhCaretRight, { "aria-hidden": true, class: props.recipe().nextIcon() }),
        ),
      );
  },
});

export const CalendarTable = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Table",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.Table as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe().table(), props.class),
        },
        slots,
      );
  },
});

export const CalendarWeekDays = defineComponent({
  inheritAttrs: false,
  name: "Calendar.WeekDays",
  props: {
    format: { default: "narrow", type: String as PropType<CalendarWeekDaysProps["format"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(CalendarContext, null, {
        default: (calendar: CalendarApi) =>
          h(CalendarTableHead, { ...attrs }, () =>
            h(CalendarTableRow, null, () =>
              calendar.weekDays.map((weekDay) =>
                h(
                  CalendarTableHeader,
                  { key: weekDay.short },
                  () => weekDay[props.format ?? "narrow"],
                ),
              ),
            ),
          ),
      });
  },
});

export const CalendarTableDays = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableDays",
  props: {
    tabIndex: {
      default: undefined,
      type: [Number, String] as PropType<number | string | undefined>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(CalendarContext, null, {
        default: (calendar: CalendarApi) =>
          h(CalendarTableBody, { ...attrs }, () =>
            calendar.weeks.map((week) =>
              h(CalendarTableRow, { key: getWeekRowKey(week) }, () =>
                week.map((day) =>
                  h(
                    CalendarTableCell,
                    { key: day.day, tabIndex: props.tabIndex ?? undefined, value: day },
                    () => day.day,
                  ),
                ),
              ),
            ),
          ),
      });
  },
});

export const CalendarTableNextMonth = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableNextMonth",
  props: {
    months: { default: 1, type: Number as PropType<CalendarTableNextMonthProps["months"]> },
    tabIndex: {
      default: undefined,
      type: [Number, String] as PropType<number | string | undefined>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(CalendarContext, null, {
        default: (calendar: CalendarApi) => {
          const offset = calendar.getOffset({ months: props.months ?? 1 });

          return h(CalendarTableBody, { ...attrs }, () =>
            offset.weeks.map((week) =>
              h(CalendarTableRow, { key: getWeekRowKey(week) }, () =>
                week.map((day) =>
                  h(
                    CalendarTableCell,
                    {
                      key: day.day,
                      tabIndex: props.tabIndex ?? undefined,
                      value: day,
                      visibleRange: offset.visibleRange,
                    },
                    () => day.day,
                  ),
                ),
              ),
            ),
          );
        },
      });
  },
});

export const CalendarTableHead = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableHead",
  setup(_, { attrs, slots }) {
    return () => h(DatePickerPrimitive.TableHead as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarTableRow = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableRow",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.TableRow as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe().tableRow(), props.class),
        },
        slots,
      );
  },
});

export const CalendarTableHeader = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.TableHeader as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe().tableHeader(), props.class),
        },
        slots,
      );
  },
});

export const CalendarTableBody = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableBody",
  setup(_, { attrs, slots }) {
    return () => h(DatePickerPrimitive.TableBody as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarTableCell = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableCell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    value: { required: true, type: null as unknown as PropType<CalendarDay> },
    visibleRange: {
      default: undefined,
      type: null as unknown as PropType<CalendarApi["visibleRange"] | undefined>,
    },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = calendarTableCellRecipe();

      return h(
        DatePickerPrimitive.TableCell as ArkPart,
        {
          class: slots.base(),
          value: props.value,
          visibleRange: props.visibleRange,
        },
        () =>
          h(
            DatePickerPrimitive.TableCellTrigger as ArkPart,
            {
              ...attrs,
              class: slots.trigger({ class: cn(props.class) }),
            },
            children.default,
          ),
      );
    };
  },
});
// #endregion
