<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ProseProps as BaseProseProps } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  html?: string;
} & BaseProseProps;

let {
  html,
  recipe = proseRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
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
