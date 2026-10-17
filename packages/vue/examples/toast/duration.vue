<script lang="ts" setup>
import { Button, toast } from "@pisagor/vue";

function handleLong() {
  toast.create({ description: "handleLong", title: "Toast" });
}
function handlePersistent() {
  toast.create({ description: "handlePersistent", title: "Toast" });
}
function handleShort() {
  toast.create({ description: "handleShort", title: "Toast" });
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="outline" @click="handleShort">2 seconds</Button>
    <Button variant="outline" @click="handleLong">10 seconds</Button>
    <Button variant="outline" @click="handlePersistent">Until dismissed</Button>
  </div>
</template>
