<script lang="ts">
import { Card } from "@pisagor/svelte";
import { Calendar, parseDate } from "@pisagor/svelte/calendar";

let value = $state([parseDate(new Date(Date.now()))]);
</script>

<div class="flex flex-col gap-2">
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar onValueChange={({ value: next }) => (value = next)} {value}>
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
      </Calendar>
    </Card.Content>
  </Card>
  <p class="text-center text-muted-foreground text-sm">
    {value.map((date) => date.toString()).join(", ")}
  </p>
</div>
