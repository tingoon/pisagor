<script lang="ts">
import { Card } from "@pisagor/svelte";
import { Calendar } from "@pisagor/svelte/calendar";
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
