<script module lang="ts">
  import source from "./month-year-selector.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Calendar, Card } from "@pisagor/svelte";
</script>

<Card class="[--space:--spacing(2)]">
  <Card.Content>
    <Calendar>
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
