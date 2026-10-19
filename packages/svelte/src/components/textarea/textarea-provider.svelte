<script lang="ts">
  import type { TextareaRootContract } from "@pisagor/contracts";
  import { textareaRecipe } from "@pisagor/recipes";
  import type { Snippet } from "svelte";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { Context } from "./textarea.context";

  type Props = TextareaRootContract & {
    children?: Snippet;
  };

  let {
    children,
    size = "md",
    variant,
    surfaceVariant,
    recipe = textareaRecipe,
  }: Props = $props();

  const surfaceFromContext = useFormControlSurface();
  const resolved = $derived({
    size,
    surfaceVariant: surfaceVariant ?? surfaceFromContext,
    variant,
  });
  const slots = $derived(recipe(resolved));

  Context.set({
    get slots() {
      return slots;
    },
    get variants() {
      return resolved as never;
    },
  });
</script>

{@render children?.()}
