<script lang="ts">
import type { PinInputInputProps } from "@ark-ui/svelte/pin-input";
import { PinInput as PinInputPrimitive } from "@ark-ui/svelte/pin-input";
import { inputRootRecipe } from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useInputOTP } from "./input-otp.context";

type Props = Omit<PinInputInputProps, "class"> & {
  class?: string | undefined;
  variant?: "primary" | "secondary";
};

let { variant: variantProp, class: className, index, ...rest }: Props = $props();

const { slots } = useInputOTP();
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? "primary");
</script>

<PinInputPrimitive.Input
  {...rest}
  class={cn(inputRootRecipe({ size: "md", surfaceVariant, variant }), slots.input({ class: cn(className) }))}
  {index}
/>
