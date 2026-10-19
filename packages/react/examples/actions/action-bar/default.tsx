import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { ActionBar, Button } from "@pisagor/react";

export function Default() {
  return (
    <ActionBar count={3} trigger={<Button variant="outline">Open</Button>}>
      <Button variant="ghost">
        <PencilSimpleIcon />
        <span className="max-sm:sr-only">Edit</span>
      </Button>
      <Button variant="ghost">
        <DownloadIcon />
        <span className="max-sm:sr-only">Export</span>
      </Button>
      <Button variant="ghost">
        <ArchiveIcon />
        <span className="max-sm:sr-only">Archive</span>
      </Button>
      <ActionBar.Separator />
      <Button variant="destructive">
        <TrashIcon />
        <span className="max-sm:sr-only">Delete</span>
      </Button>
    </ActionBar>
  );
}
