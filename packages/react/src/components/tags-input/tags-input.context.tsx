import type { TagsInputItemVariants, TagsInputVariants } from "@pisagor/styles/ui/tags-input";
import { createContext } from "../../utils";

interface TagsInputContextValue {
  slots: TagsInputVariants;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemVariants;
}

export const { TagsInputContext: TagsInputSlotsContext, useTagsInput } =
  createContext<TagsInputContextValue>()({
    name: "TagsInput",
  });

export const { TagsInputItemContext, useTagsInputItem } =
  createContext<TagsInputItemContextValue>()({
    name: "TagsInputItem",
  });
