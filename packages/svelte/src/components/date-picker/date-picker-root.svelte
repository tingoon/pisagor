<script lang="ts">
import type { DatePickerRootProps as ArkRootProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import type { DatePickerProps as BaseDatePickerProps } from "@pisagor/props";
import { calendarRecipe, datePickerRecipe } from "@pisagor/recipes";
import { setCalendarSlotsContext } from "../calendar/calendar.context";
import { setDatePickerSlotsContext } from "./date-picker.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRootProps, "onValueChange"> &
  {
  calendarRecipe?: typeof calendarRecipe;
  onValueChange?: (value: ArkRootProps["value"]) => void;
  variant?: FormControlVariant;
  } & BaseDatePickerProps;

let {
  variant,
  positioning = { placement: "top" },
  children,
  onValueChange,
  recipe = datePickerRecipe,
  calendarRecipe: calendarRecipeProp = calendarRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const calendarSlots = $derived(calendarRecipeProp());

setDatePickerSlotsContext({
  get slots() {
    return slots;
  },
  get variant() {
    return variant;
  },
});
setCalendarSlotsContext({
  get slots() {
    return calendarSlots;
  },
});

function handleValueChange(details: { value: ArkRootProps["value"] }) {
  onValueChange?.(details.value);
}
</script>

<DatePickerPrimitive.Root
  {...rest}
  inline={false}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {positioning}
>
  {@render children?.()}
</DatePickerPrimitive.Root>
