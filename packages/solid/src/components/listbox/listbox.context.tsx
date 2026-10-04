import type { ListboxItemRecipe, ListboxRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface ListboxContextValue {
  slots: ListboxRecipe;
}

interface ListboxItemContextValue {
  slots: ListboxItemRecipe;
}

export const { ListboxContext, useListbox } =
  createContext("Listbox")<ListboxContextValue>();

export const { ListboxItemContext, useListboxItem } =
  createContext("ListboxItem")<ListboxItemContextValue>();
