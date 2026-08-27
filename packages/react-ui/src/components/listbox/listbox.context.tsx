import type { ListboxItemVariants, ListboxVariants } from "@pisagor/recipes/listbox";
import { createContext } from "../../utils";

interface ListboxContextValue {
  slots: ListboxVariants;
}

interface ListboxItemContextValue {
  slots: ListboxItemVariants;
}

export const { ListboxContext, useListbox } = createContext<ListboxContextValue>()({
  name: "Listbox",
});

export const { ListboxItemContext, useListboxItem } = createContext<ListboxItemContextValue>()({
  name: "ListboxItem",
});
