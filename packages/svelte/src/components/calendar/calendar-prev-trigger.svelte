<script lang="ts">
import type { DatePickerPrevTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerPrevTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.PrevTrigger
  {...rest}
  aria-label="Previous month"
  class={cn(buttonRecipe({ size: "icon-md", variant: "ghost" }).base(), slots.prevTrigger(), className)}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretLeftIcon aria-hidden="true" class={slots.prevIcon()} />
  {/if}
</CalendarPrimitive.PrevTrigger>
