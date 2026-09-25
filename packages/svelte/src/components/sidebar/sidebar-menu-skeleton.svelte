<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { Skeleton } from "../skeleton";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  class?: string | undefined;
  showIcon?: boolean;
  style?: string | undefined;
};

let { showIcon = false, class: className, style, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="div"
  {...rest}
  class={ctx.slots.menuSkeleton({ class: cn(className) })}
  data-part="menu-skeleton"
  data-scope="sidebar"
  data-sidebar="menu-skeleton"
  {style}
>
  {#if showIcon}
    <Skeleton class={ctx.slots.menuSkeletonIcon()} data-sidebar="menu-skeleton-icon" />
  {/if}
  <Skeleton
    class={ctx.slots.menuSkeletonText()}
    data-sidebar="menu-skeleton-text"
    style="--skeleton-width: 70%"
  />
</Ark>
