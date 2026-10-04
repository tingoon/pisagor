<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button variant="outline"> Open </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-40">
    <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
    <DropdownMenu.Sub>
      <DropdownMenu.TriggerItem>More</DropdownMenu.TriggerItem>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item value="sub-a">Sub item A</DropdownMenu.Item>
        <DropdownMenu.Item value="sub-b">Sub item B</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
