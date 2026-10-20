import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte";
import TagsInputShorthand from "./tags-input.svelte";
import ClearTrigger from "./tags-input-clear-trigger.svelte";
import Control from "./tags-input-control.svelte";
import Input from "./tags-input-input.svelte";
import Item from "./tags-input-item.svelte";
import ItemDeleteTrigger from "./tags-input-item-delete-trigger.svelte";
import ItemInput from "./tags-input-item-input.svelte";
import ItemPreview from "./tags-input-item-preview.svelte";
import ItemText from "./tags-input-item-text.svelte";
import Label from "./tags-input-label.svelte";
import Root from "./tags-input-root.svelte";
import RootProvider from "./tags-input-root-provider.svelte";

export type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
  TagsInputLabelProps,
} from "@ark-ui/svelte";

export const TagsInput = Object.assign(TagsInputShorthand, {
  ClearTrigger,
  Context: TagsInputPrimitive.Context,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemPreview,
  ItemText,
  Label,
  Root,
  RootProvider,
});
