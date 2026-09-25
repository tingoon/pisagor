import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  TrashIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";
import { ActionBar } from "..";
export function WithMenu() {
  return (
    <ActionBar>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <DropdownMenu positioning={{ placement: "top" }}>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost">
                <DotsThreeIcon />
                <span className="max-sm:sr-only">More</span>
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
        <ActionBar.Close asChild>
          <Button aria-label="Close" size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  );
}
