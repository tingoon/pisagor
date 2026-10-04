<script lang="ts">
import { ActionBar, Button, DropdownMenu } from "@pisagor/svelte";
import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/svelte/icons";
</script>

<ActionBar>
      <ActionBar.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </ActionBar.Trigger>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <DropdownMenu positioning={{ placement: "top" }}>
            <DropdownMenu.Trigger>
            <Button variant="ghost">
                  <DotsThreeIcon />
                  <span class="max-sm:sr-only">More</span>
                </Button>
          </DropdownMenu.Trigger>
            <DropdownMenu.Content>
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
            </DropdownMenu.Content>
          </DropdownMenu>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close>
            <Button
              aria-label="Close"
              size="icon-md"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
