<script lang="ts" setup>
import { PhCopy, PhFileCode } from "@phosphor-icons/vue";
import { InputGroup } from "..";
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputGroup>
      <InputGroup.Textarea class="font-mono text-sm" placeholder="console.log('Hello, world!');" />
      <InputGroup.Addon align="block-start">
        <PhFileCode class="text-muted-foreground" />
        <InputGroup.Text class="font-mono">script.js</InputGroup.Text>
        <InputGroup.Button class="ml-auto" size="icon-xs">
          <PhCopy />
          <span class="sr-only">Copy</span>
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
    <p class="text-muted-foreground text-sm">Header positioned above the textarea.</p>
  </div>
</template>
