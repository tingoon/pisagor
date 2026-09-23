<script lang="ts" setup >
import { PhEye } from "@phosphor-icons/vue";
import { InputGroup } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <InputGroup>
            <InputGroup.Input placeholder="Enter password" />
            <InputGroup.Addon align="inline-end">
              <PhEye aria-hidden="true" />
            </InputGroup.Addon>
          </InputGroup>
          <p class="text-muted-foreground text-sm">Icon positioned at the end.</p>
        </div>
  
</template>
