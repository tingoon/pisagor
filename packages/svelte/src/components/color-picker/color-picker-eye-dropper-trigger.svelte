<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";

type Props = {
  class?: string | undefined;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { children, class: className, ...rest }: Props = $props();
</script>

<ColorPickerPrimitive.EyeDropperTrigger {...rest} class={className}>
  {@render children?.()}
</ColorPickerPrimitive.EyeDropperTrigger>
