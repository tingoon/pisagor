<script lang="ts">
import type { TagsInputItemProps as ArkItemProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { tagsInputItemRecipe } from "@pisagor/recipes/tags-input";
import { cn } from "@pisagor/utils";
import { setTagsInputItemContext } from "./tags-input.context";
import TagsInputItemDeleteTrigger from "./tags-input-item-delete-trigger.svelte";
import TagsInputItemInput from "./tags-input-item-input.svelte";
import TagsInputItemPreview from "./tags-input-item-preview.svelte";
import TagsInputItemText from "./tags-input-item-text.svelte";

type Props = Omit<ArkItemProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof tagsInputItemRecipe;
  showDelete?: boolean;
};

let {
  showDelete = true,
  children,
  itemRecipe = tagsInputItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(itemRecipe());
setTagsInputItemContext({
  get slots() {
    return slots;
  },
});
</script>

<TagsInputPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  <TagsInputItemPreview>
    <TagsInputItemText>
      {#if children}
        {@render children()}
      {:else}
        {rest.value}
      {/if}
    </TagsInputItemText>
    {#if showDelete}
      <TagsInputItemDeleteTrigger />
    {/if}
  </TagsInputItemPreview>
  <TagsInputItemInput />
</TagsInputPrimitive.Item>
