import { Drawer as DrawerPrimitive } from "@ark-ui/vue/drawer";
import {
  drawerBackdropVariants,
  drawerBodyVariants,
  drawerContentInnerVariants,
  drawerContentVariants,
  drawerDescriptionVariants,
  drawerFooterVariants,
  drawerGrabberVariants,
  drawerHeaderVariants,
  drawerPositionerVariants,
  drawerTitleVariants,
} from "@pisagor/styles/ui/drawer";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport } from "vue";

// #region Types
export interface DrawerHeaderProps {
  class?: unknown;
  description?: string;
  title?: string;
}

export interface DrawerBodyProps {
  class?: unknown;
  scrollFade?: boolean;
}

export interface DrawerProps {
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}
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

// #region Parts
export const DrawerRoot = defineComponent({
  inheritAttrs: false,
  name: "DrawerRoot",
  setup(_, { attrs, slots }) {
    return () => h(DrawerPrimitive.Root as ArkPart, { ...attrs }, slots);
  },
});

export const DrawerTrigger = defineComponent({
  inheritAttrs: false,
  name: "DrawerTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DrawerPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const DrawerBackdrop = defineComponent({
  inheritAttrs: false,
  name: "DrawerBackdrop",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DrawerPrimitive.Backdrop as ArkPart,
        {
          ...attrs,
          class: cn(drawerBackdropVariants(), props.class),
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
    return () =>
      drawerTeleport([
        h(DrawerBackdrop),
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
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = drawerGrabberVariants();

      return h("div", { class: slots.wrapper() }, () =>
        h(
          DrawerPrimitive.Grabber as ArkPart,
          {
            ...attrs,
            class: slots.base({ class: props.class }),
          },
          () => [
            h(DrawerPrimitive.GrabberIndicator as ArkPart, {
              class: slots.indicator(),
            }),
            children.default?.(),
          ],
        ),
      );
    };
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

export const DrawerCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "DrawerCloseTrigger",
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
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  Header: DrawerHeader,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
