<script lang="ts" setup>
import { Stat } from "@pisagor/vue";
</script>

<template>
  <div class="grid gap-2 sm:grid-cols-2">
    <Stat
      description="Compared with last week"
      label="New signups"
      trend="+12.6%"
      value="1,284"
      :trend-props="{ trend: 'up' }"
    />
    <Stat
      description="Compared with last month"
      label="Churn rate"
      trend="-0.8%"
      value="3.2%"
      :trend-props="{ trend: 'down' }"
    />
  </div>
</template>
