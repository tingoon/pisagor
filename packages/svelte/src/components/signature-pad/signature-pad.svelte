<script lang="ts">
import {
  type SignaturePadRootProps as ArkRootProps,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/svelte/signature-pad";
import type { SignaturePadProps as BaseSignaturePadProps } from "@pisagor/props";
import {
  buttonRecipe,
  formControlZoneRecipe,
  type SignaturePadRecipeSlot,
  signaturePadRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import ArrowCounterClockwiseIcon from "phosphor-svelte/lib/ArrowCounterClockwiseIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setSignaturePadContext } from "./signature-pad.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRootProps, "children"> & {
  classNames?: Partial<Record<SignaturePadRecipeSlot, string>>;
  invalid?: boolean;
  variant?: FormControlVariant;
} & BaseSignaturePadProps;

let {
  variant: variantProp,
  invalid = false,
  class: className,
  classNames,
  recipe = signaturePadRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));

setSignaturePadContext({
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
  <SignaturePadPrimitive.Control
    class={cn(
      formControlZoneRecipe({ surfaceVariant, variant }),
      slots.control({
        class: classNames?.control,
        variant,
      }),
    )}
    data-invalid={invalid || undefined}
    data-variant={variant}
  >
    <SignaturePadPrimitive.Segment
      class={slots.segment({ class: classNames?.segment })}
    />
    <SignaturePadPrimitive.ClearTrigger
      aria-label="Clear signature"
      class={cn(
        buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
        slots.clear({ class: classNames?.clear }),
      )}
      type="button"
    >
      <ArrowCounterClockwiseIcon />
    </SignaturePadPrimitive.ClearTrigger>
    <SignaturePadPrimitive.Guide
      class={slots.guide({ class: classNames?.guide })}
    />
  </SignaturePadPrimitive.Control>
</SignaturePadPrimitive.Root>
