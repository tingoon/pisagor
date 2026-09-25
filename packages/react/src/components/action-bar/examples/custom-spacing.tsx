import { PencilSimpleIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { ActionBar } from "..";
export function CustomSpacing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <ActionBar.Trigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBar.Trigger>
      <ActionBar.Content
        aria-label="Bulk actions"
        className="[--space:--spacing(2)]"
      >
        <ActionBar.Value count={2} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <Button variant="ghost">
            <PencilSimpleIcon />
            <span className="max-sm:sr-only">Edit</span>
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
