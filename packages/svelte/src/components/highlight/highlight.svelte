<script lang="ts">
import type { HighlightProps as ArkHighlightProps } from "@ark-ui/svelte/highlight";
import { Highlight as HighlightPrimitive } from "@ark-ui/svelte/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";
import { cn } from "@pisagor/utils";

type Props = Omit<ArkHighlightProps, "class"> & {
  class?: string | undefined;
  recipe?: typeof highlightRecipe;
};

let { recipe = highlightRecipe, class: className, ...rest }: Props = $props();
</script>

<HighlightPrimitive {...rest} class={recipe({ class: cn(className) })} />
