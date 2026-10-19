<script lang="ts">
  import type { CardRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useStyles } from "./card.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & CardRootContract;

  let {
    variant = "default",
    children,
    class: className,
    ...rest
  }: Props = $props();

  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<div
  {...rest}
  class={slots.media({ class: cn(className), variant })}
  data-part="media"
  data-scope="card"
  data-variant={variant}
>
  {@render children?.()}
</div>
