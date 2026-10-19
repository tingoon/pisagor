<script lang="ts">
  import {
    type DialogRootProps,
    type DialogTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type {
    AlertDialogContract,
    AlertDialogRootContract,
  } from "@pisagor/contracts";
  import { XIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { ScrollArea } from "../scroll-area";
  import AlertDialogBackdrop from "./alert-dialog-backdrop.svelte";
  import AlertDialogBody from "./alert-dialog-body.svelte";
  import AlertDialogContent from "./alert-dialog-content.svelte";
  import AlertDialogDescription from "./alert-dialog-description.svelte";
  import AlertDialogFooter from "./alert-dialog-footer.svelte";
  import AlertDialogHeader from "./alert-dialog-header.svelte";
  import AlertDialogInlineCloseTrigger from "./alert-dialog-inline-close-trigger.svelte";
  import AlertDialogPositioner from "./alert-dialog-positioner.svelte";
  import AlertDialogRoot from "./alert-dialog-root.svelte";
  import AlertDialogTitle from "./alert-dialog-title.svelte";
  import AlertDialogTrigger from "./alert-dialog-trigger.svelte";

  type Props = Omit<DialogRootProps, "children"> &
    AlertDialogRootContract &
    Omit<
      AlertDialogContract,
      "actions" | "description" | "title" | "trigger"
    > & {
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
       * @defaultValue false
       */
      showCloseButton?: boolean;
      /** Alert dialog title. */
      title?: string | Snippet;
      /**
       * Trigger that opens the alert dialog; spread `props()` onto your
       * element.
       */
      trigger?: DialogTriggerProps["asChild"];
    };

  let {
    actions,
    children,
    classNames,
    description,
    modal = true,
    scrollFade = false,
    showCloseButton = false,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<AlertDialogRoot {...rest} {modal}>
  {#if trigger}
    <AlertDialogTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </AlertDialogTrigger>
  {/if}

  <Portal>
    {#if modal}
      <AlertDialogBackdrop class={classNames?.backdrop} />
    {/if}

    <AlertDialogPositioner class={classNames?.positioner}>
      <AlertDialogContent class={classNames?.content}>
        {#if title !== undefined || description !== undefined}
          <AlertDialogHeader class={classNames?.header}>
            {#if title !== undefined}
              <AlertDialogTitle class={classNames?.title}>
                {#if typeof title === "string"}
                  {title}
                {:else}
                  {@render title()}
                {/if}
              </AlertDialogTitle>
            {/if}

            {#if description !== undefined}
              <AlertDialogDescription class={classNames?.description}>
                {#if typeof description === "string"}
                  {description}
                {:else}
                  {@render description()}
                {/if}
              </AlertDialogDescription>
            {/if}
          </AlertDialogHeader>
        {/if}

        {#if children}
          <ScrollArea {scrollFade}>
            <AlertDialogBody class={classNames?.body}>
              {@render children()}
            </AlertDialogBody>
          </ScrollArea>
        {/if}

        {#if actions}
          <AlertDialogFooter class={classNames?.footer}>
            {@render actions()}
          </AlertDialogFooter>
        {/if}

        {#if showCloseButton}
          <AlertDialogInlineCloseTrigger class={classNames?.inline}>
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
          </AlertDialogInlineCloseTrigger>
        {/if}
      </AlertDialogContent>
    </AlertDialogPositioner>
  </Portal>
</AlertDialogRoot>
