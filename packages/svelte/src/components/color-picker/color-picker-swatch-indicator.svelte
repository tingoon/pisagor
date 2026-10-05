<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import type { ClassValue } from "svelte/elements";
import { useColorPicker } from "./color-picker.context";

type Props = {
  class?: ClassValue;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { children, class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.SwatchIndicator
  {...rest}
  class={slots.swatchIndicator({ class: cn(className) })}
>
  {@render children?.()}
</ColorPickerPrimitive.SwatchIndicator>
