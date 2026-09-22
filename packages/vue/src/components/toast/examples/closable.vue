<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
        <div class="flex flex-wrap gap-2">
          <Button @click="handleClick" variant="outline">Toast</Button>
        </div>
  
</template>
