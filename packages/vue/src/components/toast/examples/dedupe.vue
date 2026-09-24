<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleWithId() {
  toast.create({ description: "handleWithId", title: "Toast" });
}
function handleWithoutId() {
  toast.create({ description: "handleWithoutId", title: "Toast" });
}
</script>

<template>
  <div class="flex gap-2">
    <Button variant="outline" @click="handleWithId">Toast with id</Button>
    <Button variant="outline" @click="handleWithoutId">Toast without id</Button>
  </div>
</template>
