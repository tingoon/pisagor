import type { ListboxItemSlots, ListboxSlots } from "@pisagor/recipes/listbox";
import { createContext } from "../../internal/utils";

interface ListboxContextValue {
  slots: ListboxSlots;
}

interface ListboxItemContextValue {
  slots: ListboxItemSlots;
}

export const { ListboxContext, useListbox } = createContext<ListboxContextValue>()({
  name: "Listbox",
});

export const { ListboxItemContext, useListboxItem } = createContext<ListboxItemContextValue>()({
  name: "ListboxItem",
});
