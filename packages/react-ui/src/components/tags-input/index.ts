import {
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputRoot,
  TagsInputRootProvider,
} from "./tags-input";

export type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemProps,
  TagsInputItemTextProps,
  TagsInputProps,
  TagsInputRootProps,
  TagsInputRootProviderProps,
} from "./tags-input";

export const TagsInput = Object.assign(TagsInputRoot, {
  ClearTrigger: TagsInputClearTrigger,
  Context: TagsInputContext,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  RootProvider: TagsInputRootProvider,
});
