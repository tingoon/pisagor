<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerContentProps as ArkContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { Calendar } from "../calendar";
  import CalendarDefaultView from "../calendar/calendar-default-view.svelte";
  import { useDatePicker } from "./date-picker.context";

  type Props = ArkContentProps & { showCalendar?: boolean };

  let {
    showCalendar = true,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const ctx = useDatePicker();
  const slots = $derived(ctx?.slots);
</script>

{#if slots}
  <Portal>
    <DatePickerPrimitive.Positioner>
      <DatePickerPrimitive.Content
        {...rest}
        class={slots.content({ class: cn(className) })}
      >
        <CalendarDefaultView>
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
        </CalendarDefaultView>
      </DatePickerPrimitive.Content>
    </DatePickerPrimitive.Positioner>
  </Portal>
{/if}
