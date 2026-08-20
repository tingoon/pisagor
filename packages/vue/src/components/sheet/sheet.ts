import { Dialog as DialogPrimitive } from "@ark-ui/vue/dialog";
import {
  sheetBodyVariants,
  sheetContentVariants,
  sheetFooterVariants,
  sheetInlineVariants,
  sheetPositionerVariants,
} from "@pisagor/styles/ui/sheet";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, Teleport } from "vue";
import { renderIconCloseButton } from "../../internal/close-button";
import {
  DialogBody,
  type DialogBodyProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  type DialogHeaderProps,
  DialogOverlay,
  type DialogProps,
  DialogRoot,
  DialogTitle,
  useDialog,
} from "../dialog";

// #region Types
export type SheetProps = DialogProps;
// #endregion

type ArkPart = Parameters<typeof h>[0];

function sheetTeleport(content: ReturnType<typeof h> | ReturnType<typeof h>[]) {
  return h(Teleport, { to: "body" }, () => content);
}

// #region Parts
export const SheetRoot = defineComponent({
  inheritAttrs: false,
  name: "SheetRoot",
  setup(_, { attrs, slots }) {
    return () => h(DialogRoot, { ...attrs }, slots);
  },
});

export const SheetTrigger = defineComponent({
  inheritAttrs: false,
  name: "SheetTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DialogPrimitive.Trigger as ArkPart, { ...attrs }, slots);
  },
});

export const SheetOverlay = defineComponent({
  inheritAttrs: false,
  name: "SheetOverlay",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => h(DialogOverlay, { ...attrs, class: props.class }, slots);
  },
});

export const SheetPositioner = defineComponent({
  inheritAttrs: false,
  name: "SheetPositioner",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    placement: {
      default: undefined,
      type: String as PropType<"top" | "right" | "bottom" | "left">,
    },
    variant: { default: "default", type: String as PropType<"default" | "inset"> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DialogPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: cn(
            sheetPositionerVariants({ placement: props.placement, variant: props.variant }),
            props.class,
          ),
        },
        slots,
      );
  },
});

export const SheetContent = defineComponent({
  inheritAttrs: false,
  name: "SheetContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    placement: { default: "right", type: String as PropType<"top" | "right" | "bottom" | "left"> },
    showCloseButton: { default: true, type: Boolean },
    variant: { default: "default", type: String as PropType<"default" | "inset"> },
  },
  setup(props, { attrs, slots }) {
    const dialogContext = useDialog();

    return () => {
      if (!dialogContext) {
        return null;
      }

      return sheetTeleport([
        h(SheetOverlay),
        h(SheetPositioner, { placement: props.placement, variant: props.variant }, () =>
          h(
            DialogPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(
                sheetContentVariants({ placement: props.placement, variant: props.variant }),
                props.class,
              ),
              "data-testid": dialogContext.testId,
            },
            () => [
              slots.default?.(),
              props.showCloseButton
                ? h(SheetClose, { asChild: true }, () =>
                    renderIconCloseButton(sheetInlineVariants()),
                  )
                : null,
            ],
          ),
        ),
      ]);
    };
  },
});

export const SheetHeader = defineComponent({
  inheritAttrs: false,
  name: "SheetHeader",
  setup(_, { attrs, slots }) {
    return () =>
      h(DialogHeader as ArkPart, { ...attrs, dataPart: "header", dataScope: "sheet" }, slots);
  },
});

export const SheetTitle = defineComponent({
  inheritAttrs: false,
  name: "SheetTitle",
  setup(_, { attrs, slots }) {
    return () => h(DialogTitle as ArkPart, { ...attrs }, slots);
  },
});

export const SheetDescription = defineComponent({
  inheritAttrs: false,
  name: "SheetDescription",
  setup(_, { attrs, slots }) {
    return () => h(DialogDescription as ArkPart, { ...attrs }, slots);
  },
});

export const SheetBody = defineComponent({
  inheritAttrs: false,
  name: "SheetBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    scrollFade: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DialogBody as ArkPart,
        {
          ...attrs,
          class: cn(sheetBodyVariants(), props.class),
          dataPart: "body",
          dataScope: "sheet",
          scrollFade: props.scrollFade,
        },
        slots,
      );
  },
});

export const SheetClose = defineComponent({
  inheritAttrs: false,
  name: "SheetClose",
  setup(_, { attrs, slots }) {
    return () => h(DialogPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const SheetFooter = defineComponent({
  inheritAttrs: false,
  name: "SheetFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DialogFooter as ArkPart,
        {
          ...attrs,
          class: cn(sheetFooterVariants(), props.class),
          dataPart: "footer",
          dataScope: "sheet",
        },
        slots,
      );
  },
});
// #endregion

export type { DialogBodyProps as SheetBodyProps, DialogHeaderProps as SheetHeaderProps };

export const Sheet = Object.assign(SheetRoot, {
  Body: SheetBody,
  Close: SheetClose,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Positioner: SheetPositioner,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
