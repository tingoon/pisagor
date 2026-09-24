import type { TagsInputItemRecipe, TagsInputRecipe } from "@pisagor/recipes/tags-input";
import { createContext } from "../../utils/create-context";

interface TagsInputSlotsContextValue {
  slots: TagsInputRecipe;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemRecipe;
}

export const { setContext: setTagsInputSlotsContext, getContext: useTagsInput } =
  createContext<TagsInputSlotsContextValue>({ name: "TagsInput" });

export const { setContext: setTagsInputItemContext, getContext: useTagsInputItem } =
  createContext<TagsInputItemContextValue>({ name: "TagsInputItem" });
