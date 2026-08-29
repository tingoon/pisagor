import { Splitter as SplitterPrimitive } from "@ark-ui/vue/splitter";
import { PhDotsSixVertical } from "@phosphor-icons/vue";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes/resizable";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, ref } from "vue";

// #region Types
export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps {
  handlePosition?: ResizableHandlePosition;
  /** Accessible label for the resize control. */
  label: string;
  minWidth?: number;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
  placement: ResizableEdgePlacement;
  width: number;
}

// We keep the primitive wrapper types intentionally loose; `h()` polymorphic casts.
export interface ResizableRootProps {
  class?: unknown;
}

export interface ResizableResizeTriggerProps {
  withHandle?: boolean;
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const ResizableEdgeHandle = defineComponent({
  inheritAttrs: false,
  name: "ResizableEdgeHandle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    handlePosition: {
      default: "center",
      type: String as PropType<ResizableHandlePosition>,
    },
    label: { required: true, type: String },
    minWidth: { default: 1, type: Number },
    onResizeChange: { default: undefined, type: Function as PropType<(width: number) => void> },
    onResizeEnd: { default: undefined, type: Function as PropType<() => void> },
    onResizeStart: { default: undefined, type: Function as PropType<() => void> },
    onWidthChange: { required: true, type: Function as PropType<(width: number) => void> },
    placement: { required: true, type: String as PropType<ResizableEdgePlacement> },
    width: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    // Mutable refs for live pointer interaction.
    const initialWidthRef = ref(props.width);
    const startXRef = ref(0);
    const startWidthRef = ref(props.width);
    const liveWidthRef = ref(props.width);

    const isStart = ref(props.placement === "start");

    return () => {
      const edgeHandle = resizableEdgeHandleRecipe({
        handlePosition: props.handlePosition,
        placement: props.placement,
      });

      return h(
        "button",
        {
          ...attrs,
          "aria-label": props.label,
          class: edgeHandle.base({ class: props.class }),
          "data-handle-position": props.handlePosition,
          "data-part": "edge-handle",
          "data-scope": "resizable",
          onDoubleClick: (event: MouseEvent) => {
            event.preventDefault();
            props.onResizeEnd?.();
            // Double click resets to the initial width.
            liveWidthRef.value = initialWidthRef.value;
            startWidthRef.value = initialWidthRef.value;
            props.onResizeChange?.(initialWidthRef.value);
            props.onWidthChange(initialWidthRef.value);
          },
          onLostPointerCapture: () => {
            props.onResizeEnd?.();
            props.onWidthChange(liveWidthRef.value);
          },
          onPointerDown: (event: PointerEvent) => {
            const target = event.currentTarget as HTMLButtonElement | null;
            if (!target) return;
            target.setPointerCapture(event.pointerId);
            startXRef.value = event.clientX;
            startWidthRef.value = props.width;
            liveWidthRef.value = props.width;
            initialWidthRef.value = props.width;
            isStart.value = props.placement === "start";
            props.onResizeStart?.();
          },
          onPointerMove: (event: PointerEvent) => {
            const target = event.currentTarget as HTMLButtonElement | null;
            if (!target) return;
            if (!target.hasPointerCapture(event.pointerId)) return;

            const delta = event.clientX - startXRef.value;
            const next = Math.max(
              props.minWidth ?? 1,
              isStart.value ? startWidthRef.value + delta : startWidthRef.value - delta,
            );

            liveWidthRef.value = next;
            props.onResizeChange?.(next);
          },
          onPointerUp: (event: PointerEvent) => {
            const target = event.currentTarget as HTMLButtonElement | null;
            if (!target) return;
            target.releasePointerCapture(event.pointerId);
            props.onResizeEnd?.();
            props.onWidthChange(liveWidthRef.value);
          },
          type: "button",
        },
        () => [
          h("span", { class: edgeHandle.grip() }, () =>
            h(PhDotsSixVertical, { class: edgeHandle.icon() }),
          ),
        ],
      );
    };
  },
});

export const ResizableRoot = defineComponent({
  inheritAttrs: false,
  name: "ResizableRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(resizableRecipe().base(), props.class),
        },
        slots,
      );
  },
});

export const ResizablePanel = defineComponent({
  inheritAttrs: false,
  name: "ResizablePanel",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.Panel as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});

export const ResizableResizeTriggerIndicator = defineComponent({
  inheritAttrs: false,
  name: "ResizableResizeTriggerIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.ResizeTriggerIndicator as ArkPart,
        {
          ...attrs,
          class: cn(resizableRecipe().resizeTriggerIndicator(), props.class),
        },
        slots,
      );
  },
});

export const ResizableResizeTrigger = defineComponent({
  inheritAttrs: false,
  name: "ResizableResizeTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    withHandle: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.ResizeTrigger as ArkPart,
        {
          ...attrs,
          "aria-label": "Resize",
          class: resizableRecipe().resizeTrigger({ class: props.class }),
        },
        () =>
          props.withHandle
            ? h("div", { class: resizableRecipe().resizeTriggerHandle() }, () =>
                h(PhDotsSixVertical, { class: resizableRecipe().resizeTriggerIcon() }),
              )
            : (slots.default?.() ?? h(ResizableResizeTriggerIndicator)),
      );
  },
});

export const ResizableContext = defineComponent({
  inheritAttrs: false,
  name: "ResizableContext",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.Context as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});

export const ResizableRootProvider = defineComponent({
  inheritAttrs: false,
  name: "ResizableRootProvider",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.RootProvider as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});
// #endregion
