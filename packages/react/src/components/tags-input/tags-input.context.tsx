import type { TagsInputItemSlots, TagsInputSlots } from "@pisagor/recipes/tags-input";
import { createContext } from "../../internal/utils";

interface TagsInputContextValue {
  slots: TagsInputSlots;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemSlots;
}

export const { TagsInputContext: TagsInputSlotsContext, useTagsInput } =
  createContext<TagsInputContextValue>()({
    name: "TagsInput",
  });

export const { TagsInputItemContext, useTagsInputItem } =
  createContext<TagsInputItemContextValue>()({
    name: "TagsInputItem",
  });
