<script lang="ts">
  import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte";
  import type { ClassValue } from "svelte/elements";
  import { useLocale } from "../provider/context";

  type Props = {
    class?: ClassValue;
    children?: import("svelte").Snippet;
    [key: string]: unknown;
  };
  let { children, class: className, ...rest }: Props = $props();
  const { m } = useLocale();
</script>

<ColorPickerPrimitive.EyeDropperTrigger
  aria-label={m("colorPicker.eyeDropper")}
  {...rest}
  class={className}
>
  {@render children?.()}
</ColorPickerPrimitive.EyeDropperTrigger>
