<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardRootProps,
  } from "@ark-ui/svelte";
  import type { ClipboardRootContract } from "@pisagor/contracts";
  import { clipboardRecipe } from "@pisagor/recipes";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { Context } from "./clipboard.context";

  type Props = ClipboardRootProps & ClipboardRootContract;

  let {
    size = "md",
    valueSize,
    variant,
    surfaceVariant,
    recipe = clipboardRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const surfaceFromContext = useFormControlSurface();
  const resolved = $derived({
    size,
    surfaceVariant: surfaceVariant ?? surfaceFromContext,
    valueSize: valueSize ?? size,
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

<ClipboardPrimitive.Root {...rest} class={className}>
  {@render children?.()}
</ClipboardPrimitive.Root>
