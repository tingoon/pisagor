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
let gutter: (typeof gutters)[number] = $state("24px");


const gutters = ["24px", "32px"] as const;
</script>

<div class="flex flex-wrap gap-2">
        {#each gutters as value}
          <Button
            onClick={() => {
              isOpen = true;
              gutter = value;
            }}
            variant={gutter === value && isOpen ? "secondary" : "outline"}
          >
            {`Gutter ${value}`}
          </Button>
        {/each}
      </div>
      <ActionBar
        onOpenChange={setIsOpen}
        open={isOpen}
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
