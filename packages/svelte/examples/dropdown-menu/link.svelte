<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";
import { ArrowSquareOutIcon } from "@pisagor/svelte/icons";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button variant="outline">Open</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-40">
    <DropdownMenu.Item value="docs">
      {#snippet asChild(
        props,
      )}
        <a
          {...props()}
          href="https://example.com/docs"
          rel="noopener noreferrer"
          target="_blank"
        >
          External link
          <DropdownMenu.Shortcut>
            <ArrowSquareOutIcon />
          </DropdownMenu.Shortcut>
        </a>
      {/snippet}
    </DropdownMenu.Item>
    <DropdownMenu.Item value="components">
      {#snippet asChild(
        props,
      )}
        <a {...props()} href="/docs/components">View docs</a>
      {/snippet}
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
