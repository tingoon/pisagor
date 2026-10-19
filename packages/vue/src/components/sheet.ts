import { Dialog as DialogPrimitive } from "@ark-ui/vue";
import type {
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogPositionerProps,
  DialogRootProps,
} from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import type { SheetContract, SheetRootContract } from "@pisagor/contracts";
import { sheetRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { contentProp, createSlotRecipeContext, slotOrProp } from "../internal";
import { Button } from "./button";
import { Dialog, type DialogBodyProps, type DialogFooterProps } from "./dialog";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Sheet",
  recipe: sheetRecipe,
});
// #endregion

// #region Types
export type SheetRootProps = DialogRootProps & SheetRootContract;

export type SheetPositionerProps = DialogPositionerProps;

export type SheetContentProps = DialogContentProps;

export type SheetBodyProps = DialogBodyProps;

export type SheetFooterProps = DialogFooterProps;

export interface SheetProps
  extends Omit<SheetRootProps, "title">, SheetContract {
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
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /** Sheet title. Also available as the `title` slot. */
  title?: VNodeChild;
}

export type {
  DialogBackdropProps as SheetBackdropProps,
  DialogCloseTriggerProps as SheetCloseTriggerProps,
  DialogDescriptionProps as SheetDescriptionProps,
  DialogHeaderProps as SheetHeaderProps,
  DialogTitleProps as SheetTitleProps,
  DialogTriggerProps as SheetTriggerProps,
} from "./dialog";
// #endregion

// #region Parts
// Sheet is a Dialog with edge placement: the root also opens Dialog's styles
// context, so shared parts (header, title, …) are Dialog's own and the
// sheet-specific slots layer on top of them.
const Root = withProvider<SheetRootProps>(Dialog.Root, {
  name: "Root",
  renderless: true,
  slot: "base",
});

const Positioner = withContext<SheetPositionerProps>(
  DialogPrimitive.Positioner,
  { defaultProps: { "data-scope": "dialog" }, name: "Positioner" },
);

const Content = withContext<SheetContentProps>(DialogPrimitive.Content, {
  defaultProps: { "data-scope": "dialog" },
  name: "Content",
});

const Body = withContext(Dialog.Body, { name: "Body" });

const Footer = withContext(Dialog.Footer, { name: "Footer" });

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  {
    defaultProps: { "data-scope": "dialog" },
    name: "CloseTrigger",
    slot: "inline",
  },
);
// #endregion

// #region Shorthand
/**
 * Slots: `trigger` (single element, rendered `as-child`), `title`,
 * `description`, `default` (scrollable body) and `actions` (footer).
 */
export const SheetShorthand = defineComponent({
  inheritAttrs: false,
  name: "Sheet",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<SheetProps["classNames"]>,
    },
    description: contentProp,
    modal: { default: true, type: Boolean },
    scrollFade: { default: false, type: Boolean },
    showCloseButton: { default: true, type: Boolean },
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
          ? h(Dialog.Trigger, { asChild: true }, { default: slots.trigger })
          : null,

        h(Teleport, { to: "body" }, [
          props.modal ? h(Dialog.Backdrop) : null,

          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () => [
              title || description
                ? h(Dialog.Header, null, () => [
                    title ? h(Dialog.Title, null, title) : null,
                    description
                      ? h(Dialog.Description, null, description)
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
                          "aria-label": m("sheet.close"),
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

export const Sheet = Object.assign(SheetShorthand, {
  Backdrop: Dialog.Backdrop,
  Body,
  CloseTrigger: Dialog.CloseTrigger,
  Content,
  Description: Dialog.Description,
  Footer,
  Header: Dialog.Header,
  Positioner,
  Root,
  Title: Dialog.Title,
  Trigger: Dialog.Trigger,
});
