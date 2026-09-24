<script lang="ts">
import type { TagsInputControlProps as ArkControlProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive, useTagsInputContext } from "@ark-ui/svelte/tags-input";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useTagsInput } from "./tags-input.context";
import TagsInputClearTrigger from "./tags-input-clear-trigger.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<ArkControlProps, "class"> &
  Pick<FormControlGroupShellVariantProps, "size" | "variant"> & {
    class?: string | undefined;
    clearable?: boolean;
  };

let {
  size = "md",
  variant: variantProp,
  clearable = false,
  children,
  class: className,
  ...rest
}: Props = $props();

const { slots } = useTagsInput();
const api = useTagsInputContext();
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
</script>

<TagsInputPrimitive.Control
  {...rest}
  class={cn(
  formControlGroupShellRecipe({ size, surfaceVariant, variant }),
  slots.control({ class: cn(className) }),
)}
>
  {@render children?.()}
  {#if clearable && api().value.length > 0}
    <TagsInputClearTrigger aria-label="Clear all tags" />
  {/if}
</TagsInputPrimitive.Control>
