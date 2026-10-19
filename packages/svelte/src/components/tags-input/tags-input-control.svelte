<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputControlProps as ArkControlProps,
    useTagsInputContext,
  } from "@ark-ui/svelte";
  import type { TagsInputRootContract } from "@pisagor/contracts";
  import { formControlGroupShellRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useLocale } from "../provider/context";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { useTagsInput } from "./tags-input.context";
  import TagsInputClearTrigger from "./tags-input-clear-trigger.svelte";

  const { m } = useLocale();

  type FormControlVariant = "primary" | "secondary";

  type Props = ArkControlProps &
    TagsInputRootContract & {
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

  const styles = useTagsInput();
  const slots = $derived(styles.slots);
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
    <TagsInputClearTrigger aria-label={m("tagsInput.clearAllTags")} />
  {/if}
</TagsInputPrimitive.Control>
