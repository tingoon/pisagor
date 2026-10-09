import {
  parseDate as arkParseDate,
  DatePicker as DatePickerPrimitive,
  type UseDatePickerContext,
} from "@ark-ui/vue/date-picker";
import { PhCaretDown, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import type { CalendarProps as BaseCalendarProps } from "@pisagor/props";
import {
  calendarRecipe,
  calendarTableCellRecipe,
  formControlShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  type UnwrapRef,
} from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button, type ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Slot recipe context
const { provideStyles: provideCalendarStyles, useStyles: useCalendar } =
  createSlotRecipeContext({
    name: "Calendar",
    recipe: calendarRecipe,
  });
// #endregion

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

export interface CalendarProps extends BaseCalendarProps {
  class?: unknown;
  /** Visual shell variant for embedded selects. Defaults to `primary`. */
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
function getCalendarSelectShell(
  className: ClassValue | undefined,
  selectSlot: () => string,
  surfaceVariant: ReturnType<typeof useFormControlSurface>,
) {
  const resolved = { surfaceVariant, variant: "primary" as FormControlVariant };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return {
    className: cn(
      formControlShellRecipe({ size: "md", ...shellArgs }),
      selectSlot(),
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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    lazyMount: { default: true, type: Boolean },
    recipe: {
      default: calendarRecipe,
      type: Function as PropType<typeof calendarRecipe>,
    },
    unmountOnExit: { default: true, type: Boolean },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideCalendarStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () =>
      h(
        DatePickerPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(recipeSlots.value.base(), props.class),
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
  setup(_props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.Control as ArkPart,
        { ...attrs, class: styles.slots.control() },
        slots,
      );
  },
});

export const CalendarLabel = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Label",
  setup(_props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.Label as ArkPart,
        { ...attrs, class: styles.slots.label() },
        slots,
      );
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
    return () =>
      h(DatePickerPrimitive.PresetTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarViewDate = defineComponent({
  inheritAttrs: false,
  name: "Calendar.ViewDate",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useCalendar();

    return () =>
      h(DatePickerPrimitive.RangeText as ArkPart, {
        ...attrs,
        class: cn(styles.slots.rangeText(), props.class),
      });
  },
});

export const CalendarTodayTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TodayTrigger",
  props: {
    size: { default: "lg", type: String as PropType<ButtonProps["size"]> },
    variant: {
      default: "outline",
      type: String as PropType<ButtonProps["variant"]>,
    },
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
    return () =>
      h(DatePickerPrimitive.ClearTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarYearSelect = defineComponent({
  inheritAttrs: false,
  name: "Calendar.YearSelect",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useCalendar();

    const surfaceVariant = useFormControlSurface();

    return () => {
      const { className: selectClassName, controlProps } =
        getCalendarSelectShell(
          props.class,
          styles.slots.select,
          surfaceVariant,
        );
      const slots = styles.slots;

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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const styles = useCalendar();

    const surfaceVariant = useFormControlSurface();

    return () => {
      const { className: selectClassName, controlProps } =
        getCalendarSelectShell(
          props.class,
          styles.slots.select,
          surfaceVariant,
        );
      const slots = styles.slots;

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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.View as ArkPart,
        { ...attrs, class: cn(styles.slots.view(), props.class) },
        slots,
      );
  },
});

export const CalendarContext = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Context",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        DatePickerPrimitive.Context as ArkPart,
        { ...attrs },
        { default: slots.default },
      );
  },
});

export const CalendarViewControl = defineComponent({
  inheritAttrs: false,
  name: "Calendar.ViewControl",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.ViewControl as ArkPart,
        {
          ...attrs,
          class: cn(styles.slots.viewControl(), props.class),
        },
        slots,
      );
  },
});

export const CalendarPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.PrevTrigger",
  setup(_props, { attrs }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.PrevTrigger as ArkPart,
        { ...attrs, asChild: true },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Previous month",
              class: styles.slots.prevTrigger(),
              size: "icon-md",
              variant: "ghost",
            },
            () =>
              h(PhCaretLeft, {
                "aria-hidden": true,
                class: styles.slots.prevIcon(),
              }),
          ),
      );
  },
});

export const CalendarNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "Calendar.NextTrigger",
  setup(_props, { attrs }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.NextTrigger as ArkPart,
        { ...attrs, asChild: true },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Next month",
              class: styles.slots.nextTrigger(),
              size: "icon-md",
              variant: "ghost",
            },
            () =>
              h(PhCaretRight, {
                "aria-hidden": true,
                class: styles.slots.nextIcon(),
              }),
          ),
      );
  },
});

export const CalendarTable = defineComponent({
  inheritAttrs: false,
  name: "Calendar.Table",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.Table as ArkPart,
        {
          ...attrs,
          class: cn(styles.slots.table(), props.class),
        },
        slots,
      );
  },
});

export const CalendarWeekDays = defineComponent({
  inheritAttrs: false,
  name: "Calendar.WeekDays",
  props: {
    format: {
      default: "narrow",
      type: String as PropType<CalendarWeekDaysProps["format"]>,
    },
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
                    {
                      key: day.day,
                      tabIndex: props.tabIndex ?? undefined,
                      value: day,
                    },
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
    months: {
      default: 1,
      type: Number as PropType<CalendarTableNextMonthProps["months"]>,
    },
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
    return () =>
      h(DatePickerPrimitive.TableHead as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarTableRow = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableRow",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.TableRow as ArkPart,
        {
          ...attrs,
          class: cn(styles.slots.tableRow(), props.class),
        },
        slots,
      );
  },
});

export const CalendarTableHeader = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableHeader",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useCalendar();

    return () =>
      h(
        DatePickerPrimitive.TableHeader as ArkPart,
        {
          ...attrs,
          class: cn(styles.slots.tableHeader(), props.class),
        },
        slots,
      );
  },
});

export const CalendarTableBody = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableBody",
  setup(_, { attrs, slots }) {
    return () =>
      h(DatePickerPrimitive.TableBody as ArkPart, { ...attrs }, slots);
  },
});

export const CalendarTableCell = defineComponent({
  inheritAttrs: false,
  name: "Calendar.TableCell",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    value: { required: true, type: null as unknown as PropType<CalendarDay> },
    visibleRange: {
      default: undefined,
      type: null as unknown as PropType<
        CalendarApi["visibleRange"] | undefined
      >,
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
              class: slots.trigger({
                class: props.class as string | undefined,
              }),
            },
            children.default,
          ),
      );
    };
  },
});
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
