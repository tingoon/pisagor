<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadRootProps,
  } from "@ark-ui/svelte";
  import type { SignaturePadRootContract } from "@pisagor/contracts";
  import { signaturePadRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { Context } from "./signature-pad.context";

  type Props = SignaturePadRootProps & {
    /** Marks the control as invalid for styling and assistive tech. */
    invalid?: boolean;
  } & SignaturePadRootContract;

  let {
    invalid = false,
    children,
    recipe = signaturePadRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());

  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<SignaturePadPrimitive.Root
  {...rest}
  aria-invalid={invalid || undefined}
  class={slots.base({ class: cn(className) })}
  data-invalid={invalid || undefined}
>
  {@render children?.()}
</SignaturePadPrimitive.Root>
