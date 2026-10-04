<script lang="ts">
import type { TagsInputRootProps as ArkRootProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import type { TagsInputProps as BaseTagsInputProps } from "@pisagor/props";
import { type FormControlGroupShellVariantProps, tagsInputRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setTagsInputSlotsContext } from "./tags-input.context";
import TagsInputControl from "./tags-input-control.svelte";
import TagsInputInput from "./tags-input-input.svelte";
import TagsInputItem from "./tags-input-item.svelte";

type Props = Omit<ArkRootProps, "class" | "onValueChange"> &
  Pick<FormControlGroupShellVariantProps, "size" | "variant"> &
  {
    class?: string | undefined;
    clearable?: boolean;
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
  } & BaseTagsInputProps;

let {
  size = "md",
  variant,
  clearable,
  children,
  editable = false,
  placeholder,
  onValueChange,
  recipe = tagsInputRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setTagsInputSlotsContext({
  get slots() {
    return slots;
  },
});

function handleValueChange(details: { value: string[] }) {
  onValueChange?.(details.value);
}
</script>

<TagsInputPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-size={size}
  {editable}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  <TagsInputControl {clearable} {size} {variant}>
    <TagsInputPrimitive.Context>
      {#snippet render(
  api,
)}
        {#each api().value as value, index (value)}
          <TagsInputItem {index} {value} />
        {/each}
      {/snippet}
    </TagsInputPrimitive.Context>
    {@render children?.()}
    <TagsInputInput {placeholder} />
  </TagsInputControl>
  <TagsInputPrimitive.HiddenInput />
</TagsInputPrimitive.Root>
