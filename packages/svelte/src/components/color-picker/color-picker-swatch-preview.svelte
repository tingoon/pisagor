<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
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
