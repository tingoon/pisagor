<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Calendar, DatePicker, parseDate } from "@pisagor/svelte";
  import { CalendarIcon, CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
</script>

<DatePicker.Root focusedValue={parseDate(new Date())} selectionMode="range">
  <DatePicker.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">
        <CalendarIcon />
        <DatePicker.ValueText placeholder="Pick a date range" />
      </Button>
    {/snippet}
  </DatePicker.Trigger>
  <Portal>
    <DatePicker.Positioner>
      <DatePicker.Content>
        <Calendar.ViewControl>
          <Calendar.PrevTrigger>
            {#snippet asChild(props)}
              <Button {...props()} size="icon-md" variant="ghost">
                <CaretLeftIcon aria-hidden="true" class="rtl:rotate-180" />
              </Button>
            {/snippet}
          </Calendar.PrevTrigger>
          <Calendar.MonthSelect />
          <Calendar.YearSelect />
          <Calendar.NextTrigger>
            {#snippet asChild(props)}
              <Button {...props()} size="icon-md" variant="ghost">
                <CaretRightIcon aria-hidden="true" class="rtl:rotate-180" />
              </Button>
            {/snippet}
          </Calendar.NextTrigger>
        </Calendar.ViewControl>
        <Calendar.Table>
          <Calendar.WeekDays />
          <Calendar.TableDays />
        </Calendar.Table>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>
