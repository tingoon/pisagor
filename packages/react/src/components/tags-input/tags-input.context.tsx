import type { TagsInputItemRecipe, TagsInputRecipe } from "@pisagor/recipes/tags-input";
import { createContext } from "../../utils";

interface TagsInputContextValue {
  slots: TagsInputRecipe;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemRecipe;
}

export const { TagsInputContext: TagsInputSlotsContext, useTagsInput } =
  createContext<TagsInputContextValue>()({
    name: "TagsInput",
  });

export const { TagsInputItemContext, useTagsInputItem } =
  createContext<TagsInputItemContextValue>()({
    name: "TagsInputItem",
  });
