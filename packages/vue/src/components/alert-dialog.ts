import { Dialog as AlertDialogPrimitive, type HTMLArkProps } from "@ark-ui/vue";
import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogRootProps as DialogRootPrimitiveProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import type {
  AlertDialogContract,
  AlertDialogRootContract,
} from "@pisagor/contracts";
import { alertDialogRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { contentProp, createSlotRecipeContext, slotOrProp } from "../internal";
import { Button, type ButtonProps } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "AlertDialog",
  recipe: alertDialogRecipe,
});
// #endregion

// #region Types
export type AlertDialogRootProps = DialogRootPrimitiveProps &
  AlertDialogRootContract;

export type AlertDialogHeaderProps = HTMLArkProps<"div">;

export type AlertDialogBodyProps = HTMLArkProps<"div">;

export type AlertDialogFooterProps = HTMLArkProps<"div">;

export interface AlertDialogActionProps extends Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @defaultValue "default"
   */
  variant?: "default" | "destructive";
}

export type AlertDialogCancelProps = Omit<ButtonProps, "variant">;

export interface AlertDialogProps
  extends
    Omit<AlertDialogRootProps, "title">,
    Omit<AlertDialogContract, "actions" | "description" | "title" | "trigger"> {
  /** Footer action area. Also available as the `actions` slot. */
  actions?: VNodeChild;
  /** Supporting copy in the header. Also available as the `description` slot. */
  description?: VNodeChild;
  /**
   * Whether to add a fade effect to the body scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
  /** Alert dialog title. Also available as the `title` slot. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
const Root = withProvider<AlertDialogRootProps>(AlertDialogPrimitive.Root, {
  defaultProps: { role: "alertdialog" },
  name: "Root",
  renderless: true,
  slot: "base",
});

// Zag looks triggers up by `[data-scope="dialog"]`, so keep the Ark scope.
const Trigger = withContext<DialogTriggerProps>(AlertDialogPrimitive.Trigger, {
  defaultProps: { "data-scope": "dialog" },
  name: "Trigger",
});

const Backdrop = withContext<DialogBackdropProps>(
  AlertDialogPrimitive.Backdrop,
  { name: "Backdrop" },
);

const Positioner = withContext<DialogPositionerProps>(
  AlertDialogPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DialogContentProps>(AlertDialogPrimitive.Content, {
  name: "Content",
});

const Header = withContext("div", { name: "Header" });

const Title = withContext<DialogTitleProps>(AlertDialogPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DialogDescriptionProps>(
  AlertDialogPrimitive.Description,
  { name: "Description" },
);

const Body = withContext("div", { name: "Body" });

const Footer = withContext("div", { name: "Footer" });

const CloseTrigger = withContext<DialogCloseTriggerProps>(
  AlertDialogPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  AlertDialogPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "inline" },
);

/** Confirming action: a close trigger rendered as a `Button`. */
const Action = defineComponent({
  inheritAttrs: false,
  name: "AlertDialog.Action",
  props: {
    variant: {
      default: "default",
      type: String as PropType<AlertDialogActionProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(CloseTrigger, { asChild: true }, () =>
        h(
          Button,
          { ...(attrs as Omit<ButtonProps, "class">), variant: props.variant },
          () => slots.default?.(),
        ),
      );
  },
});

/** Dismissing action: a close trigger rendered as an outline `Button`. */
const Cancel = defineComponent({
  inheritAttrs: false,
  name: "AlertDialog.Cancel",
  setup(_, { attrs, slots }) {
    return () =>
      h(CloseTrigger, { asChild: true }, () =>
        h(
          Button,
          { ...(attrs as Omit<ButtonProps, "class">), variant: "outline" },
          () => slots.default?.(),
        ),
      );
  },
});
// #endregion

// #region Shorthand
/**
 * Slots: `trigger` (single element, rendered `as-child`), `title`,
 * `description`, `default` (scrollable body) and `actions` (footer).
 */
export const AlertDialogShorthand = defineComponent({
  inheritAttrs: false,
  name: "AlertDialog",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<AlertDialogProps["classNames"]>,
    },
    description: contentProp,
    modal: { default: true, type: Boolean },
    scrollFade: { default: false, type: Boolean },
    showCloseButton: { default: false, type: Boolean },
    title: contentProp,
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () => {
      const classNames = props.classNames;
      const title = slotOrProp(slots.title, props.title);
      const description = slotOrProp(slots.description, props.description);
      const actions = slotOrProp(slots.actions, props.actions);

      return h(Root, { ...attrs, modal: props.modal }, () => [
        slots.trigger
          ? h(
              Trigger,
              { asChild: true, class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          props.modal ? h(Backdrop, { class: classNames?.backdrop }) : null,

          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () => [
              title || description
                ? h(Header, { class: classNames?.header }, () => [
                    title
                      ? h(Title, { class: classNames?.title }, title)
                      : null,
                    description
                      ? h(
                          Description,
                          { class: classNames?.description },
                          description,
                        )
                      : null,
                  ])
                : null,

              slots.default
                ? h(ScrollArea, { scrollFade: props.scrollFade }, () =>
                    h(Body, { class: classNames?.body }, slots.default),
                  )
                : null,

              actions
                ? h(Footer, { class: classNames?.footer }, actions)
                : null,

              props.showCloseButton
                ? h(
                    InlineCloseTrigger,
                    { asChild: true, class: classNames?.inline },
                    () =>
                      h(
                        Button,
                        {
                          "aria-label": m("dialog.close"),
                          size: "icon-sm",
                          variant: "ghost",
                        },
                        () => h(PhX),
                      ),
                  )
                : null,
            ]),
          ),
        ]),
      ]);
    };
  },
});
// #endregion

export type {
  DialogBackdropProps as AlertDialogBackdropProps,
  DialogCloseTriggerProps as AlertDialogCloseTriggerProps,
  DialogContentProps as AlertDialogContentProps,
  DialogDescriptionProps as AlertDialogDescriptionProps,
  DialogPositionerProps as AlertDialogPositionerProps,
  DialogTitleProps as AlertDialogTitleProps,
  DialogTriggerProps as AlertDialogTriggerProps,
} from "@ark-ui/vue";

export const AlertDialog = Object.assign(AlertDialogShorthand, {
  Action,
  Backdrop,
  Body,
  Cancel,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
