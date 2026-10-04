import type { TagsInputItemRecipe, TagsInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface TagsInputContextValue {
  slots: TagsInputRecipe;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemRecipe;
}

export const { TagsInputContext: TagsInputSlotsContext, useTagsInput } =
  createContext("TagsInput")<TagsInputContextValue>();

export const { TagsInputItemContext, useTagsInputItem } =
  createContext("TagsInputItem")<TagsInputItemContextValue>();
