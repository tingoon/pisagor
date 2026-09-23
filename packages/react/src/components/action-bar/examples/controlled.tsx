import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { ActionBar } from "..";
export function Controlled() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <Button onClick={() => setIsOpen((prev) => !prev)} variant="outline">
        Toggle
      </Button>
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={2} />
        <ActionBar.Separator />
        <ActionBar.Body>
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
