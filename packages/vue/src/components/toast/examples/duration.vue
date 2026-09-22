<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { toast } from "..";

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
          <Button @click="handleShort" variant="outline">2 seconds</Button>
          <Button @click="handleLong" variant="outline">10 seconds</Button>
          <Button @click="handlePersistent" variant="outline">Until dismissed</Button>
        </div>
  
</template>
