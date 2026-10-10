<script lang="ts">
import {
  type SignaturePadControlProps,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/svelte/signature-pad";
import { formControlZoneRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useSignaturePad } from "./signature-pad.context";

type FormControlVariant = "primary" | "secondary";

type Props = SignaturePadControlProps & {
  invalid?: boolean;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
};

let {
  invalid,
  variant: variantProp,
  children,
  class: className,
  ...rest
}: Props = $props();

const styles = useSignaturePad();
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<SignaturePadPrimitive.Control
  {...rest}
  class={cn(
    formControlZoneRecipe({ surfaceVariant, variant }),
    styles.slots.control({ class: cn(className), variant }),
  )}
  data-invalid={invalid || undefined}
  data-variant={variant}
>
  {@render children?.()}
</SignaturePadPrimitive.Control>
