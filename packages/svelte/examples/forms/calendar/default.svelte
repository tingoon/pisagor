<script lang="ts">
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
  import { Button, Calendar } from "@pisagor/svelte";
</script>

<Calendar>
  <Calendar.View view="day">
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
  </Calendar.View>
</Calendar>
