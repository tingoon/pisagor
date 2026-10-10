<script lang="ts">
import { calendarRecipe } from "@pisagor/recipes";
import { Calendar, Card } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandCalendarRecipe = tv({
  extend: calendarRecipe,
  slots: {
    nextTrigger: "text-emerald-600",
    prevTrigger: "text-emerald-600",
    viewControl: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<Card class="[--space:--spacing(2)]">
  <Card.Content>
    <Calendar recipe={brandCalendarRecipe}>
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
