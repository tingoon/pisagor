import { Splitter as SplitterPrimitive } from "@ark-ui/vue/splitter";
import { PhDotsSixVertical } from "@phosphor-icons/vue";
import {
  resizableEdgeHandleVariants,
  resizableInline2Variants,
  resizableInlineVariants,
  resizableResizeTriggerHandleVariants,
  resizableResizeTriggerIndicatorVariants,
  resizableResizeTriggerVariants,
  resizableVariants,
} from "@pisagor/styles/ui/resizable";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, ref } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps extends WithTestId {
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
export interface ResizableRootProps extends WithTestId {
  class?: unknown;
}

export interface ResizableResizeTriggerProps {
  withHandle?: boolean;
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];

const resizeTriggerClassName = resizableResizeTriggerVariants();
const resizeTriggerHandleClassName = resizableResizeTriggerHandleVariants();

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
    testId: String,
    width: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    // Mutable refs for live pointer interaction.
    const initialWidthRef = ref(props.width);
    const startXRef = ref(0);
    const startWidthRef = ref(props.width);
    const liveWidthRef = ref(props.width);

    const isStart = ref(props.placement === "start");

    return () =>
      h(
        "button",
        {
          ...attrs,
          "aria-label": props.label,
          class: cn(
            resizableEdgeHandleVariants({
              handlePosition: props.handlePosition,
              placement: props.placement,
            }).root(),
            props.class,
          ),
          "data-handle-position": props.handlePosition,
          "data-part": "edge-handle",
          "data-scope": "resizable",
          "data-testid": props.testId,
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
          h(
            "span",
            {
              class: resizableEdgeHandleVariants({
                handlePosition: props.handlePosition,
                placement: props.placement,
              }).grip(),
            },
            () => h(PhDotsSixVertical, { class: resizableInlineVariants() }),
          ),
        ],
      );
  },
});

export const ResizableRoot = defineComponent({
  inheritAttrs: false,
  name: "ResizableRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SplitterPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(resizableVariants(), props.class),
          "data-testid": props.testId,
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
          class: cn(resizableResizeTriggerIndicatorVariants(), props.class),
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
          class: cn(resizeTriggerClassName, props.class),
        },
        () =>
          props.withHandle
            ? h("div", { class: resizeTriggerHandleClassName }, () =>
                h(PhDotsSixVertical, { class: resizableInline2Variants() }),
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
