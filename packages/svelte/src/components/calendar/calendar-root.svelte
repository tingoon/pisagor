<script lang="ts">
import type { DatePickerRootProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import type { CalendarProps as BaseCalendarProps } from "@pisagor/props";
import { calendarRecipe } from "@pisagor/recipes";
import { setCalendarSlotsContext } from "./calendar.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<DatePickerRootProps, "class"> & {
  class?: string | undefined;
  variant?: FormControlVariant;
} & BaseCalendarProps;

let {
  variant: _variant,
  recipe = calendarRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setCalendarSlotsContext({
  get slots() {
    return slots;
  },
});
</script>

<CalendarPrimitive.Root
  {...rest}
  class={slots.base({ class: className })}
  inline
>
  {@render children?.()}
</CalendarPrimitive.Root>
