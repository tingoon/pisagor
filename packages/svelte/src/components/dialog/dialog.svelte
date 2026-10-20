<script lang="ts">
  import {
    type DialogRootProps,
    type DialogTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { DialogContract, DialogRootContract } from "@pisagor/contracts";
  import { XIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { ScrollArea } from "../scroll-area";
  import DialogBackdrop from "./dialog-backdrop.svelte";
  import DialogBody from "./dialog-body.svelte";
  import DialogContent from "./dialog-content.svelte";
  import DialogDescription from "./dialog-description.svelte";
  import DialogFooter from "./dialog-footer.svelte";
  import DialogHeader from "./dialog-header.svelte";
  import DialogInlineCloseTrigger from "./dialog-inline-close-trigger.svelte";
  import DialogPositioner from "./dialog-positioner.svelte";
  import DialogRoot from "./dialog-root.svelte";
  import DialogTitle from "./dialog-title.svelte";
  import DialogTrigger from "./dialog-trigger.svelte";

  type Props = Omit<DialogRootProps, "children"> &
    DialogRootContract &
    Omit<DialogContract, "actions" | "description" | "title" | "trigger"> & {
      /** Footer action area. */
      actions?: Snippet;
      /** Body content, rendered inside a scroll area. */
      children?: Snippet;
      /** Supporting copy in the header. */
      description?: string | Snippet;
      /**
       * Whether to add a fade effect to the body scroll area.
       *
       * @defaultValue false
       */
      scrollFade?: boolean;
      /**
       * Whether to show a close button at the top end corner.
       *
       * @defaultValue true
       */
      showCloseButton?: boolean;
      /** Dialog title. */
      title?: string | Snippet;
      /** Trigger that opens the dialog; spread `props()` onto your element. */
      trigger?: DialogTriggerProps["asChild"];
    };

  let {
    actions,
    children,
    classNames,
    description,
    modal = true,
    scrollFade = false,
    showCloseButton = true,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<DialogRoot {...rest} {modal}>
  {#if trigger}
    <DialogTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </DialogTrigger>
  {/if}

  <Portal>
    {#if modal}
      <DialogBackdrop class={classNames?.backdrop} />
    {/if}

    <DialogPositioner class={classNames?.positioner}>
      <DialogContent class={classNames?.content}>
        {#if title !== undefined || description !== undefined}
          <DialogHeader class={classNames?.header}>
            {#if title !== undefined}
              <DialogTitle class={classNames?.title}>
                {#if typeof title === "string"}
                  {title}
                {:else}
                  {@render title()}
                {/if}
              </DialogTitle>
            {/if}

            {#if description !== undefined}
              <DialogDescription class={classNames?.description}>
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
          <ScrollArea {scrollFade}>
            <DialogBody class={classNames?.body}>
              {@render children()}
            </DialogBody>
          </ScrollArea>
        {/if}

        {#if actions}
          <DialogFooter class={classNames?.footer}>
            {@render actions()}
          </DialogFooter>
        {/if}

        {#if showCloseButton}
          <DialogInlineCloseTrigger class={classNames?.inline}>
            {#snippet asChild(props)}
              <Button
                {...props()}
                aria-label={m("dialog.close")}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            {/snippet}
          </DialogInlineCloseTrigger>
        {/if}
      </DialogContent>
    </DialogPositioner>
  </Portal>
</DialogRoot>
