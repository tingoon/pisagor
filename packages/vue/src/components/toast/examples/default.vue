<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <Button @click="handleClick" variant="outline">Toast</Button>
</template>
