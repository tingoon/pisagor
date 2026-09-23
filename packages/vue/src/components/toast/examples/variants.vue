<script lang="ts" setup >
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
          <Button variant="outline" @click="handleSuccess" >Success</Button>
          <Button variant="outline" @click="handleError" >Error</Button>
          <Button variant="outline" @click="handleWarning" >Warning</Button>
          <Button variant="outline" @click="handleInfo" >Info</Button>
        </div>
  
</template>
