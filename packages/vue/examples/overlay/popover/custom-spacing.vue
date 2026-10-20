<script lang="ts" setup>
import { Button, Field, Input, Popover } from "@pisagor/vue";
</script>

<template>
  <Popover.Root>
    <Popover.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content
          class="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]"
        >
          <Popover.Header>
            <Popover.Title>Dimensions</Popover.Title>
            <Popover.Description>
              Set the dimensions for the layer.
            </Popover.Description>
          </Popover.Header>
          <Popover.Body>
            <Field.Group class="gap-2">
              <Field class="grid grid-cols-3 items-center gap-2">
                <Field.Label>Width</Field.Label>
                <Input class="col-span-2" default-value="100%" />
              </Field>
              <Field class="grid grid-cols-3 items-center gap-2">
                <Field.Label>Max. width</Field.Label>
                <Input class="col-span-2" default-value="300px" />
              </Field>
            </Field.Group>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
