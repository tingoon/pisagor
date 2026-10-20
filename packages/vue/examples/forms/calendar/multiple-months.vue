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
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar
        selection-mode="range"
        :num-of-months="2"
        :value="value"
        @value-change="onValueChange"
      >
        <Calendar.ViewControl>
          <Calendar.PrevTrigger as-child>
            <Button size="icon-md" variant="ghost">
              <PhCaretLeft aria-hidden class="rtl:rotate-180" />
            </Button>
          </Calendar.PrevTrigger>
          <Calendar.ViewDate />
          <Calendar.NextTrigger as-child>
            <Button size="icon-md" variant="ghost">
              <PhCaretRight aria-hidden class="rtl:rotate-180" />
            </Button>
          </Calendar.NextTrigger>
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
</template>
