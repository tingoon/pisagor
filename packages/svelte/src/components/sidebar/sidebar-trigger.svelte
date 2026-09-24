<script lang="ts">
import SidebarSimpleIcon from "phosphor-svelte/lib/SidebarSimpleIcon";
import type { ComponentProps } from "svelte";
import Button from "../button/button.svelte";
import { useSidebar } from "./sidebar.context";

type Props = Omit<ComponentProps<typeof Button>, "size" | "variant"> & {
  size?: ComponentProps<typeof Button>["size"];
  variant?: ComponentProps<typeof Button>["variant"];
};

let {
  class: className,
  onclick,
  children,
  size = "icon-md",
  variant = "ghost",
  ...rest
}: Props = $props();

const ctx = useSidebar();

function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
  onclick?.(event);
  ctx.toggleSidebar();
}
</script>

<Button
  {...rest}
  class={ctx.slots.trigger({ class: className })}
  data-part="trigger"
  data-scope="sidebar"
  data-sidebar="trigger"
  onclick={handleClick}
  {size}
  {variant}
>
  {#if children}
    {@render children()}
  {:else}
    <SidebarSimpleIcon class={ctx.slots.triggerIcon()} />
    <span class={ctx.slots.triggerLabel()}>Toggle sidebar</span>
  {/if}
</Button>
