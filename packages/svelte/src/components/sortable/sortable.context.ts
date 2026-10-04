import type { SortableItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface SortableContextValue {
  activeId: string | null;
  disabled: boolean;
  endDrag: () => void;
  getItemProps: (id: string) => Record<string, unknown>;
  hasHandle: (id: string) => boolean;
  moveItem: (id: string, delta: -1 | 1) => void;
  orientation: "vertical" | "horizontal";
  registerHandle: (id: string) => void;
  startDrag: (id: string, event: DragEvent) => void;
  unregisterHandle: (id: string) => void;
}

interface SortableItemContextValue {
  id: string;
  isDragging: boolean;
  slots: SortableItemRecipe;
}

const root = createContext("Sortable")<SortableContextValue>();
const item = createContext("SortableItem")<SortableItemContextValue>();

export const setSortableContext = root.setContext;
export const useSortable = root.getContext;
export const setSortableItemContext = item.setContext;
export const useSortableItem = item.getContext;
