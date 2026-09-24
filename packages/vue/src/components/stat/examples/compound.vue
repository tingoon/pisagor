<script lang="ts" setup>
import { PhArrowUp } from "@phosphor-icons/vue";
import { Stat } from "..";
</script>

<template>
  <Stat.Root>
    <Stat.Label>Monthly recurring revenue</Stat.Label>
    <Stat.Value>$124,320</Stat.Value>
    <Stat.Trend trend="up">
      <PhArrowUp />
      +12.6%
    </Stat.Trend>
    <Stat.Description>Updated 2 minutes ago</Stat.Description>
  </Stat.Root>
</template>
