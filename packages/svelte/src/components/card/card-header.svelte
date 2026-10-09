<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./card.context";
import CardDescription from "./card-description.svelte";
import CardTitle from "./card-title.svelte";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
  description?: string;
  title?: string;
};

let { children, description, title, ...rest }: Props = $props();

const part = withContext(() => rest, { name: "Header" });
</script>

<Ark as="div" {...part.props}>
  {#if title}
    <CardTitle>{title}</CardTitle>
  {/if}

  {#if description}
    <CardDescription>{description}</CardDescription>
  {/if}

  {@render children?.()}
</Ark>
