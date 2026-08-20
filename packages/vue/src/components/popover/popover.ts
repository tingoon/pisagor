import { Popover as PopoverPrimitive } from "@ark-ui/vue/popover";
import {
  popoverBodyVariants,
  popoverContentVariants,
  popoverDescriptionVariants,
  popoverFooterVariants,
  popoverHeaderVariants,
  popoverInline2Variants,
  popoverTitleVariants,
} from "@pisagor/styles/ui/popover";
import { cn } from "@pisagor/utils";
import {
  type CSSProperties,
  defineComponent,
  h,
  type PropType,
  reactive,
  Teleport,
  watchEffect,
} from "vue";
import { renderIconCloseButton } from "../../internal/close-button";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";

// #region Types
interface PopoverContextProps {
  testId?: string;
}

export interface PopoverContentProps {
  class?: unknown;
  showCloseButton?: boolean;
}

export interface PopoverHeaderProps {
  class?: unknown;
  description?: string;
  title?: string;
}

export interface PopoverProps extends WithTestId {
  lazyMount?: boolean;
  modal?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [providePopoverContext, usePopoverRoot] = createContext<PopoverContextProps>({
  name: "PopoverRoot",
  strict: false,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

function popoverTeleport(content: ReturnType<typeof h> | ReturnType<typeof h>[]) {
  return h(Teleport, { to: "body" }, () => content);
}

// #region Parts
export const PopoverRoot = defineComponent({
  inheritAttrs: false,
  name: "PopoverRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<PopoverContextProps>({
      testId: props.testId,
    });

    watchEffect(() => {
      context.testId = props.testId;
    });

    providePopoverContext(context);

    return () => {
      const { "data-testid": _, ...rest } = attrs;

      return h(
        PopoverPrimitive.Root as ArkPart,
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

export const PopoverTrigger = defineComponent({
  inheritAttrs: false,
  name: "PopoverTrigger",
  setup(_, { attrs, slots }) {
    const popoverContext = usePopoverRoot() ?? {};

    return () =>
      h(
        PopoverPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          "data-testid": popoverContext.testId,
        },
        slots,
      );
  },
});

export const PopoverAnchor = defineComponent({
  inheritAttrs: false,
  name: "PopoverAnchor",
  setup(_, { attrs, slots }) {
    return () => h(PopoverPrimitive.Anchor as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverPositioner = defineComponent({
  inheritAttrs: false,
  name: "PopoverPositioner",
  setup(_, { attrs, slots }) {
    return () => h(PopoverPrimitive.Positioner as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverContent = defineComponent({
  inheritAttrs: false,
  name: "PopoverContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    showCloseButton: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const slots = popoverContentVariants();

      return popoverTeleport(
        h(PopoverPositioner, null, () =>
          h(
            PopoverPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: slots.base({ class: props.class }),
            },
            () => [
              children.default?.(),
              props.showCloseButton
                ? h(PopoverCloseTrigger, { asChild: true }, () =>
                    renderIconCloseButton(slots.close()),
                  )
                : null,
            ],
          ),
        ),
      );
    };
  },
});

export const PopoverHeader = defineComponent({
  inheritAttrs: false,
  name: "PopoverHeader",
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
          class: cn(popoverHeaderVariants(), props.class),
          "data-part": "header",
          "data-scope": "popover",
        },
        () => [
          props.title ? h(PopoverTitle, null, () => props.title) : null,
          props.description ? h(PopoverDescription, null, () => props.description) : null,
          slots.default?.(),
        ],
      );
  },
});

export const PopoverTitle = defineComponent({
  inheritAttrs: false,
  name: "PopoverTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PopoverPrimitive.Title as ArkPart,
        {
          ...attrs,
          class: cn(popoverTitleVariants(), props.class),
        },
        slots,
      );
  },
});

export const PopoverDescription = defineComponent({
  inheritAttrs: false,
  name: "PopoverDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PopoverPrimitive.Description as ArkPart,
        {
          ...attrs,
          class: cn(popoverDescriptionVariants(), props.class),
        },
        slots,
      );
  },
});

export const PopoverBody = defineComponent({
  inheritAttrs: false,
  name: "PopoverBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(popoverBodyVariants(), props.class),
          "data-part": "body",
          "data-scope": "popover",
        },
        slots,
      );
  },
});

export const PopoverFooter = defineComponent({
  inheritAttrs: false,
  name: "PopoverFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(popoverFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "popover",
        },
        slots,
      );
  },
});

export const PopoverCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "PopoverCloseTrigger",
  setup(_, { attrs, slots }) {
    return () => h(PopoverPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverArrow = defineComponent({
  inheritAttrs: false,
  name: "PopoverArrow",
  props: {
    style: { default: undefined, type: Object as PropType<CSSProperties> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PopoverPrimitive.Arrow as ArkPart,
        {
          ...attrs,
          style: {
            "--arrow-background": "var(--popover)",
            "--arrow-size": "calc(1.5 * var(--spacing))",
            ...props.style,
          } as CSSProperties,
        },
        () => [
          h(PopoverPrimitive.ArrowTip as ArkPart, { class: popoverInline2Variants() }),
          slots.default?.(),
        ],
      );
  },
});
// #endregion

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
