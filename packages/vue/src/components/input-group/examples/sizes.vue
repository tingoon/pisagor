<script lang="ts" setup>
import { InputGroup } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputGroup size="sm"><InputGroup.Input placeholder="Small" /></InputGroup>
    <InputGroup size="md"><InputGroup.Input placeholder="Medium" /></InputGroup>
    <InputGroup size="lg"><InputGroup.Input placeholder="Large" /></InputGroup>
  </div>
</template>
