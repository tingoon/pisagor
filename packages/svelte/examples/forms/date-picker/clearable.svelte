<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import {
    Button,
    Calendar,
    DatePicker,
    Field,
    parseDate,
  } from "@pisagor/svelte";
  import { CalendarIcon, CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";

  let value = $state([parseDate("2025-06-15")]);
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Input variant</Field.Label>
    <DatePicker
      onValueChange={(next) => (value = next ?? [])}
      {value}
      clearable
      placeholder="Select date"
    />
  </Field>
  <Field>
    <Field.Label>Trigger variant</Field.Label>
    <DatePicker.Root onValueChange={(next) => (value = next ?? [])} {value}>
      <DatePicker.Trigger>
        {#snippet asChild(props)}
          <Button {...props()} variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText placeholder="Pick a date" />
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
  </Field>
</div>
