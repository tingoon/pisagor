<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { CaretRightIcon } from "phosphor-svelte";
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
  <DropdownMenu.Sub>
    <DropdownMenu.TriggerItem>
      More
      <DropdownMenu.Indicator>
        <CaretRightIcon />
      </DropdownMenu.Indicator>
    </DropdownMenu.TriggerItem>
    <Portal>
      <DropdownMenu.Positioner>
        <DropdownMenu.Content>
          <DropdownMenu.Item value="sub-a">Sub item A</DropdownMenu.Item>
          <DropdownMenu.Item value="sub-b">Sub item B</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Portal>
  </DropdownMenu.Sub>
  <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
</DropdownMenu>
