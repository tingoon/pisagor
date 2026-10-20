<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerEyeDropperTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerEyeDropperTriggerProps = $props();
  const { m } = useLocale();
  // Localized default label; pass your own button / icon via `asChild`.
  const part = withContext(
    () => ({ "aria-label": m("colorPicker.eyeDropper"), ...rest }),
    { name: "EyeDropperTrigger" },
  );
</script>

<ColorPickerPrimitive.EyeDropperTrigger {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.EyeDropperTrigger>
