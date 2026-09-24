<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { proseRecipe } from "@pisagor/recipes/prose";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  html?: string;
  recipe?: typeof proseRecipe;
};

let { html, recipe = proseRecipe, class: className, children, ...rest }: Props = $props();
</script>

{#if html}
  <Ark
    as="div"
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@html html}
  </Ark>
{:else}
  <Ark
    as="div"
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@render children?.()}
  </Ark>
{/if}
