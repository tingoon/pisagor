<script lang="ts">
import type { FileUploadDropzoneProps as ArkProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { formControlZoneRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useFileUpload } from "./file-upload.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkProps, "class"> & {
  class?: string | undefined;
  variant?: FormControlVariant;
};

let { variant: variantProp, class: className, children, ...rest }: Props = $props();
const { slots } = useFileUpload();
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<FileUploadPrimitive.Dropzone
  {...rest}
  class={cn(formControlZoneRecipe({ surfaceVariant, variant }), slots.dropzone(), className)}
  data-variant={variant}
>
  {@render children?.()}
</FileUploadPrimitive.Dropzone>
