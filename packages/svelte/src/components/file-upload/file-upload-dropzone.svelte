<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadDropzoneProps as ArkProps,
  } from "@ark-ui/svelte";
  import { formControlZoneRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { useFileUpload } from "./file-upload.context";

  type FormControlVariant = "primary" | "secondary";

  type Props = ArkProps & { variant?: FormControlVariant };

  let {
    variant: variantProp,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const styles = useFileUpload();
  const slots = $derived(styles.slots);
  const surfaceVariant = useFormControlSurface();
  const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<FileUploadPrimitive.Dropzone
  {...rest}
  class={cn(
    formControlZoneRecipe({ surfaceVariant, variant }),
    slots.dropzone(),
    className,
  )}
  data-variant={variant}
>
  {@render children?.()}
</FileUploadPrimitive.Dropzone>
