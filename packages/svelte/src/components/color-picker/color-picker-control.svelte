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

<ColorPickerPrimitive.Control
  {...rest}
  class={slots.control({ class: className })}
>
  {@render children?.()}
</ColorPickerPrimitive.Control>
