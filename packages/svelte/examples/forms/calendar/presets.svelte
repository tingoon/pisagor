<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { Button, Calendar, Card } from "@pisagor/svelte";

  const presets = [
    { label: "Last 7 days", value: "last7Days" as const },
    { label: "Last 14 days", value: "last14Days" as const },
    { label: "Last 30 days", value: "last30Days" as const },
    { label: "This month", value: "thisMonth" as const },
  ];
</script>

<Calendar class="[--cell-size:--spacing(8)]" selectionMode="range">
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
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
    </Card.Content>
    <Card.Footer class="flex flex-wrap">
      {#each presets as preset}
        <Calendar.PresetTrigger value={preset.value}>
          {#snippet asChild(props)}
            <Button {...props()} class="flex-1" size="sm" variant="outline">
              {preset.label}
            </Button>
          {/snippet}
        </Calendar.PresetTrigger>
      {/each}
    </Card.Footer>
  </Card>
</Calendar>
