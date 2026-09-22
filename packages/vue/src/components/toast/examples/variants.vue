<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleError() {
  toast.create({ description: "handleError", title: "Toast" });
}
function handleInfo() {
  toast.create({ description: "handleInfo", title: "Toast" });
}
function handleSuccess() {
  toast.create({ description: "handleSuccess", title: "Toast" });
}
function handleWarning() {
  toast.create({ description: "handleWarning", title: "Toast" });
}
</script>

<template>
        <div class="flex flex-wrap gap-2">
          <Button @click="handleSuccess" variant="outline">Success</Button>
          <Button @click="handleError" variant="outline">Error</Button>
          <Button @click="handleWarning" variant="outline">Warning</Button>
          <Button @click="handleInfo" variant="outline">Info</Button>
        </div>
  
</template>
