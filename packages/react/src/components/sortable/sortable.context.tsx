import type { SortableItemVariants } from "@pisagor/recipes/sortable";
import type { DragEvent, KeyboardEvent } from "react";
import { createContext } from "../../internal/utils";

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
  slots: SortableItemVariants;
}

export const { SortableContext, useSortable } = createContext<SortableContextValue>()({
  name: "Sortable",
});

export const { SortableItemContext, useSortableItem } = createContext<SortableItemContextValue>()({
  name: "SortableItem",
});
