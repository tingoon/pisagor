<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { SkipNavRootContract } from "@pisagor/props";
  import { skipNavRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const SKIP_NAV_ID = "skip-nav-content";

  type Props = Omit<HTMLAnchorAttributes, "href" | "id"> & {
    children?: import("svelte").Snippet;
    id?: string;
  } & SkipNavRootContract;

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
