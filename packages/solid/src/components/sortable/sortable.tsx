import { ark } from "@ark-ui/solid/factory";
import { sortableItemRecipe, sortableRecipe } from "@pisagor/recipes/sortable";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createSignal, onCleanup, onMount, splitProps } from "solid-js";
import { DotsSixVerticalIcon } from "../../internal/icons";
import {
  SortableContext,
  SortableItemContext,
  useSortable,
  useSortableItem,
} from "./sortable.context";

type SortableOrientation = "vertical" | "horizontal";

export interface SortableRootProps
  extends Omit<ComponentProps<typeof ark.div>, "onDragStart"> {
  orientation?: SortableOrientation;
  disabled?: boolean;
  items: string[];
  onValueChange?: (items: string[]) => void;
  recipe?: typeof sortableRecipe;
}

export interface SortableItemProps extends ComponentProps<typeof ark.div> {
  value: string;
  itemRecipe?: typeof sortableItemRecipe;
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
        disabled: disabled(),
        endDrag,
        getItemProps,
        hasHandle,
        moveItem,
        orientation: orientation(),
        registerHandle,
        startDrag,
        unregisterHandle,
      }}
    >
      <ark.div
        {...rest}
        class={(local.recipe ?? sortableRecipe)({
          class: cn(local.class),
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
  const [local, rest] = splitProps(props, [
    "value",
    "children",
    "itemRecipe",
    "class",
  ]);
  const { getItemProps, activeId } = useSortable();
  const itemProps = () => getItemProps(local.value);
  const isDragging = () => activeId() === local.value;
  const slots = () => (local.itemRecipe ?? sortableItemRecipe)();

  return (
    <SortableItemContext
      value={{ id: local.value, isDragging, slots: slots() }}
    >
      <ark.div
        {...rest}
        {...itemProps()}
        class={slots().base({ class: cn(local.class) })}
        data-part="item"
        data-scope="sortable"
        role="listitem"
      >
        {local.children}
      </ark.div>
    </SortableItemContext>
  );
}

export function SortableHandle(props: SortableHandleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class", "aria-label"]);
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

  onMount(() => {
    registerHandle(id);
    onCleanup(() => unregisterHandle(id));
  });

  return (
    <ark.div
      {...rest}
      aria-disabled={disabled || undefined}
      aria-label={local["aria-label"] ?? "Drag to reorder"}
      class={slots.handle({
        class: cn(disabled && "pointer-events-none opacity-50", local.class),
      })}
      data-part="handle"
      data-scope="sortable"
      draggable={!disabled}
      onDragEnd={() => endDrag()}
      onDragStart={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        event.stopPropagation();
        startDrag(id, event);
      }}
      onKeyDown={(event) => {
        if (disabled) return;
        const movePrev =
          orientation === "vertical"
            ? event.key === "ArrowUp"
            : event.key === "ArrowLeft";
        const moveNext =
          orientation === "vertical"
            ? event.key === "ArrowDown"
            : event.key === "ArrowRight";
        if (!(event.altKey && (movePrev || moveNext))) return;
        event.preventDefault();
        moveItem(id, movePrev ? -1 : 1);
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      {local.children ?? <DotsSixVerticalIcon />}
    </ark.div>
  );
}

export function SortableItemContent(
  props: SortableItemContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSortableItem();
  return (
    <ark.div
      {...rest}
      class={slots.content({ class: cn(local.class) })}
      data-part="item-content"
      data-scope="sortable"
    />
  );
}
