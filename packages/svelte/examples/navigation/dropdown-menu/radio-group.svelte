<script lang="ts">
  import { CheckIcon } from "phosphor-svelte";
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.RadioItemGroup value="dark">
    <DropdownMenu.RadioItem value="light">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>Light</DropdownMenu.ItemText>
    </DropdownMenu.RadioItem>
    <DropdownMenu.RadioItem value="dark">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>Dark</DropdownMenu.ItemText>
    </DropdownMenu.RadioItem>
    <DropdownMenu.RadioItem value="system">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>System</DropdownMenu.ItemText>
    </DropdownMenu.RadioItem>
  </DropdownMenu.RadioItemGroup>
</DropdownMenu>
