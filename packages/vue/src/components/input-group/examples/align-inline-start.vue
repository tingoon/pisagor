<script lang="ts" setup >
import { PhFunnel } from "@phosphor-icons/vue";
import { InputGroup } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <InputGroup>
            <InputGroup.Addon align="inline-start">
              <PhFunnel aria-hidden="true" />
            </InputGroup.Addon>
            <InputGroup.Input placeholder="Search..." />
          </InputGroup>
          <p class="text-muted-foreground text-sm">Icon positioned at the start.</p>
        </div>
  
</template>
