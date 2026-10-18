<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useSidebar } from "./sidebar.context";

  type Props = HTMLAttributes<HTMLLIElement> & {
    children?: import("svelte").Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const ctx = useSidebar();
</script>

<li
  {...rest}
  class={ctx.slots.menuSubItem({ class: cn(className) })}
  data-part="menu-sub-item"
  data-scope="sidebar"
  data-sidebar="menu-sub-item"
>
  {@render children?.()}
</li>
