<script lang="ts" setup>
import { Card, Surface } from "@pisagor/vue";
import { Calendar } from "..";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar>
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
  </Surface>
</template>
