<script lang="ts" setup>
import { Button, toast } from "@pisagor/vue";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="outline" @click="handleClick">Toast</Button>
  </div>
</template>
