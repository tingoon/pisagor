<script lang="ts">
  import {
    type DialogRootProps,
    type DialogTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { SheetContract, SheetRootContract } from "@pisagor/contracts";
  import { XIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import DialogBackdrop from "../dialog/dialog-backdrop.svelte";
  import DialogDescription from "../dialog/dialog-description.svelte";
  import DialogHeader from "../dialog/dialog-header.svelte";
  import DialogTitle from "../dialog/dialog-title.svelte";
  import DialogTrigger from "../dialog/dialog-trigger.svelte";
  import { useLocale } from "../provider/context";
  import { ScrollArea } from "../scroll-area";
  import SheetBody from "./sheet-body.svelte";
  import SheetContent from "./sheet-content.svelte";
  import SheetFooter from "./sheet-footer.svelte";
  import SheetInlineCloseTrigger from "./sheet-inline-close-trigger.svelte";
  import SheetPositioner from "./sheet-positioner.svelte";
  import SheetRoot from "./sheet-root.svelte";

  type Props = Omit<DialogRootProps, "children"> &
    SheetRootContract &
    Omit<SheetContract, "actions" | "description" | "title" | "trigger"> & {
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
      /** Sheet title. */
      title?: string | Snippet;
      /** Trigger that opens the sheet; spread `props()` onto your element. */
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

<SheetRoot {...rest} {modal}>
  {#if trigger}
    <DialogTrigger>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </DialogTrigger>
  {/if}

  <Portal>
    {#if modal}
      <DialogBackdrop />
    {/if}

    <SheetPositioner class={classNames?.positioner}>
      <SheetContent class={classNames?.content}>
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
          <ScrollArea {scrollFade}>
            <SheetBody class={classNames?.body}>{@render children()}</SheetBody>
          </ScrollArea>
        {/if}

        {#if actions}
          <SheetFooter class={classNames?.footer}>
            {@render actions()}
          </SheetFooter>
        {/if}

        {#if showCloseButton}
          <SheetInlineCloseTrigger class={classNames?.inline}>
            {#snippet asChild(props)}
              <Button
                {...props()}
                aria-label={m("sheet.close")}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            {/snippet}
          </SheetInlineCloseTrigger>
        {/if}
      </SheetContent>
    </SheetPositioner>
  </Portal>
</SheetRoot>
