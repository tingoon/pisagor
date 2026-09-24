<script lang="ts">
import type { AngleSliderValueTextProps } from "@ark-ui/svelte/angle-slider";
import {
  AngleSlider as AngleSliderPrimitive,
  useAngleSliderContext,
} from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";

type Props = Omit<AngleSliderValueTextProps, "class"> & {
  class?: string | undefined;
  prefix?: string;
  suffix?: string;
};

let { prefix = "", suffix = "", class: className, ...rest }: Props = $props();
const api = useAngleSliderContext();
const { slots } = useCircularSlider();
const value = $derived(api().value);
</script>

<AngleSliderPrimitive.ValueText {...rest} class={slots.value({ class: cn(className) })}>
  {prefix} {value} {suffix}
</AngleSliderPrimitive.ValueText>
