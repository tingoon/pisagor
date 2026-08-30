import type { ListboxItemRecipe, ListboxRecipe } from "@pisagor/recipes/listbox";
import { createContext } from "../../internal/utils";

interface ListboxContextValue {
  slots: ListboxRecipe;
}

interface ListboxItemContextValue {
  slots: ListboxItemRecipe;
}

export const { ListboxContext, useListbox } = createContext<ListboxContextValue>()({
  name: "Listbox",
});

export const { ListboxItemContext, useListboxItem } = createContext<ListboxItemContextValue>()({
  name: "ListboxItem",
});
