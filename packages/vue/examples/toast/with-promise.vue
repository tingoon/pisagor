<script lang="ts">
import source from "./with-promise.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button, toast } from "@pisagor/vue";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <Button variant="outline" @click="handleClick">Run Promise</Button>
</template>
