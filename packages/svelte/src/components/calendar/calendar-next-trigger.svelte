<script lang="ts">
import type { DatePickerNextTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerNextTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.NextTrigger
  {...rest}
  aria-label="Next month"
  class={cn(buttonRecipe({ size: "icon-md", variant: "ghost" }).base(), slots.nextTrigger(), className)}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon aria-hidden="true" class={slots.nextIcon()} />
  {/if}
</CalendarPrimitive.NextTrigger>
