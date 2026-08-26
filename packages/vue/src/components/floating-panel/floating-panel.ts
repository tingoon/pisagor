import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/vue/floating-panel";
import { PhArrowsOut, PhCornersIn, PhMinus } from "@phosphor-icons/vue";
import {
  type FloatingPanelVariants,
  floatingPanelVariants,
} from "@pisagor/styles/ui/floating-panel";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, reactive, Teleport, type VNodeChild } from "vue";
import { createContext } from "../../utils/create-context";
import { Button, type ButtonProps } from "../button";
import { ScrollArea } from "../scroll-area";

// #region Types
interface FloatingPanelContextProps {
  slots: FloatingPanelVariants;
}

interface FloatingPanelContentProps {
  class?: unknown;
  /**
   * Whether to enable a resizable panel.
   *
   * @defaultValue true
   */
  resizable?: boolean;
}

interface FloatingPanelHeaderProps {
  class?: unknown;
  /** Renders FloatingPanel.Title with the provided text */
  title?: string;
}

interface FloatingPanelStageTriggerProps {
  class?: unknown;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
}

interface FloatingPanelBodyProps {
  class?: unknown;
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}
// #endregion

// #region Context
const [provideFloatingPanelContext, useFloatingPanel] = createContext<FloatingPanelContextProps>({
  name: "FloatingPanel",
  strict: false,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];
type ResizeAxis = "e" | "n" | "ne" | "nw" | "s" | "se" | "sw" | "w";

const RESIZE_AXES: ResizeAxis[] = ["n", "e", "w", "s", "ne", "se", "sw", "nw"];

function floatingPanelTeleport(content: VNodeChild) {
  return h(Teleport, { to: "body" }, () => content);
}

function useFloatingPanelSlots() {
  return useFloatingPanel()?.slots ?? floatingPanelVariants();
}

// #region Parts
export const FloatingPanelRoot = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel",
  props: {
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<FloatingPanelContextProps>({
      slots: floatingPanelVariants(),
    });
    provideFloatingPanelContext(context);

    return () =>
      h(
        FloatingPanelPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const FloatingPanelTrigger = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Trigger",
  setup(_, { attrs, slots }) {
    return () => h(FloatingPanelPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const FloatingPanelResizeTrigger = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.ResizeTrigger",
  props: {
    axis: { required: true, type: String as PropType<ResizeAxis> },
  },
  setup(props, { attrs }) {
    return () =>
      h(FloatingPanelPrimitive.ResizeTrigger as ArkPart, {
        ...attrs,
        axis: props.axis,
      });
  },
});

export const FloatingPanelContent = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Content",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    resizable: { default: true, type: Boolean as PropType<FloatingPanelContentProps["resizable"]> },
  },
  setup(props, { attrs, slots }) {
    const floatingPanelContext = useFloatingPanel();

    return () => {
      const panelSlots = floatingPanelContext?.slots ?? floatingPanelVariants();

      return floatingPanelTeleport(
        h(FloatingPanelPrimitive.Positioner as ArkPart, { class: panelSlots.positioner() }, () =>
          h(
            FloatingPanelPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(panelSlots.content(), props.class),
            },
            () => [
              slots.default?.(),
              props.resizable
                ? RESIZE_AXES.map((axis) => h(FloatingPanelResizeTrigger, { axis, key: axis }))
                : null,
            ],
          ),
        ),
      );
    };
  },
});

export const FloatingPanelDragTrigger = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.DragTrigger",
  setup(_, { attrs, slots }) {
    return () => h(FloatingPanelPrimitive.DragTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FloatingPanelHeader = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Header",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    title: String as PropType<FloatingPanelHeaderProps["title"]>,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(FloatingPanelDragTrigger, null, () =>
        h(
          FloatingPanelPrimitive.Header as ArkPart,
          { ...attrs, class: cn(panelSlots.header(), props.class) },
          () => [
            props.title ? h(FloatingPanelTitle, null, () => props.title) : null,
            slots.default?.(),
          ],
        ),
      );
    };
  },
});

export const FloatingPanelControl = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Control",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(
        FloatingPanelPrimitive.Control as ArkPart,
        { ...attrs, class: cn(panelSlots.control(), props.class) },
        slots,
      );
    };
  },
});

export const FloatingPanelMinimize = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Minimize",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: "icon-xs", type: String as PropType<FloatingPanelStageTriggerProps["size"]> },
    variant: {
      default: "ghost",
      type: String as PropType<FloatingPanelStageTriggerProps["variant"]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        FloatingPanelPrimitive.StageTrigger as ArkPart,
        { ...attrs, asChild: true, stage: "minimized" },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Minimize",
              class: props.class,
              size: props.size,
              variant: props.variant,
            },
            () => h(PhMinus),
          ),
      );
  },
});

export const FloatingPanelMaximize = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Maximize",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: "icon-xs", type: String as PropType<FloatingPanelStageTriggerProps["size"]> },
    variant: {
      default: "ghost",
      type: String as PropType<FloatingPanelStageTriggerProps["variant"]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        FloatingPanelPrimitive.StageTrigger as ArkPart,
        { ...attrs, asChild: true, stage: "maximized" },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Maximize",
              class: props.class,
              size: props.size,
              variant: props.variant,
            },
            () => h(PhArrowsOut),
          ),
      );
  },
});

export const FloatingPanelRestore = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Restore",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    size: { default: "icon-xs", type: String as PropType<FloatingPanelStageTriggerProps["size"]> },
    variant: {
      default: "outline",
      type: String as PropType<FloatingPanelStageTriggerProps["variant"]>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(
        FloatingPanelPrimitive.StageTrigger as ArkPart,
        { ...attrs, asChild: true, stage: "default" },
        () =>
          h(
            Button as ArkPart,
            {
              "aria-label": "Restore",
              class: props.class,
              size: props.size,
              variant: props.variant,
            },
            () => [
              h(PhCornersIn, { class: panelSlots.maximizedIcon() }),
              h(PhArrowsOut, { class: panelSlots.minimizedIcon() }),
            ],
          ),
      );
    };
  },
});

export const FloatingPanelTitle = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Title",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(
        FloatingPanelPrimitive.Title as ArkPart,
        {
          ...attrs,
          class: cn(panelSlots.title(), props.class),
        },
        slots,
      );
    };
  },
});

export const FloatingPanelStageTrigger = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.StageTrigger",
  setup(_, { attrs, slots }) {
    return () => h(FloatingPanelPrimitive.StageTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FloatingPanelCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.CloseTrigger",
  setup(_, { attrs, slots }) {
    return () => h(FloatingPanelPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const FloatingPanelBody = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Body",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    scrollFade: { default: false, type: Boolean as PropType<FloatingPanelBodyProps["scrollFade"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(ScrollArea, { scrollFade: props.scrollFade }, () =>
        h(
          FloatingPanelPrimitive.Body as ArkPart,
          {
            ...attrs,
            class: cn(panelSlots.body(), props.class),
          },
          slots,
        ),
      );
    };
  },
});

export const FloatingPanelFooter = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel.Footer",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const panelSlots = useFloatingPanelSlots();

      return h(
        "div",
        {
          ...attrs,
          class: cn(panelSlots.footer(), props.class),
          "data-part": "footer",
          "data-scope": "floating-panel",
        },
        slots,
      );
    };
  },
});
// #endregion
