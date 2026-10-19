<script lang="ts" setup>
import { Button, Input, Popover } from "@pisagor/vue";
</script>

<template>
  <div>
    <Popover.Root>
      <div class="flex items-center gap-2">
        <Popover.Trigger as-child>
          <Button variant="outline">Open</Button>
        </Popover.Trigger>
        <Popover.Anchor as-child>
          <Input class="w-full" placeholder="jane.doe@example.com" />
        </Popover.Anchor>
        <Teleport to="body">
          <Popover.Positioner>
            <Popover.Content class="w-56">
              <Popover.Header>
                <Popover.Title>Enter your email</Popover.Title>
                <Popover.Description>
                  We'll send you a link to reset your password.
                </Popover.Description>
              </Popover.Header>
            </Popover.Content>
          </Popover.Positioner>
        </Teleport>
      </div>
    </Popover.Root>
  </div>
</template>
