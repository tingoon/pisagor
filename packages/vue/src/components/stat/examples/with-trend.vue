<script setup lang="ts">
import { Stat } from "..";

const upTrend = { direction: "up" as const, value: 12.5 };
const downTrend = { direction: "down" as const, value: 4.2 };
</script>

<template>
        <div class="grid gap-2 sm:grid-cols-2">
          <Stat
            description="Compared with last week"
            label="New signups"
            :trend="upTrend"
            :trendProps="{ trend: 'up' }"
            value="1,284"
          />
          <Stat
            description="Compared with last month"
            label="Churn rate"
            :trend="downTrend"
            :trendProps="{ trend: 'down' }"
            value="3.2%"
          />
        </div>
  
</template>
