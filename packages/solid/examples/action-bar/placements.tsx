import { ActionBar, Button } from "@pisagor/solid";
import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Placements() {
  type Placement = "bottom" | "bottom-start" | "bottom-end";
  const [isOpen, setIsOpen] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>("bottom");

  const handleOpenChange = (nextPlacement: Placement) => {
    setIsOpen(true);
    setPlacement(nextPlacement);
  };

  return (
    <>
      <div class="flex flex-wrap gap-2">
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
        open={isOpen()}
        positioning={{ placement: placement() }}
      >
        <ActionBar.Content aria-label="Bulk actions">
          <ActionBar.Value count={5} />
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
