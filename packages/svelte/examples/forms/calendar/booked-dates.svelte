<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { Button, Calendar, Card } from "@pisagor/svelte";

  const isWeekend = (date: { year: number; month: number; day: number }) => {
    const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();

    return dayOfWeek === 0 || dayOfWeek === 6;
  };
</script>

<Card class="[--space:--spacing(2)]">
  <Card.Content>
    <Calendar isDateUnavailable={isWeekend}>
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
    </Calendar>
  </Card.Content>
</Card>
