<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { useColorPicker } from "./color-picker.context";

type Props = {
  class?: string | undefined;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { children, class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.SwatchIndicator
  {...rest}
  class={slots.swatchIndicator({ class: className })}
>
  {@render children?.()}
</ColorPickerPrimitive.SwatchIndicator>
