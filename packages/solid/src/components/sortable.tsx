import { ark } from "@ark-ui/solid/factory";
import type {
  SortableItemProps as BaseSortableItemProps,
  SortableProps as BaseSortableRootProps,
} from "@pisagor/props";
import { sortableItemRecipe, sortableRecipe } from "@pisagor/recipes";
import type { Accessor, ComponentProps, JSX } from "solid-js";
import {
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  splitProps,
} from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { DotsSixVerticalIcon } from "../internal/icons";
import { createContext } from "../utils";

type SortableOrientation = "vertical" | "horizontal";

// #region Context
const { Context: SortableItemStylesContext, useStyles: useSortableItemStyles } =
  createSlotRecipeContext({ name: "Sortable", recipe: sortableItemRecipe });

/** Drag/reorder state shared by items and handles (not styles). */
interface SortableState {
  readonly activeId: Accessor<string | null>;
  readonly disabled: boolean;
  readonly endDrag: () => void;
  readonly getItemProps: (id: string) => {
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
  readonly hasHandle: (id: string) => boolean;
  readonly moveItem: (id: string, delta: -1 | 1) => void;
  readonly orientation: SortableOrientation;
  readonly registerHandle: (id: string) => void;
  readonly startDrag: (id: string, event: DragEvent) => void;
  readonly unregisterHandle: (id: string) => void;
}

export const { SortableContext, useSortable } =
  createContext("Sortable")<SortableState>();

interface SortableItemState {
  readonly id: string;
  readonly isDragging: Accessor<boolean>;
}

const { SortableItemStateContext, useSortableItemState } =
  createContext("SortableItemState")<SortableItemState>();
// #endregion

export interface SortableRootProps
  extends Omit<ComponentProps<typeof ark.div>, "onDragStart">,
    BaseSortableRootProps {
  orientation?: SortableOrientation;
  disabled?: boolean;
  items: string[];
  onValueChange?: (items: string[]) => void;
}

export interface SortableItemProps
  extends ComponentProps<typeof ark.div>,
    BaseSortableItemProps {
  value: string;
}

export type SortableHandleProps = ComponentProps<typeof ark.div>;
export type SortableItemContentProps = ComponentProps<typeof ark.div>;

function reorder(list: string[], from: number, to: number) {
  if (from === to || from < 0 || to < 0) return list;
  const next = [...list];
  const [moved] = next.splice(from, 1);
  if (moved === undefined) return list;
  next.splice(to, 0, moved);
  return next;
}

export function SortableRoot(props: SortableRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "disabled",
    "recipe",
    "items",
    "children",
    "onValueChange",
    "class",
  ]);

  const orientation = () => local.orientation ?? "vertical";
  const disabled = () => local.disabled ?? false;

  const [activeId, setActiveId] = createSignal<string | null>(null);
  const [overId, setOverId] = createSignal<string | null>(null);
  const [handleIds, setHandleIds] = createSignal(new Set<string>());
  const activeIdRef = { current: null as string | null };
  const itemsRef = { current: local.items };

  // keep items ref fresh
  itemsRef.current = local.items;

  const hasHandle = (id: string) => handleIds().has(id);

  const registerHandle = (id: string) => {
    setHandleIds((current) => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  };

  const unregisterHandle = (id: string) => {
    setHandleIds((current) => {
      if (!current.has(id)) return current;
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  };

  const startDrag = (id: string, event: DragEvent) => {
    if (!event.dataTransfer) return;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", id);
    activeIdRef.current = id;
    setActiveId(id);
  };

  const endDrag = () => {
    activeIdRef.current = null;
    setActiveId(null);
    setOverId(null);
  };

  const commitReorder = (fromId: string, toId: string) => {
    const current = itemsRef.current;
    const from = current.indexOf(fromId);
    const to = current.indexOf(toId);
    if (from === -1 || to === -1 || from === to) return;
    local.onValueChange?.(reorder(current, from, to));
  };

  const moveItem = (id: string, delta: -1 | 1) => {
    if (disabled()) return;
    const current = itemsRef.current;
    const index = current.indexOf(id);
    const targetIndex = index + delta;
    if (index === -1 || targetIndex < 0 || targetIndex >= current.length)
      return;
    local.onValueChange?.(reorder(current, index, targetIndex));
  };

  const getItemProps = (id: string) => {
    const itemHasHandle = handleIds().has(id);
    return {
      "aria-disabled": disabled() || undefined,
      "data-dragging": activeId() === id ? "true" : undefined,
      "data-drop-target":
        overId() === id && activeId() !== id ? "true" : undefined,
      draggable: !disabled() && !itemHasHandle,
      onDragEnd: () => endDrag(),
      onDragEnter: (event: DragEvent) => {
        event.preventDefault();
        const draggingId = activeIdRef.current;
        if (draggingId && draggingId !== id) setOverId(id);
      },
      onDragLeave: (event: DragEvent) => {
        const related = event.relatedTarget as Node | null;
        if (related && (event.currentTarget as Node).contains(related)) return;
        setOverId((current) => (current === id ? null : current));
      },
      onDragOver: (event: DragEvent) => {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
        const draggingId = activeIdRef.current;
        if (draggingId && draggingId !== id) setOverId(id);
      },
      onDragStart: (event: DragEvent) => {
        if (disabled() || handleIds().has(id)) {
          event.preventDefault();
          return;
        }
        startDrag(id, event);
      },
      onDrop: (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const fromId =
          event.dataTransfer?.getData("text/plain") || activeIdRef.current;
        if (fromId) commitReorder(fromId, id);
        endDrag();
      },
      onKeyDown: (event: KeyboardEvent) => {
        if (disabled()) return;
        const movePrev =
          orientation() === "vertical"
            ? event.key === "ArrowUp"
            : event.key === "ArrowLeft";
        const moveNext =
          orientation() === "vertical"
            ? event.key === "ArrowDown"
            : event.key === "ArrowRight";
        if (!(event.altKey && (movePrev || moveNext))) return;
        event.preventDefault();
        moveItem(id, movePrev ? -1 : 1);
      },
      tabIndex: disabled() || itemHasHandle ? -1 : 0,
    };
  };

  return (
    <SortableContext
      value={{
        activeId,
        get disabled() {
          return disabled();
        },
        endDrag,
        getItemProps,
        hasHandle,
        moveItem,
        get orientation() {
          return orientation();
        },
        registerHandle,
        startDrag,
        unregisterHandle,
      }}
    >
      <ark.div
        {...rest}
        class={(local.recipe ?? sortableRecipe)({
          class: local.class,
          orientation: orientation(),
        })}
        data-orientation={orientation()}
        data-part="root"
        data-scope="sortable"
        role="list"
      >
        {local.children}
      </ark.div>
    </SortableContext>
  );
}

export function SortableItem(props: SortableItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "recipe", "class"]);
  const sortable = useSortable();
  const itemProps = () => sortable.getItemProps(local.value);
  const isDragging = () => sortable.activeId() === local.value;
  const slots = createMemo(() => (local.recipe ?? sortableItemRecipe)());

  return (
    <SortableItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SortableItemStateContext
        value={{
          get id() {
            return local.value;
          },
          isDragging,
        }}
      >
        <ark.div
          {...rest}
          {...itemProps()}
          class={slots().base({
            class: local.class,
            disabled: sortable.disabled,
          })}
          data-part="item"
          data-scope="sortable"
          role="listitem"
        />
      </SortableItemStateContext>
    </SortableItemStylesContext>
  );
}

