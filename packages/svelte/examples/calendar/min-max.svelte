<script lang="ts">
import { Calendar, Card, parseDate } from "@pisagor/svelte";
</script>

<Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar max={parseDate("2025-03-31")} min={parseDate("2025-03-05")}>
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
