<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Input, Popover } from "@pisagor/svelte";
</script>

<div>
  <Popover.Root>
    <div class="flex items-center gap-2">
      <Popover.Trigger>
        {#snippet asChild(props)}
          <Button {...props()} variant="outline">Open</Button>
        {/snippet}
      </Popover.Trigger>
      <Popover.Anchor>
        {#snippet asChild(props)}
          <Input
            {...props()}
            class="w-full"
            placeholder="jane.doe@example.com"
          />
        {/snippet}
      </Popover.Anchor>
      <Portal>
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
      </Portal>
    </div>
  </Popover.Root>
</div>
