<script setup lang="ts">
import { Card } from "@pisagor/vue";
import { Calendar } from "..";
</script>

<template>
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
  
</template>
