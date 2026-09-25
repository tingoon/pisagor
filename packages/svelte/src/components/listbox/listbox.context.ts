import type {
  ListboxItemRecipe,
  ListboxRecipe,
} from "@pisagor/recipes/listbox";
import { createContext } from "../../utils/create-context";

interface ListboxContextValue {
  slots: ListboxRecipe;
}

interface ListboxItemContextValue {
  slots: ListboxItemRecipe;
}

export const { setContext: setListboxContext, getContext: useListbox } =
  createContext<ListboxContextValue>({ name: "Listbox" });

const itemCtx = createContext<ListboxItemContextValue | undefined>({
  defaultValue: undefined,
  name: "ListboxItem",
  strict: false,
});

export const setListboxItemContext = itemCtx.setContext;
export const useListboxItem = itemCtx.getContext;
