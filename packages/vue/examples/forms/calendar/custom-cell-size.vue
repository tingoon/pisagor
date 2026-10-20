<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, Card } from "@pisagor/vue";
</script>

<template>
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar class="[--cell-size:--spacing(10)]">
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
</template>
