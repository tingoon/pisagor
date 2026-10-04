import type { TagsInputItemRecipe, TagsInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface TagsInputSlotsContextValue {
  slots: TagsInputRecipe;
}

interface TagsInputItemContextValue {
  slots: TagsInputItemRecipe;
}

export const {
  setContext: setTagsInputSlotsContext,
  getContext: useTagsInput,
} = createContext("TagsInput")<TagsInputSlotsContextValue>();

export const {
  setContext: setTagsInputItemContext,
  getContext: useTagsInputItem,
} = createContext("TagsInputItem")<TagsInputItemContextValue>();
