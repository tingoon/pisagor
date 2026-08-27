import { Dialog as DialogPrimitive } from "@ark-ui/vue/dialog";
import { type DialogVariants, dialogVariants } from "@pisagor/recipes/dialog";
import {
  defineComponent,
  h,
  type PropType,
  reactive,
  Teleport,
  type VNodeChild,
  watchEffect,
} from "vue";
import { renderIconCloseButton } from "../../internal/close-button";
import { createContext } from "../../utils/create-context";

// #region Types
interface DialogContextValue {
  modal?: boolean;
  slots: DialogVariants;
}

export interface DialogContentProps {
  bottomStickOnMobile?: boolean;
  class?: unknown;
  showCloseButton?: boolean;
  size?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "fullscreen" | "lg" | "md" | "sm" | "xl";
}

export interface DialogBodyProps {
  class?: unknown;
  dataPart?: string;
  dataScope?: string;
  scrollFade?: boolean;
}

export interface DialogHeaderProps {
  class?: unknown;
  dataPart?: string;
  dataScope?: string;
  description?: string;
  title?: string;
}

export interface DialogProps {
  collapsible?: boolean;
  lazyMount?: boolean;
  modal?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [provideDialogContext, useDialogLocal] = createContext<DialogContextValue>({
  name: "DialogLocal",
});

export { useDialogLocal as useDialog };

// #endregion

type ArkPart = Parameters<typeof h>[0];

function dialogTeleport(content: VNodeChild) {
  return h(Teleport, { to: "body" }, () => content);
}

function useDialogSlots() {
  return useDialogLocal()?.slots ?? dialogVariants();
}

// #region Parts
export const DialogRoot = defineComponent({
  inheritAttrs: false,
  name: "DialogRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    modal: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const context = reactive<DialogContextValue>({
      modal: props.modal,
      slots: dialogVariants(),
    });

    watchEffect(() => {
      context.modal = props.modal;
    });

    provideDialogContext(context);

    return () =>
      h(
        DialogPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          modal: props.modal,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const DialogTrigger = defineComponent({
  inheritAttrs: false,
  name: "DialogTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DialogPrimitive.Trigger as ArkPart, attrs, slots);
  },
});

export const DialogBackdrop = defineComponent({
  inheritAttrs: false,
  name: "DialogBackdrop",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    const dialogContext = useDialogLocal();

    return () => {
      if (!dialogContext?.modal) {
        return null;
      }

      return h(DialogPrimitive.Backdrop as ArkPart, {
        ...attrs,
        class: dialogContext.slots.backdrop({ class: props.class }),
      });
    };
  },
});

export const DialogPositioner = defineComponent({
  inheritAttrs: false,
  name: "DialogPositioner",
  props: {
    bottomStickOnMobile: { default: undefined, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const dialogSlots = useDialogSlots();

      return h(
        DialogPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: dialogSlots.positioner({
            bottomStickOnMobile: props.bottomStickOnMobile || undefined,
            class: props.class,
          }),
        },
        slots,
      );
    };
  },
});

export const DialogContent = defineComponent({
  inheritAttrs: false,
  name: "DialogContent",
  props: {
    bottomStickOnMobile: { default: true, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    showCloseButton: { default: true, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<
        "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "fullscreen" | "lg" | "md" | "sm" | "xl"
      >,
    },
  },
  setup(props, { attrs, slots }) {
    const dialogContext = useDialogLocal();

    return () => {
      if (!dialogContext) {
        return null;
      }

      return dialogTeleport([
        h(DialogBackdrop),
        h(DialogPositioner, { bottomStickOnMobile: props.bottomStickOnMobile }, () =>
          h(
            DialogPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: dialogContext.slots.content({
                bottomStickOnMobile: props.bottomStickOnMobile,
                class: props.class,
                size: props.size,
              }),
            },
            () => [
              slots.default?.(),
              props.showCloseButton
                ? h(DialogCloseTrigger, { asChild: true }, () =>
                    renderIconCloseButton(dialogContext.slots.inline()),
                  )
                : null,
            ],
          ),
        ),
      ]);
    };
  },
});

export const DialogBody = defineComponent({
  inheritAttrs: false,
  name: "DialogBody",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    dataPart: { default: "body", type: String },
    dataScope: { default: "dialog", type: String },
    scrollFade: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-part": _, "data-scope": __, ...rest } = attrs;
      const dialogSlots = useDialogSlots();

      return h(
        "div",
        {
          ...rest,
          class: dialogSlots.body({ class: props.class }),
          "data-part": props.dataPart,
          "data-scope": props.dataScope,
        },
        slots,
      );
    };
  },
});

export const DialogHeader = defineComponent({
  inheritAttrs: false,
  name: "DialogHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    dataPart: { default: "header", type: String },
    dataScope: { default: "dialog", type: String },
    description: String,
    title: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-part": _, "data-scope": __, ...rest } = attrs;
      const dialogSlots = useDialogSlots();

      return h(
        "div",
        {
          ...rest,
          class: dialogSlots.header({ class: props.class }),
          "data-part": props.dataPart,
          "data-scope": props.dataScope,
        },
        () => [
          props.title ? h(DialogTitle, null, () => props.title) : null,
          props.description ? h(DialogDescription, null, () => props.description) : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const DialogTitle = defineComponent({
  inheritAttrs: false,
  name: "DialogTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const dialogSlots = useDialogSlots();

      return h(
        DialogPrimitive.Title as ArkPart,
        {
          ...attrs,
          class: dialogSlots.title({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const DialogDescription = defineComponent({
  inheritAttrs: false,
  name: "DialogDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const dialogSlots = useDialogSlots();

      return h(
        DialogPrimitive.Description as ArkPart,
        {
          ...attrs,
          class: dialogSlots.description({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const DialogCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "DialogCloseTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DialogPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const DialogFooter = defineComponent({
  inheritAttrs: false,
  name: "DialogFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    dataPart: { default: "footer", type: String },
    dataScope: { default: "dialog", type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { "data-part": _, "data-scope": __, ...rest } = attrs;
      const dialogSlots = useDialogSlots();

      return h(
        "div",
        {
          ...rest,
          class: dialogSlots.footer({ class: props.class }),
          "data-part": props.dataPart,
          "data-scope": props.dataScope,
        },
        slots,
      );
    };
  },
});
// #endregion
