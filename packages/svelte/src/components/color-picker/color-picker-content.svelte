<script lang="ts">
import {
  type ColorPickerContentProps,
  ColorPicker as ColorPickerPrimitive,
} from "@ark-ui/svelte/color-picker";
import { Portal } from "@ark-ui/svelte/portal";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

let { children, class: className, ...rest }: ColorPickerContentProps = $props();
const { slots } = useColorPicker();
</script>

<Portal>
  <ColorPickerPrimitive.Positioner>
    <ColorPickerPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className) })}
    >
      {@render children?.()}
    </ColorPickerPrimitive.Content>
  </ColorPickerPrimitive.Positioner>
</Portal>
