import { ark } from "@ark-ui/react/factory";
import { DotsSixVerticalIcon } from "@phosphor-icons/react";
import {
  sortableHandleVariants,
  sortableItemContentVariants,
  sortableItemVariants,
  sortableVariants,
} from "@pisagor/styles/ui/sortable";
import { cn } from "@pisagor/utils";
import {
  type ComponentProps,
  type DragEvent,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

// #region Types
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

export interface SortableRootProps
  extends Omit<ComponentProps<typeof ark.div>, "onDragStart">,
    WithTestId {
  /**
   * Ordered item ids. Reorder callbacks receive a new array of the same ids.
   */
  items: string[];
  /**
   * Called with the reordered ids after a successful drop or keyboard move.
   */
  onValueChange?: (items: string[]) => void;
  /**
   * Layout axis for drop indicators and keyboard moves.
   *
   * @defaultValue "vertical"
   */
  orientation?: SortableOrientation;
  /**
   * Disables drag and keyboard reordering.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  children?: ReactNode;
}

export interface SortableItemProps extends ComponentProps<typeof ark.div> {
  /** Stable id matching an entry in `Sortable.Root` `items`. */
  value: string;
}

export interface SortableHandleProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Context
const [SortableContext, useSortableContext] = createContext<SortableContextValue>({
  name: "Sortable",
});

const [SortableItemContext, useSortableItemContext] = createContext<SortableItemContextValue>({
  name: "SortableItem",
});
// #endregion

// #region Hooks
function reorder(list: string[], from: number, to: number) {
  if (from === to || from < 0 || to < 0) {
    return list;
  }

  const next = [...list];
  const [moved] = next.splice(from, 1);

  if (moved === undefined) {
    return list;
  }

  next.splice(to, 0, moved);

  return next;
}

/**
 * Access the nearest Sortable root context.
 */
export function useSortable() {
  return useSortableContext();
}
// #endregion

// #region Parts
export function SortableRoot({
  items,
  onValueChange,
  orientation = "vertical",
  disabled = false,
  className,
  children,
  testId,
  ...rest
}: SortableRootProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [handleIds, setHandleIds] = useState(() => new Set<string>());
  const activeIdRef = useRef<string | null>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const hasHandle = useCallback((id: string) => handleIds.has(id), [handleIds]);

  const registerHandle = useCallback((id: string) => {
    setHandleIds((current) => {
      if (current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.add(id);

      return next;
    });
  }, []);

  const unregisterHandle = useCallback((id: string) => {
    setHandleIds((current) => {
      if (!current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.delete(id);

      return next;
    });
  }, []);

  const startDrag = useCallback((id: string, event: DragEvent) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", id);
    activeIdRef.current = id;
    setActiveId(id);
  }, []);

  const endDrag = useCallback(() => {
    activeIdRef.current = null;
    setActiveId(null);
    setOverId(null);
  }, []);

  const commitReorder = useCallback(
    (fromId: string, toId: string) => {
      const current = itemsRef.current;
      const from = current.indexOf(fromId);
      const to = current.indexOf(toId);

      if (from === -1 || to === -1 || from === to) {
        return;
      }

      onValueChange?.(reorder(current, from, to));
    },
    [onValueChange],
  );

  const moveItem = useCallback(
    (id: string, delta: -1 | 1) => {
      if (disabled) {
        return;
      }

      const current = itemsRef.current;
      const index = current.indexOf(id);
      const targetIndex = index + delta;

      if (index === -1 || targetIndex < 0 || targetIndex >= current.length) {
        return;
      }

      onValueChange?.(reorder(current, index, targetIndex));
    },
    [disabled, onValueChange],
  );

  const getItemProps = useCallback(
    (id: string) => {
      const itemHasHandle = handleIds.has(id);

      return {
        "aria-disabled": disabled || undefined,
        "data-dragging": activeId === id ? "true" : undefined,
        "data-drop-target": overId === id && activeId !== id ? "true" : undefined,
        // When a handle exists, only the handle is the drag source.
        draggable: !disabled && !itemHasHandle,
        onDragEnd: () => {
          endDrag();
        },
        onDragEnter: (event: DragEvent) => {
          event.preventDefault();
          const draggingId = activeIdRef.current;

          if (draggingId && draggingId !== id) {
            setOverId(id);
          }
        },
        onDragLeave: (event: DragEvent) => {
          const related = event.relatedTarget as Node | null;

          if (related && event.currentTarget.contains(related)) {
            return;
          }

          setOverId((current) => (current === id ? null : current));
        },
        onDragOver: (event: DragEvent) => {
          event.preventDefault();
          event.dataTransfer.dropEffect = "move";

          const draggingId = activeIdRef.current;

          if (draggingId && draggingId !== id) {
            setOverId(id);
          }
        },
        onDragStart: (event: DragEvent) => {
          if (disabled || handleIds.has(id)) {
            event.preventDefault();

            return;
          }

          startDrag(id, event);
        },
        onDrop: (event: DragEvent) => {
          event.preventDefault();
          event.stopPropagation();

          const fromId = event.dataTransfer.getData("text/plain") || activeIdRef.current;

          if (fromId) {
            commitReorder(fromId, id);
          }

          endDrag();
        },
        onKeyDown: (event: KeyboardEvent) => {
          if (disabled) {
            return;
          }

          const movePrev =
            orientation === "vertical" ? event.key === "ArrowUp" : event.key === "ArrowLeft";
          const moveNext =
            orientation === "vertical" ? event.key === "ArrowDown" : event.key === "ArrowRight";

          if (!(event.altKey && (movePrev || moveNext))) {
            return;
          }

          event.preventDefault();
          moveItem(id, movePrev ? -1 : 1);
        },
        // Prefer the handle as the tab stop when present.
        tabIndex: disabled || itemHasHandle ? -1 : 0,
      };
    },
    [
      activeId,
      commitReorder,
      disabled,
      endDrag,
      handleIds,
      moveItem,
      orientation,
      overId,
      startDrag,
    ],
  );

  const contextValue = useMemo(
    () => ({
      activeId,
      disabled,
      endDrag,
      getItemProps,
      hasHandle,
      moveItem,
      orientation,
      registerHandle,
      startDrag,
      unregisterHandle,
    }),
    [
      activeId,
      disabled,
      endDrag,
      getItemProps,
      hasHandle,
      moveItem,
      orientation,
      registerHandle,
      startDrag,
      unregisterHandle,
    ],
  );

  return (
    <SortableContext value={contextValue}>
      <ark.div
        {...rest}
        className={cn(sortableVariants({ orientation }), className)}
        data-orientation={orientation}
        data-part="root"
        data-scope="sortable"
        data-testid={testId}
        role="list"
      >
        {children}
      </ark.div>
    </SortableContext>
  );
}
SortableRoot.displayName = "Sortable";

export function SortableItem({ value, className, children, ...rest }: SortableItemProps) {
  const { getItemProps, activeId } = useSortableContext();
  const itemProps = getItemProps(value);
  const isDragging = activeId === value;

  return (
    <SortableItemContext value={{ id: value, isDragging }}>
      <ark.div
        {...rest}
        {...itemProps}
        className={cn(sortableItemVariants(), className)}
        data-part="item"
        data-scope="sortable"
        role="listitem"
      >
        {children}
      </ark.div>
    </SortableItemContext>
  );
}
SortableItem.displayName = "Sortable.Item";

export function SortableHandle({ className, children, ...rest }: SortableHandleProps) {
  const { id } = useSortableItemContext();
  const { disabled, endDrag, moveItem, orientation, registerHandle, startDrag, unregisterHandle } =
    useSortableContext();

  useEffect(() => {
    registerHandle(id);

    return () => {
      unregisterHandle(id);
    };
  }, [id, registerHandle, unregisterHandle]);

  return (
    <ark.div
      {...rest}
      aria-disabled={disabled || undefined}
      aria-label={rest["aria-label"] ?? "Drag to reorder"}
      className={cn(
        sortableHandleVariants(),
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      data-part="handle"
      data-scope="sortable"
      draggable={!disabled}
      onDragEnd={() => {
        endDrag();
      }}
      onDragStart={(event) => {
        if (disabled) {
          event.preventDefault();

          return;
        }

        event.stopPropagation();
        startDrag(id, event);
      }}
      onKeyDown={(event) => {
        if (disabled) {
          return;
        }

        const movePrev =
          orientation === "vertical" ? event.key === "ArrowUp" : event.key === "ArrowLeft";
        const moveNext =
          orientation === "vertical" ? event.key === "ArrowDown" : event.key === "ArrowRight";

        if (!(event.altKey && (movePrev || moveNext))) {
          return;
        }

        event.preventDefault();
        moveItem(id, movePrev ? -1 : 1);
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {children ?? <DotsSixVerticalIcon />}
    </ark.div>
  );
}
SortableHandle.displayName = "Sortable.Handle";

export function SortableItemContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sortableItemContentVariants(), className)}
      data-part="item-content"
      data-scope="sortable"
    />
  );
}
SortableItemContent.displayName = "Sortable.ItemContent";
// #endregion
