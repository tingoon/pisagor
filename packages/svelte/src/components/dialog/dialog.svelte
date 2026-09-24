<script lang="ts">
import type { DialogRootProps } from "@ark-ui/svelte/dialog";
import { Portal } from "@ark-ui/svelte/portal";
import type { Snippet } from "svelte";
import DialogBackdrop from "./dialog-backdrop.svelte";
import DialogBody from "./dialog-body.svelte";
import DialogContent from "./dialog-content.svelte";
import DialogDescription from "./dialog-description.svelte";
import DialogFooter from "./dialog-footer.svelte";
import DialogHeader from "./dialog-header.svelte";
import DialogPositioner from "./dialog-positioner.svelte";
import DialogRoot from "./dialog-root.svelte";
import DialogTitle from "./dialog-title.svelte";
import DialogTrigger from "./dialog-trigger.svelte";

type Props = Omit<DialogRootProps, "title" | "children"> & {
  actions?: Snippet;
  children?: Snippet;
  description?: string | Snippet;
  title?: string | Snippet;
  trigger?: Snippet;
};

let { actions, children, description, title, trigger, ...rest }: Props = $props();
</script>

<DialogRoot {...rest}>
  {#if trigger}
    <DialogTrigger> {@render trigger()} </DialogTrigger>
  {/if}

  <Portal>
    <DialogBackdrop />
    <DialogPositioner>
      <DialogContent>
        {#if title !== undefined || description !== undefined}
          <DialogHeader>
            {#if title !== undefined}
              <DialogTitle>
                {#if typeof title === "string"}
                  {title}
                {:else}
                  {@render title()}
                {/if}
              </DialogTitle>
            {/if}
            {#if description !== undefined}
              <DialogDescription>
                {#if typeof description === "string"}
                  {description}
                {:else}
                  {@render description()}
                {/if}
              </DialogDescription>
            {/if}
          </DialogHeader>
        {/if}
        {#if children}
          <DialogBody>{@render children()}</DialogBody>
        {/if}
        {#if actions}
          <DialogFooter>{@render actions()}</DialogFooter>
        {/if}
      </DialogContent>
    </DialogPositioner>
  </Portal>
</DialogRoot>
