<script lang="ts">
import { Button } from "@pisagor/svelte";
import { ActionBar } from "@pisagor/svelte/action-bar";
import {
  ArchiveIcon,
  DownloadIcon,
  PencilSimpleIcon,
  TrashIcon,
  XIcon,
} from "@pisagor/svelte/icons";


let isOpen = $state(false);
let placement: Placement = $state("bottom");


type Placement = "bottom" | "bottom-start" | "bottom-end";
  
  

  const handleOpenChange = (nextPlacement: Placement) => {
    isOpen = true;
    placement = nextPlacement;
  };
</script>

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
        open={isOpen}
        positioning={{ placement }}
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
