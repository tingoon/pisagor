/** @jsxImportSource solid-js */

import { ActionBar, Button } from "@pisagor/solid";
import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Gutter() {
  const gutters = ["24px", "32px"] as const;
  const [isOpen, setIsOpen] = createSignal(false);
  const [gutter, setGutter] = createSignal<(typeof gutters)[number]>("24px");

  return (
    <>
      <div class="flex flex-wrap gap-2">
        {gutters.map((value) => (
          <Button
            onClick={() => {
              setIsOpen(true);
              setGutter(value);
            }}
            variant={gutter() === value && isOpen ? "secondary" : "outline"}
          >
            {`Gutter ${value}`}
          </Button>
        ))}
      </div>
      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen()}
        positioning={{ gutter, placement: "bottom" }}
      >
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value count={3} />
          <ActionBar.Separator />
          <ActionBar.Body>
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
    </>
  );
}
