import { Drawer as DrawerPrimitive } from "@ark-ui/vue/drawer";
import {
  drawerBodyVariants,
  drawerContentInnerVariants,
  drawerContentVariants,
  drawerDescriptionVariants,
  drawerFooterVariants,
  drawerGrabberIndicatorVariants,
  drawerGrabberVariants,
  drawerHeaderVariants,
  drawerInlineVariants,
  drawerOverlayVariants,
  drawerPositionerVariants,
  drawerTitleVariants,
} from "@pisagor/styles/ui/drawer";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, reactive, Teleport, watchEffect } from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Types
interface DrawerContextProps {
  testId?: string;
}

export interface DrawerHeaderProps {
  class?: unknown;
  description?: string;
  title?: string;
}

export interface DrawerBodyProps {
  class?: unknown;
  scrollFade?: boolean;
}

export interface DrawerProps extends WithTestId {
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [provideDrawerContext, useDrawer] = createContext<DrawerContextProps>({
  name: "Drawer",
  strict: false,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "down",
  end: "right",
  start: "left",
  up: "up",
} as const;

function drawerTeleport(content: ReturnType<typeof h> | ReturnType<typeof h>[]) {
  return h(Teleport, { to: "body" }, () => content);
}

// #region Components
export const DrawerRoot = defineComponent({
  inheritAttrs: false,
  name: "DrawerRoot",
  props: {
    lazyMount: { default: false, type: Boolean },
    testId: String,
    unmountOnExit: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<DrawerContextProps>({
      testId: props.testId,
    });

    watchEffect(() => {
      context.testId = props.testId;
    });

    provideDrawerContext(context);

    return () => {
      const { "data-testid": _, ...rest } = attrs;

      return h(
        DrawerPrimitive.Root as ArkPart,
        {
          ...rest,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
    };
  },
});

export const DrawerTrigger = defineComponent({
  inheritAttrs: false,
  name: "DrawerTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DrawerPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const DrawerOverlay = defineComponent({
  inheritAttrs: false,
  name: "DrawerOverlay",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DrawerPrimitive.Backdrop as ArkPart,
        {
          ...attrs,
          class: cn(drawerOverlayVariants(), props.class),
        },
        slots,
      );
  },
});

export const DrawerPositioner = defineComponent({
  inheritAttrs: false,
  name: "DrawerPositioner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<"default" | "inset"> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DrawerPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: cn(drawerPositionerVariants({ variant: props.variant }), props.class),
        },
        slots,
      );
  },
});

export const DrawerContent = defineComponent({
  inheritAttrs: false,
  name: "DrawerContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<"default" | "inset"> },
  },
  setup(props, { attrs, slots }) {
    const drawerContext = useDrawer() ?? {};

    return () =>
      drawerTeleport([
        h(DrawerOverlay),
        h(DrawerPrimitive.Context as ArkPart, null, {
          default: (drawerApi: { swipeDirection: keyof typeof SWIPE_DIRECTION_TO_PLACEMENT }) =>
            h(DrawerPositioner, { variant: props.variant }, () =>
              h(
                DrawerPrimitive.Content as ArkPart,
                {
                  ...attrs,
                  class: cn(
                    drawerContentVariants({
                      placement: SWIPE_DIRECTION_TO_PLACEMENT[drawerApi.swipeDirection],
                      variant: props.variant,
                    }),
                    props.class,
                  ),
                  "data-testid": drawerContext.testId,
                },
                () => [h(DrawerGrabber), slots.default?.()],
              ),
            ),
        }),
      ]);
  },
});

export const DrawerContentInner = defineComponent({
  inheritAttrs: false,
  name: "DrawerContentInner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(drawerContentInnerVariants(), props.class),
          "data-part": "content-inner",
          "data-scope": "drawer",
        },
        slots,
      );
  },
});

export const DrawerGrabber = defineComponent({
  inheritAttrs: false,
  name: "DrawerGrabber",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h("div", { class: drawerInlineVariants() }, () =>
        h(
          DrawerPrimitive.Grabber as ArkPart,
          {
            ...attrs,
            class: cn(drawerGrabberVariants(), props.class),
          },
          () => [
            h(DrawerPrimitive.GrabberIndicator as ArkPart, {
              class: drawerGrabberIndicatorVariants(),
            }),
            slots.default?.(),
          ],
        ),
      );
  },
});

export const DrawerHeader = defineComponent({
  inheritAttrs: false,
  name: "DrawerHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: String,
    title: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(drawerHeaderVariants(), props.class),
          "data-part": "header",
          "data-scope": "drawer",
        },
        () => [
          props.title ? h(DrawerTitle, null, () => props.title) : null,
          props.description ? h(DrawerDescription, null, () => props.description) : null,
          slots.default?.(),
        ],
      );
  },
});

export const DrawerTitle = defineComponent({
  inheritAttrs: false,
  name: "DrawerTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DrawerPrimitive.Title as ArkPart,
        {
          ...attrs,
          class: cn(drawerTitleVariants(), props.class),
        },
        slots,
      );
  },
});

export const DrawerDescription = defineComponent({
  inheritAttrs: false,
  name: "DrawerDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(drawerDescriptionVariants(), props.class),
          "data-part": "description",
          "data-scope": "drawer",
        },
        slots,
      );
  },
});

export const DrawerBody = defineComponent({
  inheritAttrs: false,
  name: "DrawerBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    scrollFade: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(drawerBodyVariants(), props.class),
          "data-part": "body",
          "data-scope": "drawer",
        },
        slots,
      );
  },
});

export const DrawerClose = defineComponent({
  inheritAttrs: false,
  name: "DrawerClose",
  setup(_, { attrs, slots }) {
    return () => h(DrawerPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const DrawerFooter = defineComponent({
  inheritAttrs: false,
  name: "DrawerFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(drawerFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "drawer",
        },
        slots,
      );
  },
});
// #endregion

export const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Close: DrawerClose,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  Header: DrawerHeader,
  Overlay: DrawerOverlay,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
