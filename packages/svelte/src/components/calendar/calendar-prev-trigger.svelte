<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerPrevTriggerProps,
} from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import { useCalendar } from "./calendar.context";

let {
  class: className,
  children,
  ...rest
}: DatePickerPrevTriggerProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.PrevTrigger
  {...rest}
  aria-label="Previous month"
  class={cn(
    buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
    slots.prevTrigger(),
    className,
  )}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretLeftIcon aria-hidden="true" class={slots.prevIcon()} />
  {/if}
</CalendarPrimitive.PrevTrigger>
