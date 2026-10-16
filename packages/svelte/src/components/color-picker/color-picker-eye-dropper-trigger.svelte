<script lang="ts">
import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte/color-picker";
import type { ClassValue } from "svelte/elements";
import { useMessageResolver } from "../provider/context";

type Props = {
  class?: ClassValue;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { children, class: className, ...rest }: Props = $props();
const t = useMessageResolver();
</script>

<ColorPickerPrimitive.EyeDropperTrigger
  aria-label={t("colorPicker.eyeDropper")}
  {...rest}
  class={className}
>
  {@render children?.()}
</ColorPickerPrimitive.EyeDropperTrigger>
