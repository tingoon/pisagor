<script lang="ts">
  import {
    type DialogRootProps,
    type DialogTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { CommandDialogContract } from "@pisagor/contracts";
  import { commandRecipe } from "@pisagor/recipes";
  import type { Snippet } from "svelte";
  import DialogBackdrop from "../dialog/dialog-backdrop.svelte";
  import DialogContent from "../dialog/dialog-content.svelte";
  import DialogDescription from "../dialog/dialog-description.svelte";
  import DialogHeader from "../dialog/dialog-header.svelte";
  import DialogPositioner from "../dialog/dialog-positioner.svelte";
  import DialogRoot from "../dialog/dialog-root.svelte";
  import DialogTitle from "../dialog/dialog-title.svelte";
  import DialogTrigger from "../dialog/dialog-trigger.svelte";
  import { useLocale } from "../provider/context";

  type Props = Omit<DialogRootProps, "children"> &
    Omit<CommandDialogContract, "description" | "title"> & {
      /** The command palette. */
      children?: Snippet;
      /** Visually hidden dialog description. */
      description?: string;
      /** Command style recipe override (dialog content and header slots). */
      recipe?: typeof commandRecipe;
      /** Visually hidden dialog title. */
      title?: string;
      /** Element that opens the dialog; spread `props()` onto your element. */
      trigger?: DialogTriggerProps["asChild"];
    };

  let {
    children,
    description,
    recipe = commandRecipe,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
  const slots = $derived(recipe());
</script>

<DialogRoot size="lg" {...rest}>
  {#if trigger}
    <DialogTrigger>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </DialogTrigger>
  {/if}

  <Portal>
    <DialogBackdrop />

    <DialogPositioner>
      <DialogContent class={slots.dialogContent()}>
        <DialogHeader class={slots.dialogHeader()}>
          <DialogTitle>{m("command.title", title)}</DialogTitle>
          <DialogDescription>
            {m("command.description", description)}
          </DialogDescription>
        </DialogHeader>

        {@render children?.()}
      </DialogContent>
    </DialogPositioner>
  </Portal>
</DialogRoot>
