<script lang="ts">
import type { ColorPickerAreaProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerAreaProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.Area {...rest} class={slots.area({ class: cn(className) })}>
  <ColorPickerPrimitive.AreaBackground class={slots.areaBackground()} />
  {#if children}
    {@render children()}
  {:else}
    <ColorPickerPrimitive.AreaThumb class={slots.areaThumb()} />
  {/if}
</ColorPickerPrimitive.Area>
