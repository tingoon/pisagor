import { Dialog as DialogPrimitive } from "@ark-ui/vue/dialog";
import { type SheetVariants, sheetVariants } from "@pisagor/styles/ui/sheet";
import { defineComponent, h, type PropType, reactive, Teleport } from "vue";
import { renderIconCloseButton } from "../../internal/close-button";
import { createContext } from "../../utils/create-context";
import {
  DialogBackdrop,
  DialogBody,
  type DialogBodyProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  type DialogHeaderProps,
  type DialogProps,
  DialogRoot,
  DialogTitle,
  useDialog,
} from "../dialog";

// #region Types
interface SheetContextValue {
  slots: SheetVariants;
}

export type SheetProps = DialogProps;
// #endregion

// #region Context
const [provideSheetContext, useSheetLocal] = createContext<SheetContextValue>({
  name: "SheetLocal",
  strict: false,
});

function useSheetSlots() {
  return useSheetLocal()?.slots ?? sheetVariants();
}
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
    const context = reactive<SheetContextValue>({
      slots: sheetVariants(),
    });
    provideSheetContext(context);

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

export const SheetBackdrop = defineComponent({
  inheritAttrs: false,
  name: "SheetBackdrop",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => h(DialogBackdrop, { ...attrs, class: props.class }, slots);
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
    return () => {
      const sheetSlots = useSheetSlots();

      return h(
        DialogPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: sheetSlots.positioner({
            class: props.class,
            placement: props.placement,
            variant: props.variant,
          }),
        },
        slots,
      );
    };
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

      const sheetSlots = useSheetSlots();

      return sheetTeleport([
        h(SheetBackdrop),
        h(SheetPositioner, { placement: props.placement, variant: props.variant }, () =>
          h(
            DialogPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: sheetSlots.content({
                class: props.class,
                placement: props.placement,
                variant: props.variant,
              }),
            },
            () => [
              slots.default?.(),
              props.showCloseButton
                ? h(SheetCloseTrigger, { asChild: true }, () =>
                    renderIconCloseButton(sheetSlots.inline()),
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
    return () => {
      const sheetSlots = useSheetSlots();

      return h(
        DialogBody as ArkPart,
        {
          ...attrs,
          class: sheetSlots.body({ class: props.class }),
          dataPart: "body",
          dataScope: "sheet",
          scrollFade: props.scrollFade,
        },
        slots,
      );
    };
  },
});

export const SheetCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "SheetCloseTrigger",
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
    return () => {
      const sheetSlots = useSheetSlots();

      return h(
        DialogFooter as ArkPart,
        {
          ...attrs,
          class: sheetSlots.footer({ class: props.class }),
          dataPart: "footer",
          dataScope: "sheet",
        },
        slots,
      );
    };
  },
});
// #endregion

export type { DialogBodyProps as SheetBodyProps, DialogHeaderProps as SheetHeaderProps };

export const Sheet = Object.assign(SheetRoot, {
  Backdrop: SheetBackdrop,
  Body: SheetBody,
  CloseTrigger: SheetCloseTrigger,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Positioner: SheetPositioner,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
