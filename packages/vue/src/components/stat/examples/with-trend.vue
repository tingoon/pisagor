<script lang="ts" setup>
import { Stat } from "..";

const upTrend = { direction: "up" as const, value: 12.5 };
const downTrend = { direction: "down" as const, value: 4.2 };
</script>

<template>
  <div class="grid gap-2 sm:grid-cols-2">
    <Stat
      description="Compared with last week"
      label="New signups"
      value="1,284"
      :trend="upTrend"
      :trend-props="{ trend: 'up' }"
    />
    <Stat
      description="Compared with last month"
      label="Churn rate"
      value="3.2%"
      :trend="downTrend"
      :trend-props="{ trend: 'down' }"
    />
  </div>
</template>
