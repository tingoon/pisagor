<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#eb5e41" disabled>
          <ColorPicker.Control>
            <ColorPicker.Trigger as-child>
              <Button size="lg" variant="ghost">
                <ColorPicker.SwatchPreview class="size-6" />
                Pick as color
              </Button>
            </ColorPicker.Trigger>
          </ColorPicker.Control>
          <ColorPicker.Content>
            <ColorPicker.Area />
          </ColorPicker.Content>
        </ColorPicker>
  
</template>
