<script lang="ts">
  import type { DrawerHeaderContract } from "@pisagor/props";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./drawer.context";
  import DrawerDescription from "./drawer-description.svelte";
  import DrawerTitle from "./drawer-title.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    children?: Snippet;
    description?: string;
    title?: string;
  } & DrawerHeaderContract;

  let { children, description, title, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Header" });
</script>

<div {...part.props}>
  {#if title}
    <DrawerTitle>{title}</DrawerTitle>
  {/if}
  {#if description}
    <DrawerDescription>{description}</DrawerDescription>
  {/if}
  {@render children?.()}
</div>
