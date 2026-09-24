<script lang="ts">
import type { DatePickerContentProps as ArkContentProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import { Portal } from "@ark-ui/svelte/portal";
import { cn } from "@pisagor/utils";
import { Calendar } from "../calendar";
import { useDatePicker } from "./date-picker.context";

type Props = Omit<ArkContentProps, "class"> & {
  class?: string | undefined;
  showCalendar?: boolean;
};

let { showCalendar = true, children, class: className, ...rest }: Props = $props();
const ctx = useDatePicker();
const slots = $derived(ctx?.slots);
</script>

{#if slots}
  <Portal>
    <DatePickerPrimitive.Positioner>
      <DatePickerPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
        {#if showCalendar && !children}
          <Calendar.ViewControl>
            <Calendar.PrevTrigger />
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger />
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        {:else}
          {@render children?.()}
        {/if}
      </DatePickerPrimitive.Content>
    </DatePickerPrimitive.Positioner>
  </Portal>
{/if}
