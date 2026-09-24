<script lang="ts">
import type { SignaturePadRootProps as ArkRootProps } from "@ark-ui/svelte/signature-pad";
import { SignaturePad as SignaturePadPrimitive } from "@ark-ui/svelte/signature-pad";
import { buttonRecipe } from "@pisagor/recipes/button";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { type SignaturePadRecipeSlot, signaturePadRecipe } from "@pisagor/recipes/signature-pad";
import { cn } from "@pisagor/utils";
import ArrowCounterClockwiseIcon from "phosphor-svelte/lib/ArrowCounterClockwiseIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setSignaturePadContext } from "./signature-pad.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkRootProps, "class" | "children"> & {
  class?: string | undefined;
  classNames?: Partial<Record<SignaturePadRecipeSlot, string>>;
  invalid?: boolean;
  recipe?: typeof signaturePadRecipe;
  variant?: FormControlVariant;
};

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
    class: cn(variant === "primary" && "shadow-xs/5", classNames?.control),
  }),
)}
    data-invalid={invalid || undefined}
    data-variant={variant}
  >
    <SignaturePadPrimitive.Segment class={slots.segment({ class: cn(classNames?.segment) })} />
    <SignaturePadPrimitive.ClearTrigger
      aria-label="Clear signature"
      class={cn(
  buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
  slots.clear({ class: cn(classNames?.clear) }),
)}
      type="button"
    >
      <ArrowCounterClockwiseIcon />
    </SignaturePadPrimitive.ClearTrigger>
    <SignaturePadPrimitive.Guide class={slots.guide({ class: cn(classNames?.guide) })} />
  </SignaturePadPrimitive.Control>
</SignaturePadPrimitive.Root>
