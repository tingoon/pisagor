<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditablePreviewProps as ArkEditablePreviewProps,
  } from "@ark-ui/svelte";
  import type { ButtonRootContract } from "@pisagor/contracts";
  import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFormControlSurface } from "../surface/use-form-control-surface";

  type FormControlVariant = "primary" | "secondary";

  type Props = ArkEditablePreviewProps & {
    buttonRecipe?: typeof buttonRecipe;
    controlVariant?: FormControlVariant;
    size?: ButtonRootContract["size"];
    variant?: ButtonRootContract["variant"];
  };

  let {
    controlVariant = "primary",
    size = "md",
    variant = "outline",
    buttonRecipe: buttonRecipeProp = buttonRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const surfaceVariant = useFormControlSurface();
  const slots = $derived(
    editableRecipe({ surfaceVariant, variant: controlVariant }),
  );
</script>

<EditablePrimitive.Preview
  {...rest}
  class={cn(
    buttonRecipeProp({ clickEffect: false, size, variant }).base(),
    slots.preview(),
    className,
  )}
  data-variant={controlVariant}
>
  {@render children?.()}
</EditablePrimitive.Preview>
