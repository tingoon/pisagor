<script lang="ts">
  import { Ark, ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useStyles } from "./color-picker.context";

  let { class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<Ark
  as="div"
  {...rest}
  class={slots.inputSwatch({ class: cn(className) })}
  data-part="input-swatch"
  data-scope="color-picker"
>
  <ColorPickerPrimitive.TransparencyGrid class={slots.inputSwatchGrid()} />
  <ColorPickerPrimitive.ValueSwatch class={slots.inputSwatchSwatch()} />
</Ark>
