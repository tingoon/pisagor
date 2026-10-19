<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, Card, parseDate } from "@pisagor/vue";
import { ref } from "vue";

const value = ref([parseDate(new Date())]);

function onValueChange(details: { value: typeof value.value }) {
  value.value = details.value;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar :value="value" @value-change="onValueChange">
          <Calendar.ViewControl>
            <Calendar.PrevTrigger as-child>
              <Button size="icon-md" variant="ghost">
                <PhCaretLeft aria-hidden class="rtl:rotate-180" />
              </Button>
            </Calendar.PrevTrigger>
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger as-child>
              <Button size="icon-md" variant="ghost">
                <PhCaretRight aria-hidden class="rtl:rotate-180" />
              </Button>
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
      {{ value.map((date) => date.toString()).join(", ") }}
    </p>
  </div>
</template>
