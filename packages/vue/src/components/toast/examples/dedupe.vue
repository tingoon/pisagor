<script setup lang="ts">
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
          <Button @click="handleWithId" variant="outline">Toast with id</Button>
          <Button @click="handleWithoutId" variant="outline">Toast without id</Button>
        </div>
  
</template>
