<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerRootProps,
} from "@ark-ui/svelte/date-picker";
import type { CalendarProps as BaseCalendarProps } from "@pisagor/props";
import { calendarRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { Context } from "./calendar.context";

type FormControlVariant = "primary" | "secondary";

type Props = DatePickerRootProps & {
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
Context.set({
  get slots() {
    return slots;
  },
});
</script>

<CalendarPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  inline
>
  {@render children?.()}
</CalendarPrimitive.Root>
