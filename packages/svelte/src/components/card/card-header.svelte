<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory";
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./card.context";
  import CardDescription from "./card-description.svelte";
  import CardTitle from "./card-title.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    children?: import("svelte").Snippet;
    description?: string | import("svelte").Snippet;
    title?: string | import("svelte").Snippet;
  };

  let { children, description, title, ...rest }: Props = $props();

  const part = withContext(() => rest, { name: "Header" });
</script>

<Ark as="div" {...part.props}>
  {#if title != null}
    <CardTitle
      >{#if typeof title === "string"}
        {title}
      {:else}
        {@render title()}
      {/if}</CardTitle
    >
  {/if}

  {#if description != null}
    <CardDescription
      >{#if typeof description === "string"}
        {description}
      {:else}
        {@render description()}
      {/if}</CardDescription
    >
  {/if}

  {@render children?.()}
</Ark>
