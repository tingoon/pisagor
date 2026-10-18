import { Dialog as AlertDialogPrimitive } from "@ark-ui/vue";
import type { AlertDialogProps as BaseAlertDialogProps } from "@pisagor/props";
import {
  type AlertDialogRecipe,
  type AlertDialogVariantProps,
  alertDialogRecipe,
  buttonRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  reactive,
  Teleport,
  type VNodeChild,
  watchEffect,
} from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
  renderIconCloseButton,
} from "../internal";
import { useLocale } from "./provider/context";

// #region Slot recipe context
const { provideStyles: provideAlertDialogStyles, withContext } =
  createSlotRecipeContext({
    name: "AlertDialog",
    recipe: alertDialogRecipe,
  });
// #endregion

// #region Types
interface AlertDialogContextValue {
  modal?: boolean;
  slots: AlertDialogRecipe;
}

export interface AlertDialogContentProps extends AlertDialogVariantProps {
  class?: unknown;
  showCloseButton?: boolean;
}

export interface AlertDialogBodyProps {
  class?: unknown;
  scrollFade?: boolean;
}

export interface AlertDialogHeaderProps {
  class?: unknown;
  description?: string;
  title?: string;
}

export interface AlertDialogProps extends BaseAlertDialogProps {
  collapsible?: boolean;
  lazyMount?: boolean;
  modal?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [provideAlertDialogContext, useAlertDialogLocal] =
  createContext("AlertDialogLocal")<AlertDialogContextValue>();

function useAlertDialogSlots() {
  return useAlertDialogLocal()?.slots ?? alertDialogRecipe();
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function alertDialogTeleport(content: VNodeChild) {
  return h(Teleport, { to: "body" }, [content]);
}

// #region Parts
export const AlertDialogRoot = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    modal: { default: true, type: Boolean },
    recipe: {
      default: alertDialogRecipe,
      type: Function as PropType<typeof alertDialogRecipe>,
    },
    role: { default: "alertdialog", type: String },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideAlertDialogStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    const context = reactive<AlertDialogContextValue>({
      modal: props.modal,
      slots: recipeSlots.value,
    });

    watchEffect(() => {
      context.modal = props.modal;
    });

    provideAlertDialogContext(context);

    return () =>
      h(
        AlertDialogPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          modal: props.modal,
          role: props.role,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const AlertDialogTrigger = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogTrigger",
  setup(_, { attrs, slots }) {
    return () => h(AlertDialogPrimitive.Trigger as ArkPart, attrs, slots);
  },
});

export const AlertDialogBackdrop = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogBackdrop",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs }) {
    const alertDialogContext = useAlertDialogLocal();

    return () => {
      if (!alertDialogContext?.modal) {
        return null;
      }

      return h(AlertDialogPrimitive.Backdrop as ArkPart, {
        ...attrs,
        class: alertDialogContext.slots.backdrop({ class: props.class }),
      });
    };
  },
});

export const AlertDialogPositioner = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogPositioner",
  props: {
    bottomStickOnMobile: { default: undefined, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const alertDialogSlots = useAlertDialogSlots();

      return h(
        AlertDialogPrimitive.Positioner as ArkPart,
        {
          ...attrs,
          class: alertDialogSlots.positioner({
            bottomStickOnMobile: props.bottomStickOnMobile || undefined,
            class: props.class,
          }),
        },
        slots,
      );
    };
  },
});

export const AlertDialogContent = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogContent",
  props: {
    bottomStickOnMobile: { default: true, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    showCloseButton: { default: false, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "fullscreen"
        | "lg"
        | "md"
        | "sm"
        | "xl"
      >,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const alertDialogContext = useAlertDialogLocal();

    return () => {
      if (!alertDialogContext) {
        return null;
      }

      return alertDialogTeleport([
        h(AlertDialogBackdrop),
        h(
          AlertDialogPositioner,
          { bottomStickOnMobile: props.bottomStickOnMobile },
          () =>
            h(
              AlertDialogPrimitive.Content as ArkPart,
              {
                ...attrs,
                class: alertDialogContext.slots.content({
                  bottomStickOnMobile: props.bottomStickOnMobile,
                  class: props.class,
                  size: props.size,
                }),
              },
              () => [
                slots.default?.(),
                props.showCloseButton
                  ? h(AlertDialogCloseTrigger, { asChild: true }, () =>
                      renderIconCloseButton(
                        m("dialog.close"),
                        alertDialogContext.slots.inline(),
                      ),
                    )
                  : null,
              ],
            ),
        ),
      ]);
    };
  },
});

export const AlertDialogBody = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogBody",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    scrollFade: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const alertDialogSlots = useAlertDialogSlots();

      return h(
        "div",
        {
          ...attrs,
          class: alertDialogSlots.body({ class: props.class }),
          "data-part": "body",
          "data-scope": "alert-dialog",
        },
        slots,
      );
    };
  },
});

export const AlertDialogHeader = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogHeader",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    description: String,
    title: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const alertDialogSlots = useAlertDialogSlots();

      return h(
        "div",
        {
          ...attrs,
          class: alertDialogSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "alert-dialog",
        },
        () => [
          props.title ? h(AlertDialogTitle, null, () => props.title) : null,
          props.description
            ? h(AlertDialogDescription, null, () => props.description)
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const AlertDialogTitle = withContext(AlertDialogPrimitive.Title, {
  name: "Title",
});

export const AlertDialogDescription = withContext(
  AlertDialogPrimitive.Description,
  { name: "Description" },
);

export const AlertDialogCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogCloseTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(AlertDialogPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const AlertDialogFooter = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogFooter",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const alertDialogSlots = useAlertDialogSlots();

      return h(
        "div",
        {
          ...attrs,
          class: alertDialogSlots.footer({ class: props.class }),
          "data-part": "footer",
          "data-scope": "alert-dialog",
        },
        slots,
      );
    };
  },
});

export const AlertDialogAction = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogAction",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    variant: {
      default: "default",
      type: String as PropType<"default" | "destructive">,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(AlertDialogCloseTrigger, { asChild: true }, () =>
        h(
          "button",
          {
            ...attrs,
            class: cn(
              buttonRecipe({ variant: props.variant }).base(),
              props.class,
            ),
            type: "button",
          },
          slots,
        ),
      );
  },
});

export const AlertDialogCancel = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogCancel",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(AlertDialogCloseTrigger, { asChild: true }, () =>
        h(
          "button",
          {
            ...attrs,
            class: cn(buttonRecipe({ variant: "outline" }).base(), props.class),
            type: "button",
          },
          slots,
        ),
      );
  },
});
// #endregion

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Backdrop: AlertDialogBackdrop,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  CloseTrigger: AlertDialogCloseTrigger,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Positioner: AlertDialogPositioner,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
