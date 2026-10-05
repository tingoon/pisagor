<script lang="ts">
import {
  type TagsInputItemProps as ArkItemProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import type { TagsInputItemProps as BaseTagsInputItemProps } from "@pisagor/props";
import { tagsInputItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setTagsInputItemContext } from "./tags-input.context";
import TagsInputItemDeleteTrigger from "./tags-input-item-delete-trigger.svelte";
import TagsInputItemInput from "./tags-input-item-input.svelte";
import TagsInputItemPreview from "./tags-input-item-preview.svelte";
import TagsInputItemText from "./tags-input-item-text.svelte";

type Props = ArkItemProps & { showDelete?: boolean } & BaseTagsInputItemProps;

let {
  showDelete = true,
  children,
  recipe = tagsInputItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
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
