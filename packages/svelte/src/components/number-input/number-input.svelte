<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputRootProps,
  } from "@ark-ui/svelte";
  import type { NumberInputRootContract } from "@pisagor/contracts";
  import {
    buttonRecipe,
    formControlGroupShellRecipe,
    numberInputRecipe,
  } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
  import InputClearButton from "../input/input-clear-button.svelte";
  import { useLocale } from "../provider/context";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { Context } from "./number-input.context";

  const { m } = useLocale();

  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<NumberInputRootProps, "children" | "onValueChange"> & {
    children?: import("svelte").Snippet;
    clearable?: boolean;
    onValueChange?: (value: number) => void;
    placeholder?: string | null | undefined;
    size?: "sm" | "md" | "lg";
    variant?: FormControlVariant;
  } & NumberInputRootContract;

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
        formControlGroupShellRecipe({ size, surfaceVariant, variant }),
      )}
      data-clearable={clearable || undefined}
      data-variant={variant}
    >
      <NumberInputPrimitive.DecrementTrigger
        aria-label={m("numberInput.decrement")}
        class={cn(slots.decrementTrigger(), triggerClass)}
        type="button"
      >
        <MinusIcon aria-hidden="true" />
      </NumberInputPrimitive.DecrementTrigger>

      <NumberInputPrimitive.Input class={slots.input()} {placeholder} />

      <NumberInputPrimitive.Context>
        {#snippet render(api)}
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
        aria-label={m("numberInput.increment")}
        class={cn(slots.incrementTrigger(), triggerClass)}
        type="button"
      >
        <PlusIcon aria-hidden="true" />
      </NumberInputPrimitive.IncrementTrigger>
    </NumberInputPrimitive.Control>
  {/if}
</NumberInputPrimitive.Root>
