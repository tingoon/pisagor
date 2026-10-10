<script lang="ts">
import {
  type HighlightProps as ArkHighlightProps,
  Highlight as HighlightPrimitive,
} from "@ark-ui/svelte/highlight";
import type { HighlightProps as BaseHighlightProps } from "@pisagor/props";
import { highlightRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = ArkHighlightProps & BaseHighlightProps;

let { recipe = highlightRecipe, class: className, ...rest }: Props = $props();
</script>

<HighlightPrimitive {...rest} class={recipe({ class: cn(className) })} />
