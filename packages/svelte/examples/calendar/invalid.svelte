<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Calendar, Card } from "@pisagor/svelte";
</script>

<Card class="[--space:--spacing(2)]">
  <Card.Content>
    <Calendar invalid>
      <Calendar.ViewControl>
        <Calendar.PrevTrigger />
        <Calendar.ViewDate />
        <Calendar.NextTrigger />
      </Calendar.ViewControl>
      <Calendar.Table>
        <Calendar.WeekDays />
        <Calendar.TableDays />
      </Calendar.Table>
    </Calendar>
  </Card.Content>
</Card>
