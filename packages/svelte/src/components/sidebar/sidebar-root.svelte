<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { sheetRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { Sheet } from "../sheet";
  import { SIDEBAR_WIDTH_MOBILE } from "./constants";
  import { useSidebar } from "./sidebar.context";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
    children?: import("svelte").Snippet;
    style?: string | undefined;
    placement?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  };

  let {
    collapsible = "offcanvas",
    placement = "left",
    variant = "sidebar",
    class: className,
    children,
    style,
    ...rest
  }: Props = $props();

  const ctx = useSidebar();
  const { m } = useLocale();
  const padded = $derived(variant === "floating" || variant === "inset");
</script>

{#if collapsible === "none"}
  <div
    {...rest}
    class={ctx.slots.base({ class: cn(className) })}
    data-part="root"
    data-scope="sidebar"
    {style}
  >
    {@render children?.()}
  </div>{:else if ctx.isMobile}
  <Sheet.Root
    onOpenChange={(details) => ctx.setOpenMobile(details.open)}
    open={ctx.openMobile}
    placement={placement === "left" ? "left" : "right"}
  >
    <Portal>
      <Sheet.Backdrop />
      <Sheet.Positioner>
        <Sheet.Content
          {...rest}
          class={ctx.slots.mobile()}
          data-mobile="true"
          data-sidebar="sidebar"
          style={`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE}; ${style ?? ""}`}
        >
          <Sheet.Header class={ctx.slots.mobileHeader()}>
            <Sheet.Title>Sidebar</Sheet.Title>
            <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
          </Sheet.Header>
          <div class={ctx.slots.mobileBody()}>
            {@render children?.()}
          </div>
          <Sheet.CloseTrigger>
            {#snippet asChild(props)}
              <Button
                {...props()}
                aria-label={m("sheet.close")}
                class={sheetRecipe().inline()}
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            {/snippet}
          </Sheet.CloseTrigger>
        </Sheet.Content>
      </Sheet.Positioner>
    </Portal>
  </Sheet.Root>
{:else}
  <div
    {...rest}
    class={ctx.slots.peer({ class: cn(className) })}
    data-collapsible={ctx.state === "collapsed" ? collapsible : ""}
    data-part="root"
    data-placement={placement}
    data-scope="sidebar"
    data-state={ctx.state}
    data-variant={variant}
    {style}
  >
    <div
      class={ctx.slots.gap({ padded, placement })}
      data-part="gap"
      data-scope="sidebar"
    />
    <div
      class={ctx.slots.container({ class: cn(className), padded, placement })}
      data-part="container"
      data-scope="sidebar"
    >
      <div
        class={ctx.slots.inner()}
        data-part="inner"
        data-scope="sidebar"
        data-sidebar="sidebar"
      >
        {@render children?.()}
      </div>
    </div>
  </div>{/if}
