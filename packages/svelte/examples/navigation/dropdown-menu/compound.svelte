<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import { CaretRightIcon, CheckIcon } from "phosphor-svelte";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <Portal>
    <DropdownMenu.Positioner>
      <DropdownMenu.Content class="w-48">
        <DropdownMenu.Item value="rename">
          Rename
          <DropdownMenu.Shortcut>⌘R</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.CheckboxItem checked value="pin">
          <DropdownMenu.ItemIndicator>
            <CheckIcon />
          </DropdownMenu.ItemIndicator>
          <DropdownMenu.ItemText>Pinned</DropdownMenu.ItemText>
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.TriggerItem>
            Share
            <DropdownMenu.Indicator>
              <CaretRightIcon />
            </DropdownMenu.Indicator>
          </DropdownMenu.TriggerItem>
          <Portal>
            <DropdownMenu.Positioner>
              <DropdownMenu.Content>
                <DropdownMenu.Item value="email">Email</DropdownMenu.Item>
                <DropdownMenu.Item value="link">Copy link</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Positioner>
          </Portal>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Positioner>
  </Portal>
</DropdownMenu.Root>
