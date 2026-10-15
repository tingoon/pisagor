<script lang="ts">
import {
  type ColorPickerAreaProps,
  ColorPicker as ColorPickerPrimitive,
} from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

type Props = ColorPickerAreaProps & { showDots?: boolean };
let { children, class: className, showDots = false, ...rest }: Props = $props();
const styles = useColorPicker();
const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.Area
  {...rest}
  class={slots.area({
    class: cn(
      {
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-inherit after:bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-on-media)_20%,transparent)_1px,transparent_1px)] after:bg-size-(--spacing(2))":
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
