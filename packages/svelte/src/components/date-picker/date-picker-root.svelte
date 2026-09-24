<script lang="ts">
import type { DatePickerRootProps as ArkRootProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import { calendarRecipe } from "@pisagor/recipes/calendar";
import { datePickerRecipe } from "@pisagor/recipes/date-picker";
import { setCalendarSlotsContext } from "../calendar/calendar.context";
import { setDatePickerSlotsContext } from "./date-picker.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRootProps, "onValueChange"> & {
  calendarRecipe?: typeof calendarRecipe;
  onValueChange?: (value: ArkRootProps["value"]) => void;
  recipe?: typeof datePickerRecipe;
  variant?: FormControlVariant;
};

let {
  variant: _variant,
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
