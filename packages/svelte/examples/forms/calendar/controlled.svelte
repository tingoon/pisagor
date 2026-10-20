<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { Button, Calendar, Card, parseDate } from "@pisagor/svelte";

  let value = $state([parseDate(new Date(Date.now()))]);
</script>

<div class="flex flex-col gap-2">
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar onValueChange={({ value: next }) => (value = next)} {value}>
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
  <p class="text-muted-foreground text-center text-sm">
    {value.map((date) => date.toString()).join(", ")}
  </p>
</div>
