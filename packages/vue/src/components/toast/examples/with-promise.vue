<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { toast } from "..";

function handleClick() {
  toast.create({ description: "handleClick", title: "Toast" });
}
</script>

<template>
  <Button variant="outline" @click="handleClick" >Run Promise</Button>
</template>
