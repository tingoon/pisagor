<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { sortableRecipe } from "@pisagor/recipes/sortable";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setSortableContext } from "./sortable.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
  disabled?: boolean;
  items: string[];
  onValueChange?: (items: string[]) => void;
  orientation?: "vertical" | "horizontal";
  recipe?: typeof sortableRecipe;
};

let {
  orientation = "vertical",
  disabled = false,
  recipe = sortableRecipe,
  items,
  children,
  onValueChange,
  class: className,
  ...rest
}: Props = $props();

let activeId = $state<string | null>(null);
let overId = $state<string | null>(null);
let handleIds = $state(new Set<string>());
let activeIdRef = $state<string | null>(null);

function reorder(list: string[], from: number, to: number) {
  if (from === to || from < 0 || to < 0) return list;
  const next = [...list];
  const [moved] = next.splice(from, 1);
  if (moved === undefined) return list;
  next.splice(to, 0, moved);
  return next;
}

function hasHandle(id: string) {
  return handleIds.has(id);
}

function registerHandle(id: string) {
  if (handleIds.has(id)) return;
  const next = new Set(handleIds);
  next.add(id);
  handleIds = next;
}

function unregisterHandle(id: string) {
  if (!handleIds.has(id)) return;
  const next = new Set(handleIds);
  next.delete(id);
  handleIds = next;
}

function startDrag(id: string, event: DragEvent) {
  event.dataTransfer!.effectAllowed = "move";
  event.dataTransfer!.setData("text/plain", id);
  activeIdRef = id;
  activeId = id;
}

function endDrag() {
  activeIdRef = null;
  activeId = null;
  overId = null;
}

function commitReorder(fromId: string, toId: string) {
  const from = items.indexOf(fromId);
  const to = items.indexOf(toId);
  if (from === -1 || to === -1 || from === to) return;
  onValueChange?.(reorder(items, from, to));
}

function moveItem(id: string, delta: -1 | 1) {
  if (disabled) return;
  const index = items.indexOf(id);
  const targetIndex = index + delta;
  if (index === -1 || targetIndex < 0 || targetIndex >= items.length) return;
  onValueChange?.(reorder(items, index, targetIndex));
}

function getItemProps(id: string) {
  const itemHasHandle = handleIds.has(id);
  return {
    "aria-disabled": disabled || undefined,
    "data-dragging": activeId === id ? "true" : undefined,
    "data-drop-target": overId === id && activeId !== id ? "true" : undefined,
    draggable: !disabled && !itemHasHandle,
    ondragend: () => endDrag(),
    ondragenter: (event: DragEvent) => {
      event.preventDefault();
      if (activeIdRef && activeIdRef !== id) overId = id;
    },
    ondragleave: (event: DragEvent) => {
      const related = event.relatedTarget as Node | null;
      if (related && (event.currentTarget as Node).contains(related)) return;
      if (overId === id) overId = null;
    },
    ondragover: (event: DragEvent) => {
      event.preventDefault();
      event.dataTransfer!.dropEffect = "move";
      if (activeIdRef && activeIdRef !== id) overId = id;
    },
    ondragstart: (event: DragEvent) => {
      if (disabled || handleIds.has(id)) {
        event.preventDefault();
        return;
      }
      startDrag(id, event);
    },
    ondrop: (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const fromId = event.dataTransfer?.getData("text/plain") || activeIdRef;
      if (fromId) commitReorder(fromId, id);
      endDrag();
    },
    onkeydown: (event: KeyboardEvent) => {
      if (disabled) return;
      const movePrev =
        orientation === "vertical" ? event.key === "ArrowUp" : event.key === "ArrowLeft";
      const moveNext =
        orientation === "vertical" ? event.key === "ArrowDown" : event.key === "ArrowRight";
      if (!(event.altKey && (movePrev || moveNext))) return;
      event.preventDefault();
      moveItem(id, movePrev ? -1 : 1);
    },
    tabindex: disabled || itemHasHandle ? -1 : 0,
  };
}

setSortableContext({
  get activeId() {
    return activeId;
  },
  get disabled() {
    return disabled;
  },
  endDrag,
  getItemProps,
  hasHandle,
  moveItem,
  get orientation() {
    return orientation;
  },
  registerHandle,
  startDrag,
  unregisterHandle,
});
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: cn(className), orientation })}
  data-orientation={orientation}
  data-part="root"
  data-scope="sortable"
  role="list"
>
  {@render children?.()}
</Ark>
