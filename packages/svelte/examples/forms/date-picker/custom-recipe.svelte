<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { datePickerRecipe } from "@pisagor/recipes";
  import { Button, Calendar, DatePicker } from "@pisagor/svelte";
  import { CalendarIcon, CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { tv } from "tailwind-variants";

  const brandDatePickerRecipe = tv({
    extend: datePickerRecipe,
    slots: {
      content: "border-emerald-500/40",
      trigger: "text-emerald-600",
    },
    variants: {},
  });
</script>

<DatePicker.Root recipe={brandDatePickerRecipe}>
  <DatePicker.Trigger>
    <Button variant="outline">
      <CalendarIcon />
      <DatePicker.ValueText placeholder="Pick a date" />
    </Button>
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
