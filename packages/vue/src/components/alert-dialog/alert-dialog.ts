import { alertDialogBodyVariants } from "@pisagor/styles/ui/alert-dialog";
import { buttonVariants } from "@pisagor/styles/ui/button";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import {
  DialogBody,
  type DialogBodyProps,
  DialogClose,
  DialogContent,
  type DialogContentProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  type DialogHeaderProps,
  type DialogProps,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../dialog/dialog";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const AlertDialogRoot = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogRoot",
  setup(_, { attrs, slots }) {
    return () => h(DialogRoot, { ...attrs, role: "alertdialog" }, slots);
  },
});

export const AlertDialogTrigger = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogTrigger",
  setup(_, { attrs, slots }) {
    return () => h(DialogTrigger, { ...attrs }, slots);
  },
});

export const AlertDialogContent = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogContent",
  props: {
    bottomStickOnMobile: { default: true, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    showCloseButton: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<DialogContentProps["size"]> },
  },
  setup(props, { attrs, slots }) {
    return () => h(DialogContent, { ...attrs, ...props, showCloseButton: false }, slots);
  },
});

export const AlertDialogBody = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogBody",
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
          class: cn(alertDialogBodyVariants(), props.class),
          dataPart: "body",
          dataScope: "alert-dialog",
          scrollFade: props.scrollFade,
        },
        slots,
      );
  },
});

export const AlertDialogHeader = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogHeader",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        DialogHeader as ArkPart,
        { ...attrs, dataPart: "header", dataScope: "alert-dialog" },
        slots,
      );
  },
});

export const AlertDialogTitle = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogTitle",
  setup(_, { attrs, slots }) {
    return () => h(DialogTitle as ArkPart, { ...attrs }, slots);
  },
});

export const AlertDialogDescription = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogDescription",
  setup(_, { attrs, slots }) {
    return () => h(DialogDescription as ArkPart, { ...attrs }, slots);
  },
});

export const AlertDialogClose = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogClose",
  setup(_, { attrs, slots }) {
    return () => h(DialogClose, { ...attrs }, slots);
  },
});

export const AlertDialogFooter = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogFooter",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        DialogFooter as ArkPart,
        { ...attrs, dataPart: "footer", dataScope: "alert-dialog" },
        slots,
      );
  },
});

export const AlertDialogAction = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogAction",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: {
      default: "default",
      type: String as PropType<"default" | "destructive">,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "button",
        {
          ...attrs,
          class: cn(buttonVariants({ variant: props.variant }), props.class),
          type: "button",
        },
        slots,
      );
  },
});

export const AlertDialogCancel = defineComponent({
  inheritAttrs: false,
  name: "AlertDialogCancel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(AlertDialogClose, { asChild: true }, () =>
        h(
          "button",
          {
            ...attrs,
            class: cn(buttonVariants({ variant: "outline" }), props.class),
            type: "button",
          },
          slots,
        ),
      );
  },
});
// #endregion

export type AlertDialogProps = DialogProps;
export type {
  DialogBodyProps as AlertDialogBodyProps,
  DialogContentProps as AlertDialogContentProps,
  DialogHeaderProps as AlertDialogHeaderProps,
};

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  Close: AlertDialogClose,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
