<script lang="ts" setup>
import { Button, ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker.Root default-value="#eb5e41" disabled>
    <ColorPicker.Control>
      <ColorPicker.Trigger as-child>
        <Button size="lg" variant="ghost">
          <ColorPicker.SwatchPreview class="size-6" />
          Pick as color
        </Button>
      </ColorPicker.Trigger>
    </ColorPicker.Control>
    <Teleport to="body">
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
          </ColorPicker.Area>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Teleport>
  </ColorPicker.Root>
</template>
