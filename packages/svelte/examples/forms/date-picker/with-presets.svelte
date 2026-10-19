<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Calendar, DatePicker, parseDate } from "@pisagor/svelte";
  import { CalendarIcon, CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";

  const presets = [
    { days: 0, label: "Today" },
    { days: 1, label: "Tomorrow" },
    { days: 3, label: "In 3 days" },
    { days: 7, label: "In a week" },
  ] as const;
</script>

<DatePicker.Root defaultValue={[parseDate(new Date())]}>
  <DatePicker.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">
        <CalendarIcon />
        <DatePicker.ValueText />
      </Button>
    {/snippet}
  </DatePicker.Trigger>
  <Portal>
    <DatePicker.Positioner>
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
          </div>
        </div>
      </DatePicker.Content>
    </DatePicker.Positioner>
  </Portal>
</DatePicker.Root>
