import type { SortableItemRecipe } from "@pisagor/recipes";
import { sortableItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
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

const root = createContext("Sortable")<SortableContextValue>();
export const setSortableContext = root.setContext;
export const useSortable = root.getContext;

export const {
  Context: SortableItemStylesContext,
  useStyles: useSortableItemStyles,
  withContext: withSortableItemContext,
  withProvider: withSortableItemProvider,
} = createSlotRecipeContext({
  name: "Sortable",
  recipe: sortableItemRecipe,
});

export interface SortableItemStateValue {
  id: string;
  isDragging: boolean;
}

const itemState = createContext("SortableItemState")<SortableItemStateValue>();
export const setSortableItemStateContext = itemState.setContext;
export const useSortableItemState = itemState.getContext;

export function useSortableItem() {
  const styles = useSortableItemStyles();
  const state = useSortableItemState();
  return {
    get id() {
      return state.id;
    },
    get isDragging() {
      return state.isDragging;
    },
    get slots() {
      return styles.slots;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setSortableItemContext(
  value: SortableItemStateValue & { slots: SortableItemRecipe },
) {
  SortableItemStylesContext.set({
    get slots() {
      return value.slots;
    },
  });
  setSortableItemStateContext({
    get id() {
      return value.id;
    },
    get isDragging() {
      return value.isDragging;
    },
  });
}
