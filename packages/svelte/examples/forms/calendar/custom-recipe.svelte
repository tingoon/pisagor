<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { calendarRecipe } from "@pisagor/recipes";
  import { Button, Calendar, Card } from "@pisagor/svelte";
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
      <Calendar.Table>
        <Calendar.WeekDays />
        <Calendar.TableDays />
      </Calendar.Table>
    </Calendar>
  </Card.Content>
</Card>
