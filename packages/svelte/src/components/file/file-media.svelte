<script lang="ts">
  import type { FileRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import { FileIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useStyles } from "./file.context";

  type Props = HTMLAttributes<HTMLDivElement> & FileRootContract;

  let {
    variant = "icon",
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
  data-scope="file"
  data-variant={variant}
>
  {#if children}
    {@render children()}
  {:else}
    <FileIcon />
  {/if}
</div>
