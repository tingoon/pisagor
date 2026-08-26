import type { TagsInputVariants } from "@pisagor/styles/ui/tags-input";
import { createContext } from "../../utils";

interface TagsInputContextValue {
  slots: TagsInputVariants;
}

export const { TagsInputContext: TagsInputSlotsContext, useTagsInput } =
  createContext<TagsInputContextValue>()({
    name: "TagsInput",
  });
