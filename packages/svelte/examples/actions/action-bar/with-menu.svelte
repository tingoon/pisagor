<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ActionBar, Button, DropdownMenu } from "@pisagor/svelte";
  import {
    ArchiveIcon,
    CopyIcon,
    DotsThreeIcon,
    TrashIcon,
    XIcon,
  } from "phosphor-svelte";
</script>

<ActionBar.Root>
  <ActionBar.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </ActionBar.Trigger>
  <Portal>
    <ActionBar.Positioner>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <DropdownMenu positioning={{ placement: "top" }}>
            {#snippet trigger(props)}
              <Button {...props()} variant="ghost">
                <DotsThreeIcon />
                <span class="max-sm:sr-only">More</span>
              </Button>
            {/snippet}

            <DropdownMenu.Item value="archive">
              <ArchiveIcon />
              Archive
            </DropdownMenu.Item>
            <DropdownMenu.Item value="duplicate">
              <CopyIcon />
              Duplicate
            </DropdownMenu.Item>
            <DropdownMenu.Item value="delete" variant="destructive">
              <TrashIcon />
              Delete
            </DropdownMenu.Item>
          </DropdownMenu>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label="Close"
              size="icon-md"
              variant="ghost"
            >
              <XIcon />
            </Button>
          {/snippet}
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar.Positioner>
  </Portal>
</ActionBar.Root>
