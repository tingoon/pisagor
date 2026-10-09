<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useColorPicker } from "./color-picker.context";

let { class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
const styles = useColorPicker();
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
