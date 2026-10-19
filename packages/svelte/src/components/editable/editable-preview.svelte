<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditablePreviewProps as ArkEditablePreviewProps,
  } from "@ark-ui/svelte";
  import type { ButtonRootContract } from "@pisagor/contracts";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { useStyles } from "./editable.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = ArkEditablePreviewProps & {
    buttonRecipe?: typeof buttonRecipe;
    controlVariant?: FormControlVariant;
    size?: ButtonRootContract["size"];
    variant?: ButtonRootContract["variant"];
  };

  let {
    controlVariant,
    size = "md",
    variant = "outline",
    buttonRecipe: buttonRecipeProp = buttonRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const styles = useStyles();
  const slots = $derived(styles.slots);
  const surfaceVariant = useFormControlSurface();
  const resolvedVariant = $derived(
    controlVariant ?? ("primary" as FormControlVariant),
  );

  const previewShellClass = $derived(
    resolvedVariant === "secondary" && surfaceVariant === "default"
      ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
      : resolvedVariant === "secondary" && surfaceVariant
        ? "bg-background shadow-none hover:bg-background dark:hover:bg-background/90"
        : resolvedVariant === "secondary"
          ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
          : undefined,
  );
</script>

<EditablePrimitive.Preview
  {...rest}
  class={cn(
    buttonRecipeProp({ clickEffect: false, size, variant }).base(),
    previewShellClass,
    slots.preview(),
    previewShellClass ? "dark:hover:bg-transparent" : undefined,
    className,
  )}
  data-variant={resolvedVariant}
>
  {@render children?.()}
</EditablePrimitive.Preview>
