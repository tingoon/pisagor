<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useSidebar } from "./sidebar.context";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  };

  let { class: className, children, ...rest }: Props = $props();
  const ctx = useSidebar();
</script>

<main
  {...rest}
  class={ctx.slots.inset({ class: cn(className) })}
  data-part="inset"
  data-scope="sidebar"
>
  {@render children?.()}
</main>
