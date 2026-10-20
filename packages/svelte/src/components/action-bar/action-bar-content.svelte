<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useActionBar } from "./action-bar.context";

  let {
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
  const ctx = useActionBar();
</script>

<div
  role="toolbar"
  {...rest}
  class={ctx.slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="action-bar"
>
  {@render children?.()}
</div>
