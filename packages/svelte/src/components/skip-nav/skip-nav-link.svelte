<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { skipNavRecipe } from "@pisagor/recipes/skip-nav";
import { cn } from "@pisagor/utils";
import type { HTMLAnchorAttributes } from "svelte/elements";

const SKIP_NAV_ID = "skip-nav-content";

type Props = Omit<HTMLAnchorAttributes, "class" | "href" | "id"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  id?: string;
  recipe?: typeof skipNavRecipe;
};

let {
  id = SKIP_NAV_ID,
  recipe = skipNavRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
</script>

<Ark
  as="a"
  {...rest}
  class={slots.link({ class: cn(className) })}
  data-part="link"
  data-scope="skip-nav"
  href={`#${id}`}
>
  {#if children}
    {@render children()}
  {:else}
    Skip to content
  {/if}
</Ark>
