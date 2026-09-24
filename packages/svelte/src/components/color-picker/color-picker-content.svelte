<script lang="ts">
import type { ColorPickerContentProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { Portal } from "@ark-ui/svelte/portal";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerContentProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<Portal>
  <ColorPickerPrimitive.Positioner>
    <ColorPickerPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
      {@render children?.()}
    </ColorPickerPrimitive.Content>
  </ColorPickerPrimitive.Positioner>
</Portal>
