<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useColorPicker } from "./color-picker.context";

  let {
    children,
    class: className,
    ...rest
  }: ColorPickerContentProps = $props();
  const styles = useColorPicker();
  const slots = $derived(styles.slots);
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
