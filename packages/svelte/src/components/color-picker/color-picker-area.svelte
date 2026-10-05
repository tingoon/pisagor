<script lang="ts">
import type { ColorPickerAreaProps } from "@ark-ui/svelte/color-picker";
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = Omit<ColorPickerAreaProps, "class"> & {
  class?: string | undefined;
  showDots?: boolean;
};
let { children, class: className, showDots = false, ...rest }: Props = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.Area
  {...rest}
  class={slots.area({
    class: cn(
      {
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
          showDots,
      },
      className,
    ),
  })}
>
  <ColorPickerPrimitive.AreaBackground class={slots.areaBackground()} />
  {#if children}
    {@render children()}
  {:else}
    <ColorPickerPrimitive.AreaThumb class={slots.areaThumb()} />
  {/if}
</ColorPickerPrimitive.Area>
