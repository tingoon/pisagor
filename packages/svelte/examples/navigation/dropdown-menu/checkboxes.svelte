<script lang="ts">
  import { CheckIcon } from "phosphor-svelte";
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.ItemGroup>
    <DropdownMenu.ItemGroupLabel>Appearance</DropdownMenu.ItemGroupLabel>
    <DropdownMenu.CheckboxItem checked value="save">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>Status bar</DropdownMenu.ItemText>
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.CheckboxItem checked={false} value="notifications">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>Activity bar</DropdownMenu.ItemText>
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.CheckboxItem checked={false} disabled value="dark-mode">
      <DropdownMenu.ItemIndicator>
        <CheckIcon />
      </DropdownMenu.ItemIndicator>
      <DropdownMenu.ItemText>Panel</DropdownMenu.ItemText>
    </DropdownMenu.CheckboxItem>
  </DropdownMenu.ItemGroup>
</DropdownMenu>
