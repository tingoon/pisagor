<script lang="ts">
import type { PinInputInputProps } from "@ark-ui/svelte/pin-input";
import { PinInput as PinInputPrimitive } from "@ark-ui/svelte/pin-input";
import { inputRootRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useInputOTP } from "./input-otp.context";

type Props = Omit<PinInputInputProps, "class"> & {
  class?: string | undefined;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

let {
  size: sizeProp,
  variant: variantProp,
  class: className,
  index,
  ...rest
}: Props = $props();

const ctx = useInputOTP();
const surfaceVariant = useFormControlSurface();
const size = $derived(sizeProp ?? ctx.size ?? "md");
const variant = $derived(variantProp ?? ctx.variant ?? "primary");
</script>

<PinInputPrimitive.Input
  {...rest}
  class={cn(inputRootRecipe({ size, surfaceVariant, variant }), ctx.slots.input({ class: cn(className) }))}
  {index}
/>
