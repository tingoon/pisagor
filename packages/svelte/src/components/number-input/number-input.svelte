<script lang="ts">
import {
  NumberInput as NumberInputPrimitive,
  type NumberInputRootProps,
} from "@ark-ui/svelte/number-input";
import type { NumberInputProps as BaseNumberInputProps } from "@pisagor/props";
import {
  buttonRecipe,
  formControlGroupShellRecipe,
  numberInputRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
import InputClearButton from "../input/input-clear-button.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { Context } from "./number-input.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<NumberInputRootProps, "children" | "onValueChange"> & {
  children?: import("svelte").Snippet;
  clearable?: boolean;
  onValueChange?: (value: number) => void;
  placeholder?: string | null | undefined;
  size?: "sm" | "md" | "lg";
  variant?: FormControlVariant;
} & BaseNumberInputProps;

let {
  size = "md",
  variant: variantProp,
  clearable = false,
  children,
  placeholder,
  onValueChange,
  recipe = numberInputRecipe,
  class: className,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const triggerClass = $derived(
  cn(
    buttonRecipe({ clickEffect: false, variant: "ghost" }).base(),
    "rounded-none",
  ),
);

Context.set({
  get slots() {
    return slots;
  },
});

function handleValueChange(
  details: Parameters<NonNullable<NumberInputRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(Number(details.value));
}
</script>

<NumberInputPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-size={size}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {#if children}
    {@render children()}
  {:else}
    <NumberInputPrimitive.Control
      class={cn(
        slots.control(),
        formControlGroupShellRecipe({ size: "md", surfaceVariant, variant }),
      )}
      data-clearable={clearable || undefined}
      data-variant={variant}
    >
      <NumberInputPrimitive.DecrementTrigger
        aria-label="Decrement"
        class={cn(slots.decrementTrigger(), triggerClass)}
        type="button"
      >
        <MinusIcon aria-hidden="true" />
      </NumberInputPrimitive.DecrementTrigger>

      <NumberInputPrimitive.Input class={slots.input()} {placeholder} />

      <NumberInputPrimitive.Context>
        {#snippet render(
          api,
        )}
          {const hasValue =
            api().value !== undefined &&
            api().value !== null &&
            String(api().value).length > 0}
          {#if clearable && hasValue}
            <InputClearButton
              class={slots.clearTrigger()}
              onClear={() => api().setValue(Number.NaN)}
            />
          {/if}
        {/snippet}
      </NumberInputPrimitive.Context>

      <NumberInputPrimitive.IncrementTrigger
        aria-label="Increment"
        class={cn(slots.incrementTrigger(), triggerClass)}
        type="button"
      >
        <PlusIcon aria-hidden="true" />
      </NumberInputPrimitive.IncrementTrigger>
    </NumberInputPrimitive.Control>
  {/if}
</NumberInputPrimitive.Root>
