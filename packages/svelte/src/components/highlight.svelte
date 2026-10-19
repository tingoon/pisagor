<script lang="ts">
  import {
    Highlight as HighlightPrimitive,
    type HighlightProps as ArkHighlightProps,
  } from "@ark-ui/svelte";
  import type { HighlightRootContract } from "@pisagor/contracts";
  import { highlightRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";

  type Props = ArkHighlightProps & HighlightRootContract;

  let { recipe = highlightRecipe, class: className, ...rest }: Props = $props();
</script>

<HighlightPrimitive {...rest} class={recipe({ class: cn(className) })} />
