<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { Sheet } from "../sheet";
import { SIDEBAR_WIDTH_MOBILE } from "./constants";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
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
const padded = $derived(variant === "floating" || variant === "inset");
</script>

{#if collapsible === "none"}
  <Ark
    as="div"
    {...rest}
    class={ctx.slots.base({ class: cn(className) })}
    data-part="root"
    data-scope="sidebar"
    {style}
  >
    {@render children?.()}
  </Ark>
{:else if ctx.isMobile}
  <Sheet onOpenChange={(details) => ctx.setOpenMobile(details.open)} open={ctx.openMobile}>
    <Sheet.Content
      {...rest}
      class={ctx.slots.mobile()}
      data-mobile="true"
      data-sidebar="sidebar"
      placement={placement === "left" ? "left" : "right"}
      style={`--sidebar-width: ${SIDEBAR_WIDTH_MOBILE}; ${style ?? ""}`}
    >
      <Sheet.Header class={ctx.slots.mobileHeader()}>
        <Sheet.Title>Sidebar</Sheet.Title>
        <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
      </Sheet.Header>
      <Ark as="div" class={ctx.slots.mobileBody()}> {@render children?.()} </Ark>
    </Sheet.Content>
  </Sheet>
{:else}
  <Ark
    as="div"
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
    <Ark
      as="div"
      class={ctx.slots.gap({ padded, placement })}
      data-part="gap"
      data-scope="sidebar"
    />
    <Ark
      as="div"
      class={ctx.slots.container({ class: cn(className), padded, placement })}
      data-part="container"
      data-scope="sidebar"
    >
      <Ark
        as="div"
        class={ctx.slots.inner()}
        data-part="inner"
        data-scope="sidebar"
        data-sidebar="sidebar"
      >
        {@render children?.()}
      </Ark>
    </Ark>
  </Ark>
{/if}
