<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { kbdGroupRecipe } from "@pisagor/recipes/kbd";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof kbdGroupRecipe;
};

let { recipe = kbdGroupRecipe, class: className, children, ...rest }: Props = $props();
</script>

<Ark as="div" {...rest} class={recipe({ class: cn(className) })} data-part="group" data-scope="kbd">
  {@render children?.()}
</Ark>
