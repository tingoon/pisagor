<script lang="ts">
  import {
    type DrawerRootProps,
    type DrawerTriggerProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { DrawerContract, DrawerRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import { ScrollArea } from "../scroll-area";
  import DrawerBackdrop from "./drawer-backdrop.svelte";
  import DrawerBody from "./drawer-body.svelte";
  import DrawerContent from "./drawer-content.svelte";
  import DrawerContentInner from "./drawer-content-inner.svelte";
  import DrawerDescription from "./drawer-description.svelte";
  import DrawerFooter from "./drawer-footer.svelte";
  import DrawerGrabber from "./drawer-grabber.svelte";
  import DrawerGrabberIndicator from "./drawer-grabber-indicator.svelte";
  import DrawerHeader from "./drawer-header.svelte";
  import DrawerPositioner from "./drawer-positioner.svelte";
  import DrawerRoot from "./drawer-root.svelte";
  import DrawerTitle from "./drawer-title.svelte";
  import DrawerTrigger from "./drawer-trigger.svelte";

  type Props = Omit<DrawerRootProps, "children"> &
    Omit<DrawerRootContract, "placement"> &
    DrawerContract & {
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
      /** Drawer title. */
      title?: string | Snippet;
      /** Trigger that opens the drawer; spread `props()` onto your element. */
      trigger?: DrawerTriggerProps["asChild"];
    };

  let {
    actions,
    children,
    classNames,
    description,
    scrollFade = false,
    title,
    trigger,
    ...rest
  }: Props = $props();
</script>

<DrawerRoot {...rest}>
  {#if trigger}
    <DrawerTrigger class={classNames?.trigger}>
      {#snippet asChild(props)}
        {@render trigger(props)}
      {/snippet}
    </DrawerTrigger>
  {/if}

  <Portal>
    <DrawerBackdrop class={classNames?.backdrop} />

    <DrawerPositioner class={classNames?.positioner}>
      <DrawerContent class={classNames?.content}>
        <DrawerGrabber class={classNames?.grabberWrapper}>
          <DrawerGrabberIndicator class={classNames?.grabber} />
        </DrawerGrabber>

        <DrawerContentInner class={classNames?.contentInner}>
          {#if title !== undefined || description !== undefined}
            <DrawerHeader class={classNames?.header}>
              {#if title !== undefined}
                <DrawerTitle class={classNames?.title}>
                  {#if typeof title === "string"}
                    {title}
                  {:else}
                    {@render title()}
                  {/if}
                </DrawerTitle>
              {/if}

              {#if description !== undefined}
                <DrawerDescription class={classNames?.description}>
                  {#if typeof description === "string"}
                    {description}
                  {:else}
                    {@render description()}
                  {/if}
                </DrawerDescription>
              {/if}
            </DrawerHeader>
          {/if}

          {#if children}
            <ScrollArea {scrollFade}>
              <DrawerBody class={classNames?.body}>
                {@render children()}
              </DrawerBody>
            </ScrollArea>
          {/if}
        </DrawerContentInner>

        {#if actions}
          <DrawerFooter class={classNames?.footer}>
            <DrawerContentInner class={classNames?.contentInner}>
              {@render actions()}
            </DrawerContentInner>
          </DrawerFooter>
        {/if}
      </DrawerContent>
    </DrawerPositioner>
  </Portal>
</DrawerRoot>
