<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import { ArrowSquareOutIcon } from "phosphor-svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.Item value="docs">
    {#snippet asChild(props)}
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
    {#snippet asChild(props)}
      <a {...props()} href="/docs/components">View docs</a>
    {/snippet}
  </DropdownMenu.Item>
</DropdownMenu>
