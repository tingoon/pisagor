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
import {
  SortableContext,
  SortableItemContext,
  useSortable,
  useSortableItem,
} from "./sortable.context";

// #region Types
type SortableOrientation = "vertical" | "horizontal";

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
        className={sortableVariants({ className, orientation })}
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

export function SortableItem({ value, className, children, ...rest }: SortableItemProps) {
  const { getItemProps, activeId } = useSortable();
  const itemProps = getItemProps(value);
  const isDragging = activeId === value;

  return (
    <SortableItemContext value={{ id: value, isDragging }}>
      <ark.div
        {...rest}
        {...itemProps}
        className={sortableItemVariants({ className })}
        data-part="item"
        data-scope="sortable"
        role="listitem"
      >
        {children}
      </ark.div>
    </SortableItemContext>
  );
}

export function SortableHandle({ className, children, ...rest }: SortableHandleProps) {
  const { id } = useSortableItem();
  const { disabled, endDrag, moveItem, orientation, registerHandle, startDrag, unregisterHandle } =
    useSortable();

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

export function SortableItemContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={sortableItemContentVariants({ className })}
      data-part="item-content"
      data-scope="sortable"
    />
  );
}

SortableRoot.displayName = "Sortable";
SortableItem.displayName = "Sortable.Item";
SortableHandle.displayName = "Sortable.Handle";
SortableItemContent.displayName = "Sortable.ItemContent";
// #endregion
