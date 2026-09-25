<script lang="ts">
import type { PinInputRootProps } from "@ark-ui/svelte/pin-input";
import { PinInput as PinInputPrimitive } from "@ark-ui/svelte/pin-input";
import { inputOtpRecipe } from "@pisagor/recipes/input-otp";
import { cn } from "@pisagor/utils";
import { setInputOTPContext } from "./input-otp.context";

type Props = Omit<PinInputRootProps, "class" | "onValueChange"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  onValueChange?: (value: string[]) => void;
  recipe?: typeof inputOtpRecipe;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

let {
  children,
  otp = true,
  placeholder,
  onValueChange,
  recipe = inputOtpRecipe,
  class: className,
  size: _size,
  variant: _variant,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setInputOTPContext({
  get slots() {
    return slots;
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
