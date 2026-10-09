<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./drawer.context";
import DrawerDescription from "./drawer-description.svelte";
import DrawerTitle from "./drawer-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  children?: Snippet;
  description?: string;
  title?: string;
};

let { children, description, title, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Header" });
</script>

<Ark as="div" {...part.props}>
  {#if title}
    <DrawerTitle>{title}</DrawerTitle>
  {/if}
  {#if description}
    <DrawerDescription>{description}</DrawerDescription>
  {/if}
  {@render children?.()}
</Ark>
