<script lang="ts">
import {
  PinInput as PinInputPrimitive,
  type PinInputRootProps,
} from "@ark-ui/svelte/pin-input";
import type { InputOtpProps as BaseInputOtpProps } from "@pisagor/props";
import { inputOtpRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setInputOTPContext } from "./input-otp.context";

type Props = Omit<PinInputRootProps, "onValueChange"> & {
  children?: import("svelte").Snippet;
  onValueChange?: (value: string[]) => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
} & BaseInputOtpProps;

let {
  children,
  otp = true,
  placeholder,
  onValueChange,
  recipe = inputOtpRecipe,
  class: className,
  size,
  variant,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setInputOTPContext({
  get size() {
    return size;
  },
  get slots() {
    return slots;
  },
  get variant() {
    return variant;
  },
});

function handleValueChange(
  details: Parameters<NonNullable<PinInputRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(details.value);
}
</script>

<PinInputPrimitive.Root
  {...rest}
  class={slots.base()}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {otp}
  placeholder={placeholder ?? ""}
>
  <PinInputPrimitive.Control class={slots.control({ class: cn(className) })}>
    {@render children?.()}
  </PinInputPrimitive.Control>
  <PinInputPrimitive.HiddenInput />
</PinInputPrimitive.Root>
