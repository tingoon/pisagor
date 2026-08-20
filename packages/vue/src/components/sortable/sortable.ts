import { ark } from "@ark-ui/vue/factory";
import { PhDotsSixVertical } from "@phosphor-icons/vue";
import {
  sortableHandleVariants,
  sortableItemContentVariants,
  sortableItemVariants,
  sortableVariants,
} from "@pisagor/styles/ui/sortable";
import { cn } from "@pisagor/utils";
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  ref,
  watchEffect,
} from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Types
type SortableOrientation = "vertical" | "horizontal";

interface SortableContextValue {
  activeId: string | null;
  disabled: boolean;
  endDrag: () => void;
  getItemProps: (id: string) => Record<string, unknown>;
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

export interface SortableRootProps extends WithTestId {
  items: string[];
  onValueChange?: (items: string[]) => void;
  orientation?: SortableOrientation;
  disabled?: boolean;
  class?: unknown;
}

export interface SortableItemProps {
  value: string;
  class?: unknown;
}

export interface SortableHandleProps {
  class?: unknown;
}
// #endregion

// #region Context
const [provideSortableContext, useSortableContext] = createContext<SortableContextValue>({
  name: "Sortable",
});
const [provideSortableItemContext, useSortableItemContext] =
  createContext<SortableItemContextValue>({
    name: "SortableItem",
  });
// #endregion

// #region Helpers
function reorder(list: string[], from: number, to: number) {
  if (from === to || from < 0 || to < 0) return list;
  if (from >= list.length || to >= list.length) return list;

  const next = [...list];
  const moved = next.splice(from, 1)[0];
  if (moved === undefined) return list;
  next.splice(to, 0, moved);
  return next;
}

export function useSortable() {
  return useSortableContext();
}
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const SortableRoot = defineComponent({
  inheritAttrs: false,
  name: "SortableRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: false, type: Boolean },
    items: { required: true, type: Array as PropType<string[]> },
    onValueChange: { default: undefined, type: Function as PropType<(items: string[]) => void> },
    orientation: {
      default: "vertical",
      type: String as PropType<SortableOrientation>,
    },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const activeId = ref<string | null>(null);
    const overId = ref<string | null>(null);
    const handleIds = ref<Set<string>>(new Set());
    const activeIdRef = ref<string | null>(null);
    const itemsRef = ref(props.items);
    watchEffect(() => {
      itemsRef.value = props.items;
    });

    const hasHandle = (id: string) => handleIds.value.has(id);

    const registerHandle = (id: string) => {
      if (handleIds.value.has(id)) return;
      const next = new Set(handleIds.value);
      next.add(id);
      handleIds.value = next;
    };

    const unregisterHandle = (id: string) => {
      if (!handleIds.value.has(id)) return;
      const next = new Set(handleIds.value);
      next.delete(id);
      handleIds.value = next;
    };

    const startDrag = (id: string, event: DragEvent) => {
      if (!event.dataTransfer) return;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", id);
      activeIdRef.value = id;
      activeId.value = id;
    };

    const endDrag = () => {
      activeIdRef.value = null;
      activeId.value = null;
      overId.value = null;
    };

    const commitReorder = (fromId: string, toId: string) => {
      const current = itemsRef.value;
      const from = current.indexOf(fromId);
      const to = current.indexOf(toId);
      if (from === -1 || to === -1 || from === to) return;
      props.onValueChange?.(reorder(current, from, to));
    };

    const moveItem = (id: string, delta: -1 | 1) => {
      if (props.disabled) return;
      const current = itemsRef.value;
      const index = current.indexOf(id);
      const targetIndex = index + delta;
      if (index === -1 || targetIndex < 0 || targetIndex >= current.length) return;
      props.onValueChange?.(reorder(current, index, targetIndex));
    };

    const getItemProps = (id: string) => {
      const itemHasHandle = hasHandle(id);

      return {
        "aria-disabled": props.disabled || undefined,
        "data-dragging": activeId.value === id ? "true" : undefined,
        "data-drop-target": overId.value === id && activeId.value !== id ? "true" : undefined,
        draggable: !props.disabled && !itemHasHandle,
        onDragEnd: () => {
          endDrag();
        },
        onDragEnter: (event: DragEvent) => {
          event.preventDefault();
          const draggingId = activeIdRef.value;
          if (draggingId && draggingId !== id) {
            overId.value = id;
          }
        },
        onDragLeave: (event: DragEvent) => {
          const related = event.relatedTarget as Node | null;
          if (related && event.currentTarget && (event.currentTarget as Node).contains(related)) {
            return;
          }
          overId.value = overId.value === id ? null : overId.value;
        },
        onDragOver: (event: DragEvent) => {
          event.preventDefault();
          if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
          const draggingId = activeIdRef.value;
          if (draggingId && draggingId !== id) {
            overId.value = id;
          }
        },
        onDragStart: (event: DragEvent) => {
          if (props.disabled || hasHandle(id)) {
            event.preventDefault();
            return;
          }
          startDrag(id, event);
        },
        onDrop: (event: DragEvent) => {
          event.preventDefault();
          event.stopPropagation();
          const fromId = event.dataTransfer?.getData("text/plain") || activeIdRef.value;
          if (fromId) commitReorder(fromId, id);
          endDrag();
        },
        onKeyDown: (event: KeyboardEvent) => {
          if (props.disabled) return;
          const movePrev =
            props.orientation === "vertical" ? event.key === "ArrowUp" : event.key === "ArrowLeft";
          const moveNext =
            props.orientation === "vertical"
              ? event.key === "ArrowDown"
              : event.key === "ArrowRight";
          if (!(event.altKey && (movePrev || moveNext))) return;
          event.preventDefault();
          moveItem(id, movePrev ? -1 : 1);
        },
        tabIndex: props.disabled || itemHasHandle ? -1 : 0,
      };
    };

    const contextValue = reactive<SortableContextValue>({
      activeId: null,
      disabled: props.disabled,
      endDrag,
      getItemProps,
      hasHandle,
      moveItem,
      orientation: props.orientation,
      registerHandle,
      startDrag,
      unregisterHandle,
    });

    watchEffect(() => {
      contextValue.activeId = activeId.value;
      contextValue.disabled = props.disabled;
      contextValue.orientation = props.orientation;
    });

    provideSortableContext(contextValue);

    return () =>
      h(
        ark.div as unknown as ArkPart,
        {
          ...attrs,
          class: cn(sortableVariants({ orientation: props.orientation }), props.class, attrs.class),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "sortable",
          "data-testid": props.testId,
          role: "list",
        },
        () => slots.default?.(),
      );
  },
});

