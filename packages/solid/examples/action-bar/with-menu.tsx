import { ActionBar, Button, DropdownMenu } from "@pisagor/solid";
import {
  ArchiveIcon,
  CopyIcon,
  DotsThreeIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/solid/icons";
export function WithMenu() {
  return (
    <ActionBar>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <DropdownMenu positioning={{ placement: "top" }}>
            <DropdownMenu.Trigger
              asChild={(props) => (
                <Button {...props()} variant="ghost">
                  <DotsThreeIcon />
                  <span class="max-sm:sr-only">More</span>
                </Button>
              )}
            />
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
        <ActionBar.Close
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Close"
              size="icon-md"
              variant="ghost"
            >
              <XIcon />
            </Button>
          )}
        />
      </ActionBar.Content>
    </ActionBar>
  );
}
