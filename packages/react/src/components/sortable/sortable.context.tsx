import type { DragEvent, KeyboardEvent } from "react";
import { createContext } from "../../utils";

type SortableOrientation = "vertical" | "horizontal";

interface SortableContextValue {
  activeId: string | null;
  disabled: boolean;
  endDrag: () => void;
  getItemProps: (id: string) => {
    "aria-disabled"?: boolean;
    "data-dragging"?: string;
    "data-drop-target"?: string;
    draggable: boolean;
    onDragEnd: (event: DragEvent) => void;
    onDragEnter: (event: DragEvent) => void;
    onDragLeave: (event: DragEvent) => void;
    onDragOver: (event: DragEvent) => void;
    onDragStart: (event: DragEvent) => void;
    onDrop: (event: DragEvent) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    tabIndex: number;
  };
  hasHandle: (id: string) => boolean;
  moveItem: (id: string, delta: -1 | 1) => void;
  orientation: SortableOrientation;
  registerHandle: (id: string) => void;
  startDrag: (id: string, event: DragEvent) => void;
  unregisterHandle: (id: string) => void;
}

interface SortableItemContextValue {
  id: string;
  isDragging: boolean;
}

const [SortableContext, useSortableContext] = createContext<SortableContextValue>({
  name: "Sortable",
});

const [SortableItemContext, useSortableItemContext] = createContext<SortableItemContextValue>({
  name: "SortableItem",
});

/**
 * Access the nearest Sortable root context.
 */
function useSortable() {
  return useSortableContext();
}

export {
  SortableContext,
  SortableItemContext,
  useSortable,
  useSortableContext,
  useSortableItemContext,
};
