import { Splitter as SplitterPrimitive } from "@ark-ui/vue";
import { PhDotsSixVertical } from "@phosphor-icons/vue";
import type {
  ResizableEdgeHandleRootContract,
  ResizableRootContract,
} from "@pisagor/contracts";
import { resizableEdgeHandleRecipe, resizableRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, ref } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Slot recipe context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Resizable",
  recipe: resizableRecipe,
});
// #endregion

// #region Types
export type ResizableHandlePosition = "bottom" | "center" | "top";
export type ResizableEdgePlacement = "end" | "start";

export interface ResizableEdgeHandleProps extends ResizableEdgeHandleRootContract {
  handlePosition?: ResizableHandlePosition;
  /** Accessible label for the resize control. */
  label: string;
  /** Maximum width in pixels, used by the End key and `aria-valuemax`. */
  maxWidth?: number;
  minWidth?: number;
  /** Width change in pixels per arrow key press. @defaultValue 10 */
  step?: number;
  onResizeChange?: (width: number) => void;
  onResizeEnd?: () => void;
  onResizeStart?: () => void;
  onWidthChange: (width: number) => void;
  placement: ResizableEdgePlacement;
  width: number;
}

// We keep the primitive wrapper types intentionally loose; `h()` polymorphic casts.
export interface ResizableRootProps extends ResizableRootContract {
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
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    handlePosition: {
      default: "center",
      type: String as PropType<ResizableHandlePosition>,
    },
    label: { required: true, type: String },
    maxWidth: { default: undefined, type: Number },
    minWidth: { default: 1, type: Number },
    onResizeChange: {
      default: undefined,
      type: Function as PropType<(width: number) => void>,
    },
    onResizeEnd: { default: undefined, type: Function as PropType<() => void> },
    onResizeStart: {
      default: undefined,
      type: Function as PropType<() => void>,
    },
    onWidthChange: {
      required: true,
      type: Function as PropType<(width: number) => void>,
    },
    placement: {
      required: true,
      type: String as PropType<ResizableEdgePlacement>,
    },
    step: { default: 10, type: Number },
    width: { required: true, type: Number },
  },
  setup(props, { attrs }) {
    // Mutable refs for live pointer interaction.
    const initialWidthRef = ref(props.width);
    const startXRef = ref(0);
    const startWidthRef = ref(props.width);
    const liveWidthRef = ref(props.width);

    const isStart = ref(props.placement === "start");

    const clamp = (value: number) =>
      Math.min(
        props.maxWidth ?? Number.POSITIVE_INFINITY,
        Math.max(props.minWidth ?? 1, value),
      );

    const applyWidth = (next: number) => {
      liveWidthRef.value = next;
      startWidthRef.value = next;
      props.onResizeChange?.(next);
      props.onWidthChange(next);
    };

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
          "aria-orientation": "vertical",
          "aria-valuemax": props.maxWidth,
          "aria-valuemin": props.minWidth,
          "aria-valuenow": Math.round(props.width),
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
          onKeydown: (event: KeyboardEvent) => {
            const start = props.placement === "start";
            const grow = start ? "ArrowRight" : "ArrowLeft";
            const shrink = start ? "ArrowLeft" : "ArrowRight";
            const next =
              event.key === grow
                ? props.width + props.step
                : event.key === shrink
                  ? props.width - props.step
                  : event.key === "Home"
                    ? props.minWidth
                    : event.key === "End" && props.maxWidth !== undefined
                      ? props.maxWidth
                      : event.key === "Enter"
                        ? initialWidthRef.value
                        : undefined;
            if (next === undefined) return;
            event.preventDefault();
            applyWidth(clamp(next));
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
            const next = clamp(
              isStart.value
                ? startWidthRef.value + delta
                : startWidthRef.value - delta,
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
          role: "separator",
          type: "button",
        },
        () => [
          h(
            "span",
            { class: edgeHandle.grip() },
            h(PhDotsSixVertical, { class: edgeHandle.icon() }),
          ),
        ],
      );
    };
  },
});

export const ResizableRoot = withProvider<ResizableRootContract>(
  SplitterPrimitive.Root,
  { name: "Root" },
);

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

export const ResizableResizeTriggerIndicator = withContext(
  SplitterPrimitive.ResizeTriggerIndicator,
  { name: "ResizeTriggerIndicator" },
);

export const ResizableResizeTrigger = defineComponent({
  inheritAttrs: false,
  name: "ResizableResizeTrigger",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    withHandle: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const styles = useStyles();

    return () =>
      h(
        SplitterPrimitive.ResizeTrigger as ArkPart,
        {
          "aria-label": m("resizable.resize"),
          ...attrs,
          class: styles.slots.resizeTrigger({ class: props.class }),
        },
        () =>
          props.withHandle
            ? h(
                "div",
                { class: styles.slots.resizeTriggerHandle() },
                h(PhDotsSixVertical, {
                  class: styles.slots.resizeTriggerIcon(),
                }),
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

export const Resizable = Object.assign(ResizableRoot, {
  Context: ResizableContext,
  EdgeHandle: ResizableEdgeHandle,
  Panel: ResizablePanel,
  ResizeTrigger: ResizableResizeTrigger,
  ResizeTriggerIndicator: ResizableResizeTriggerIndicator,
  RootProvider: ResizableRootProvider,
});
