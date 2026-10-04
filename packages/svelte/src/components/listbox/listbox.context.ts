import type { ListboxItemRecipe, ListboxRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ListboxContextValue {
  slots: ListboxRecipe;
}

interface ListboxItemContextValue {
  slots: ListboxItemRecipe;
}

export const { setContext: setListboxContext, getContext: useListbox } =
  createContext("Listbox")<ListboxContextValue>();

const itemCtx = createContext("ListboxItem")<
  ListboxItemContextValue | undefined
>({
  defaultValue: undefined,
  strict: false,
});

export const setListboxItemContext = itemCtx.setContext;
export const useListboxItem = itemCtx.getContext;
