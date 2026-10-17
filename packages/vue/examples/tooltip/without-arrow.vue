<script lang="ts" setup>
import { Button, Tooltip } from "@pisagor/vue";
</script>

<template>
  <Tooltip content="Saved 2 minutes ago" :show-arrow="false">
    <Button variant="outline">Status</Button>
  </Tooltip>
</template>
