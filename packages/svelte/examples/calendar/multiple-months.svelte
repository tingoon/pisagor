<script lang="ts">
import { Calendar, Card, parseDate } from "@pisagor/svelte";

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
        <Calendar.PrevTrigger />
        <Calendar.ViewDate />
        <Calendar.NextTrigger />
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