export function SortableHandle(props: SortableHandleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class", "aria-label"]);
  const styles = useSortableItemStyles();
  const item = useSortableItemState();
  const sortable = useSortable();
  const disabled = () => sortable.disabled;

  onMount(() => {
    const id = item.id;
    sortable.registerHandle(id);
    onCleanup(() => sortable.unregisterHandle(id));
  });

  return (
    <ark.div
      {...rest}
      aria-disabled={disabled() || undefined}
      aria-label={local["aria-label"] ?? "Drag to reorder"}
      class={styles.slots.handle({ class: local.class, disabled: disabled() })}
      data-part="handle"
      data-scope="sortable"
      draggable={!disabled()}
      onDragEnd={() => sortable.endDrag()}
      onDragStart={(event) => {
        if (disabled()) {
          event.preventDefault();
          return;
        }
        event.stopPropagation();
        sortable.startDrag(item.id, event);
      }}
      onKeyDown={(event) => {
        if (disabled()) return;
        const movePrev =
          sortable.orientation === "vertical"
            ? event.key === "ArrowUp"
            : event.key === "ArrowLeft";
        const moveNext =
          sortable.orientation === "vertical"
            ? event.key === "ArrowDown"
            : event.key === "ArrowRight";
        if (!(event.altKey && (movePrev || moveNext))) return;
        event.preventDefault();
        sortable.moveItem(item.id, movePrev ? -1 : 1);
      }}
      role="button"
      tabIndex={disabled() ? -1 : 0}
    >
      {local.children ?? <DotsSixVerticalIcon />}
    </ark.div>
  );
}

export function SortableItemContent(
  props: SortableItemContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useSortableItemStyles();

  return (
    <ark.div
      {...rest}
      class={styles.slots.content({ class: local.class })}
      data-part="item-content"
      data-scope="sortable"
    />
  );
}

export const Sortable = Object.assign(SortableRoot, {
  Handle: SortableHandle,
  Item: SortableItem,
  ItemContent: SortableItemContent,
  Root: SortableRoot,
});
