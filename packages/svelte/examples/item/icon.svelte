<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Item } from "@pisagor/svelte/item";
import ShieldWarningIcon from "phosphor-svelte/lib/ShieldWarningIcon";
</script>

<Item variant="outline">
      <Item.Media variant="icon">
        <ShieldWarningIcon />
      </Item.Media>
      <Item.Content>
        <Item.Title>Security alert</Item.Title>
        <Item.Description>
          New login detected from unknown device.
        </Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </Item.Actions>
    </Item>
