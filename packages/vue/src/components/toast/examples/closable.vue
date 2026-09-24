<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button variant="outline" @click="handleClick">Toast</Button>
  </div>
</template>
