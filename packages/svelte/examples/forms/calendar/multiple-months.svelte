<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { Button, Calendar, Card, parseDate } from "@pisagor/svelte";

  let value = $state([parseDate(new Date(Date.now()))]);
</script>

<Card class="[--space:--spacing(2)]">
  <Card.Content>
    <Calendar
      numOfMonths={2}
      onValueChange={(d) => (value = d.value)}
      selectionMode="range"
      {value}
    >
      <Calendar.ViewControl>
        <Calendar.PrevTrigger>
          {#snippet asChild(props)}
            <Button {...props()} size="icon-md" variant="ghost">
              <CaretLeftIcon aria-hidden="true" class="rtl:rotate-180" />
            </Button>
          {/snippet}
        </Calendar.PrevTrigger>
        <Calendar.ViewDate />
        <Calendar.NextTrigger>
          {#snippet asChild(props)}
            <Button {...props()} size="icon-md" variant="ghost">
              <CaretRightIcon aria-hidden="true" class="rtl:rotate-180" />
            </Button>
          {/snippet}
        </Calendar.NextTrigger>
      </Calendar.ViewControl>
      <div class="flex gap-2">
        <Calendar.Table>
          <Calendar.WeekDays />
          <Calendar.TableDays />
        </Calendar.Table>
        <Calendar.Table>
          <Calendar.WeekDays />
          <Calendar.TableNextMonth />
        </Calendar.Table>
      </div>
    </Calendar>
  </Card.Content>
</Card>
