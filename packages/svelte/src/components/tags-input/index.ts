import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import TagsInputClearTrigger from "./tags-input-clear-trigger.svelte";
import TagsInputControl from "./tags-input-control.svelte";
import TagsInputInput from "./tags-input-input.svelte";
import TagsInputItem from "./tags-input-item.svelte";
import TagsInputItemDeleteTrigger from "./tags-input-item-delete-trigger.svelte";
import TagsInputItemInput from "./tags-input-item-input.svelte";
import TagsInputItemPreview from "./tags-input-item-preview.svelte";
import TagsInputItemText from "./tags-input-item-text.svelte";
import TagsInputRoot from "./tags-input-root.svelte";

export const TagsInput = Object.assign(TagsInputRoot, {
  ClearTrigger: TagsInputClearTrigger,
  Context: TagsInputPrimitive.Context,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  Root: TagsInputRoot,
});
