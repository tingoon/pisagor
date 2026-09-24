<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  FormControlGroupShellVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  };

let { size = "md", variant: variantProp, class: className, children, ...rest }: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<Ark
  as="div"
  {...rest}
  class={formControlGroupShellRecipe({
  class: cn(className),
  size,
  surfaceVariant,
  variant,
})}
  data-part="root"
  data-scope="input-group"
  data-size={size}
  data-variant={variant}
  role="group"
>
  {@render children?.()}
</Ark>
