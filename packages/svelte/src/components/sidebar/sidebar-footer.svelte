<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useSidebar } from "./sidebar.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const ctx = useSidebar();
</script>

<div
  {...rest}
  class={ctx.slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="sidebar"
  data-sidebar="footer"
>
  {@render children?.()}
</div>
