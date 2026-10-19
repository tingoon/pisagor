import type {
  SortableItemRootContract,
  SortableRootContract,
} from "@pisagor/contracts";
import { sortableItemRecipe, sortableRecipe } from "@pisagor/recipes";
import { formatMessage } from "@pisagor/utils";
import type {
  ComponentPropsWithRef,
  DragEvent,
  KeyboardEvent,
  ReactNode,
} from "react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createSlotRecipeContext } from "../internal";
import { createContext as createNamedContext } from "../utils";
import { useLocale } from "./provider/context";

// #region Context
type SortableOrientation = "vertical" | "horizontal";

interface SortableContextValue {
  activeId: string | null;
  disabled: boolean;
  endDrag: () => void;
  getItemProps: (id: string) => {
    "aria-disabled"?: boolean;
    "aria-keyshortcuts"?: string;
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

export const { SortableContext, useSortable } =
  createNamedContext("Sortable")<SortableContextValue>();

const { Context: SortableItemStylesContext, useStyles } =
  createSlotRecipeContext({
    name: "Sortable",
    recipe: sortableItemRecipe,
  });

interface SortableItemState {
  id: string;
  isDragging: boolean;
}

const SortableItemStateContext = createContext<SortableItemState | undefined>(
  undefined,
);
SortableItemStateContext.displayName = "SortableItemStateContext";

function useSortableItem() {
  const styles = useStyles();
  const state = use(SortableItemStateContext);
  if (state === undefined) {
    throw new Error(
      "useSortableItem must be used within SortableItemStateContext.",
    );
  }

  return { ...styles, ...state };
}
// #endregion

// #region Types
export interface SortableRootProps
  extends
    Omit<ComponentPropsWithRef<"div">, "onDragStart">,
    SortableRootContract {
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
  /** Ordered item ids. Reorder callbacks receive a new array of the same ids. */
  items: string[];
  /** Called with the reordered ids after a successful drop or keyboard move. */
  onValueChange?: (items: string[]) => void;
}

export interface SortableItemProps
  extends ComponentPropsWithRef<"div">, SortableItemRootContract {
  /** Stable id matching an entry in `Sortable.Root` `items`. */
  value: string;
}

export type SortableHandleProps = ComponentPropsWithRef<"div">;

export type SortableItemContentProps = ComponentPropsWithRef<"div">;
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
  orientation = "vertical",
  disabled = false,
  recipe = sortableRecipe,
  items,
  children,
  onValueChange,
  className,
  ...rest
}: SortableRootProps) {
  const { m } = useLocale();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [handleIds, setHandleIds] = useState(() => new Set<string>());
  const [moved, setMoved] = useState<{ position: number; total: number }>();
  const keyShortcuts =
    orientation === "vertical"
      ? "Alt+ArrowUp Alt+ArrowDown"
      : "Alt+ArrowLeft Alt+ArrowRight";
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
      setMoved({ position: targetIndex + 1, total: current.length });
    },
    [disabled, onValueChange],
  );

  const getItemProps = useCallback(
    (id: string) => {
      const itemHasHandle = handleIds.has(id);

      return {
        "aria-disabled": disabled || undefined,
        "aria-keyshortcuts": itemHasHandle ? undefined : keyShortcuts,
        "data-dragging": activeId === id ? "true" : undefined,
        "data-drop-target":
          overId === id && activeId !== id ? "true" : undefined,
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

          const fromId =
            event.dataTransfer.getData("text/plain") || activeIdRef.current;

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
            orientation === "vertical"
              ? event.key === "ArrowUp"
              : event.key === "ArrowLeft";
          const moveNext =
            orientation === "vertical"
              ? event.key === "ArrowDown"
              : event.key === "ArrowRight";

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
      keyShortcuts,
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
      <div
        {...rest}
        className={recipe({ className, orientation })}
        data-orientation={orientation}
        data-part="root"
        data-scope="sortable"
        role="list"
      >
        {children}
      </div>
      <span aria-live="polite" className="sr-only">
        {moved &&
          formatMessage(m("sortable.moved"), {
            position: moved.position,
            total: moved.total,
          })}
      </span>
    </SortableContext>
  );
}

export function SortableItem({
  value,
  children,
  recipe = sortableItemRecipe,
  className,
  ...rest
}: SortableItemProps) {
  const { getItemProps, activeId, disabled } = useSortable();
  const itemProps = getItemProps(value);
  const isDragging = activeId === value;
  const slots = recipe();

  return (
    <SortableItemStylesContext value={{ slots, variants: {} as never }}>
      <SortableItemStateContext value={{ id: value, isDragging }}>
        <div
          {...rest}
          {...itemProps}
          className={slots.base({ className, disabled })}
          data-part="item"
          data-scope="sortable"
          role="listitem"
        >
          {children}
        </div>
      </SortableItemStateContext>
    </SortableItemStylesContext>
  );
}

export function SortableHandle({
  children,
  className,
  ...rest
}: SortableHandleProps) {
  const { m } = useLocale();
  const { id, slots } = useSortableItem();
  const {
    disabled,
    endDrag,
    moveItem,
    orientation,
    registerHandle,
    startDrag,
    unregisterHandle,
  } = useSortable();

  useEffect(() => {
    registerHandle(id);

    return () => {
      unregisterHandle(id);
    };
  }, [id, registerHandle, unregisterHandle]);

  return (
    <div
      {...rest}
      aria-disabled={disabled || undefined}
      aria-keyshortcuts={
        orientation === "vertical"
          ? "Alt+ArrowUp Alt+ArrowDown"
          : "Alt+ArrowLeft Alt+ArrowRight"
      }
      aria-label={m("sortable.dragHandle", rest["aria-label"])}
      className={slots.handle({ className, disabled })}
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
          orientation === "vertical"
            ? event.key === "ArrowUp"
            : event.key === "ArrowLeft";
        const moveNext =
          orientation === "vertical"
            ? event.key === "ArrowDown"
            : event.key === "ArrowRight";

        if (!(event.altKey && (movePrev || moveNext))) {
          return;
        }

        event.preventDefault();
        moveItem(id, movePrev ? -1 : 1);
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </div>
  );
}

export function SortableItemContent({
  className,
  ...rest
}: SortableItemContentProps) {
  const { slots } = useSortableItem();

  return (
    <div
      {...rest}
      className={slots.content({ className })}
      data-part="item-content"
      data-scope="sortable"
    />
  );
}
// #endregion

// #region Display Names
SortableRoot.displayName = "Sortable";
SortableItem.displayName = "Sortable.Item";
SortableHandle.displayName = "Sortable.Handle";
SortableItemContent.displayName = "Sortable.ItemContent";
// #endregion

export const Sortable = Object.assign(SortableRoot, {
  Handle: SortableHandle,
  Item: SortableItem,
  ItemContent: SortableItemContent,
  Root: SortableRoot,
});
