<script lang="ts" setup >
import { Card } from "@pisagor/vue";
import { Calendar } from "..";
</script>

<template>
        <Card class="[--space:--spacing(2)]">
          <Card.Content>
            <Calendar selectionMode="range">
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
  
</template>
