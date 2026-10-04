<script lang="ts" setup>
import { Button, toast } from "@pisagor/vue";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <Button variant="outline" @click="handleClick">Toast</Button>
</template>
