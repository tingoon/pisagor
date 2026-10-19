<script lang="ts">
  import type { ItemRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useItem } from "./item.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & ItemRootContract;

  let {
    variant = "default",
    children,
    class: className,
    ...rest
  }: Props = $props();

  const { slots } = useItem();
</script>

<div
  {...rest}
  class={slots.media({ class: cn(className), variant })}
  data-part="media"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</div>
