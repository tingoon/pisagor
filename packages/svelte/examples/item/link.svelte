<script lang="ts">
import { Item } from "@pisagor/svelte";
import ArrowSquareOutIcon from "phosphor-svelte/lib/ArrowSquareOutIcon";
</script>

<Item.Group class="gap-2">
  <Item variant="muted">
    {#snippet asChild(props)}
      <a {...props()} href="https://example.com/docs">
        <Item.Content>
          <Item.Title>Visit our documentation</Item.Title>
          <Item.Description>
            Learn how to get started with our components.
          </Item.Description>
        </Item.Content>
      </a>
    {/snippet}
  </Item>
  <Item variant="outline">
    {#snippet asChild(props)}
      <a
        {...props()}
        href="https://example.com/resources"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Item.Content>
          <Item.Title>External resource</Item.Title>
          <Item.Description>
            Opens in a new tab with security attributes.
          </Item.Description>
        </Item.Content>
        <ArrowSquareOutIcon />
      </a>
    {/snippet}
  </Item>
</Item.Group>
