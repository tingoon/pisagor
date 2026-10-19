<script lang="ts">
  import type { PopoverHeaderContract } from "@pisagor/contracts";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./popover.context";
  import PopoverDescription from "./popover-description.svelte";
  import PopoverTitle from "./popover-title.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    children?: import("svelte").Snippet;
    description?: string;
    title?: string;
  } & PopoverHeaderContract;

  let { children, description, title, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Header" });
</script>

<div {...part.props}>
  {#if title}
    <PopoverTitle>{title}</PopoverTitle>
  {/if}
  {#if description}
    <PopoverDescription>{description}</PopoverDescription>
  {/if}
  {@render children?.()}
</div>
