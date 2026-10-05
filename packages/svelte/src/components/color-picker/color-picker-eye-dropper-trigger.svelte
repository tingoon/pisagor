<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import type { ClassValue } from "svelte/elements";

type Props = {
  class?: ClassValue;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { children, class: className, ...rest }: Props = $props();
</script>

<ColorPickerPrimitive.EyeDropperTrigger {...rest} class={className}>
  {@render children?.()}
</ColorPickerPrimitive.EyeDropperTrigger>
