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
export function Placements() {
  type Placement = "bottom" | "bottom-start" | "bottom-end";
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>("bottom");

  const handleOpenChange = (nextPlacement: Placement) => {
    setIsOpen(true);
    setPlacement(nextPlacement);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => handleOpenChange("bottom-start")}
          variant="outline"
        >
          Bottom start
        </Button>
        <Button onClick={() => handleOpenChange("bottom")} variant="outline">
          Bottom
        </Button>
        <Button
          onClick={() => handleOpenChange("bottom-end")}
          variant="outline"
        >
          Bottom end
        </Button>
      </div>
      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen}
        positioning={{ placement }}
      >
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value count={5} />
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
    </>
  );
}
