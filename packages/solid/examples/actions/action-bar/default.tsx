import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@squidlab/phosphor-solid/icons";
import { ActionBar, Button } from "@pisagor/solid";

export function Default() {
  return (
    <ActionBar
      count={3}
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Button variant="ghost">
        <PencilSimpleIcon />
        <span class="max-sm:sr-only">Edit</span>
      </Button>
      <Button variant="ghost">
        <DownloadIcon />
        <span class="max-sm:sr-only">Export</span>
      </Button>
      <Button variant="ghost">
        <ArchiveIcon />
        <span class="max-sm:sr-only">Archive</span>
      </Button>
      <ActionBar.Separator />
      <Button variant="destructive">
        <TrashIcon />
        <span class="max-sm:sr-only">Delete</span>
      </Button>
    </ActionBar>
  );
}
