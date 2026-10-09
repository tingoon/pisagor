<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerNextTriggerProps,
} from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useCalendar } from "./calendar.context";

let {
  class: className,
  children,
  ...rest
}: DatePickerNextTriggerProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.NextTrigger
  {...rest}
  aria-label="Next month"
  class={cn(
    buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
    slots.nextTrigger(),
    className,
  )}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretRightIcon aria-hidden="true" class={slots.nextIcon()} />
  {/if}
</CalendarPrimitive.NextTrigger>
