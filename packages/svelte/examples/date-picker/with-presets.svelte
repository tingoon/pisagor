<script lang="ts">
import { Button, Calendar } from "@pisagor/svelte";
import { parseDate } from "@pisagor/svelte/calendar";
import { DatePicker } from "@pisagor/svelte/date-picker";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";

const presets = [
  { days: 0, label: "Today" },
  { days: 1, label: "Tomorrow" },
  { days: 3, label: "In 3 days" },
  { days: 7, label: "In a week" },
] as const;
</script>

<DatePicker defaultValue={[parseDate(new Date())]}>
  <DatePicker.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">
        <CalendarIcon />
        <DatePicker.ValueText />
      </Button>
    {/snippet}
  </DatePicker.Trigger>
  <DatePicker.Content>
    <div class="flex max-sm:flex-col">
      <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
        <div class="flex h-full flex-col sm:border-e sm:pe-3">
          {#each presets as preset}
            <DatePicker.PresetTrigger
              value={[
                parseDate(
                  new Date(
                    new Date().setDate(new Date().getDate() + preset.days),
                  ),
                ),
              ]}
            >
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  class="w-full justify-start"
                  size="sm"
                  variant="ghost"
                >
                  {preset.label}
                </Button>
              {/snippet}
            </DatePicker.PresetTrigger>
          {/each}
        </div>
      </div>
      <div class="max-sm:pb-3 sm:ps-2">
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
      </div>
    </div>
  </DatePicker.Content>
</DatePicker>
