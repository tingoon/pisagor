<script lang="ts">
import type { ColorPickerViewProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerViewProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.View {...rest} class={slots.view({ class: cn(className) })}>
  {@render children?.()}
</ColorPickerPrimitive.View>
