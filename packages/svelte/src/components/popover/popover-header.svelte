<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./popover.context";
import PopoverDescription from "./popover-description.svelte";
import PopoverTitle from "./popover-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  children?: import("svelte").Snippet;
  /** The description of the popover header */
  description?: string;
  /** The title of the popover header */
  title?: string;
};

let { children, description, title, ...rest }: Props = $props();
const part = withContext(() => rest, { name: "Header" });
</script>

<Ark as="div" {...part.props}>
  {#if title}
    <PopoverTitle>{title}</PopoverTitle>
  {/if}
  {#if description}
    <PopoverDescription>{description}</PopoverDescription>
  {/if}
  {@render children?.()}
</Ark>
