<script lang="ts" setup>
import { InputGroup } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputGroup>
      <InputGroup.Textarea placeholder="Write a comment..." />
      <InputGroup.Addon align="block-end">
        <InputGroup.Text>0/280</InputGroup.Text>
        <InputGroup.Button class="ml-auto" size="xs"> Post </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
    <p class="text-muted-foreground text-sm">Footer positioned below the textarea.</p>
  </div>
</template>