export const SortableItem = defineComponent({
  inheritAttrs: false,
  name: "SortableItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    value: { required: true, type: String },
  },
  setup(props, { attrs, slots }) {
    const sortable = useSortableContext();
    if (!sortable) {
      return () => null;
    }

    const itemContext = reactive<SortableItemContextValue>({
      id: props.value,
      isDragging: false,
    });

    provideSortableItemContext(itemContext);

    return () => {
      itemContext.isDragging = sortable.activeId === props.value;
      const itemProps = sortable.getItemProps(props.value);

      return h(
        ark.div as unknown as ArkPart,
        {
          ...attrs,
          ...itemProps,
          class: cn(sortableItemVariants(), props.class),
          "data-part": "item",
          "data-scope": "sortable",
          role: "listitem",
        },
        () => slots.default?.(),
      );
    };
  },
});

export const SortableHandle = defineComponent({
  inheritAttrs: false,
  name: "SortableHandle",
  props: {
    ariaLabel: { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const itemContext = useSortableItemContext();
    const sortable = useSortableContext();

    if (!itemContext || !sortable) {
      return () => null;
    }

    onMounted(() => {
      sortable.registerHandle(itemContext.id);
    });

    onBeforeUnmount(() => {
      sortable.unregisterHandle(itemContext.id);
    });

    return () =>
      h(
        ark.div as unknown as ArkPart,
        {
          ...attrs,
          "aria-disabled": sortable.disabled || undefined,
          "aria-label":
            (attrs["aria-label"] as string | undefined) ?? props.ariaLabel ?? "Drag to reorder",
          class: cn(
            sortableHandleVariants(),
            sortable.disabled && "pointer-events-none opacity-50",
            props.class,
            attrs.class,
          ),
          "data-part": "handle",
          "data-scope": "sortable",
          draggable: !sortable.disabled,
          onDragEnd: () => {
            sortable.endDrag();
          },
          onDragStart: (event: DragEvent) => {
            if (sortable.disabled) {
              event.preventDefault();
              return;
            }

            event.stopPropagation();
            sortable.startDrag(itemContext.id, event);
          },
          onKeyDown: (event: KeyboardEvent) => {
            if (sortable.disabled) return;

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
            sortable.moveItem(itemContext.id, movePrev ? -1 : 1);
          },
          role: "button",
          tabIndex: sortable.disabled ? -1 : 0,
        },
        () => slots.default?.() ?? h(PhDotsSixVertical),
      );
  },
});

export const SortableItemContent = defineComponent({
  inheritAttrs: false,
  name: "SortableItemContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as unknown as ArkPart,
        {
          ...attrs,
          class: cn(sortableItemContentVariants(), props.class, attrs.class),
          "data-part": "item-content",
          "data-scope": "sortable",
        },
        slots,
      );
  },
});
// #endregion
