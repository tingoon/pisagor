import { Dialog as DialogPrimitive, type HTMLArkProps } from "@ark-ui/vue";
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
import type { DialogContract, DialogRootContract } from "@pisagor/contracts";
import { dialogRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { contentProp, createSlotRecipeContext, slotOrProp } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Dialog",
  recipe: dialogRecipe,
});
// #endregion

// #region Types
export type DialogRootProps = DialogRootPrimitiveProps & DialogRootContract;

export type DialogHeaderProps = HTMLArkProps<"div">;

export type DialogBodyProps = HTMLArkProps<"div">;

export type DialogFooterProps = HTMLArkProps<"div">;

export interface DialogProps
  extends
    Omit<DialogRootProps, "title">,
    Omit<DialogContract, "actions" | "description" | "title" | "trigger"> {
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
  /** Dialog title. Also available as the `title` slot. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
const Root = withProvider<DialogRootProps>(DialogPrimitive.Root, {
  name: "Root",
  renderless: true,
  slot: "base",
});

const Trigger = withContext<DialogTriggerProps>(DialogPrimitive.Trigger, {
  name: "Trigger",
});

const Backdrop = withContext<DialogBackdropProps>(DialogPrimitive.Backdrop, {
  name: "Backdrop",
});

const Positioner = withContext<DialogPositionerProps>(
  DialogPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DialogContentProps>(DialogPrimitive.Content, {
  name: "Content",
});

const Header = withContext("div", { name: "Header" });

const Title = withContext<DialogTitleProps>(DialogPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DialogDescriptionProps>(
  DialogPrimitive.Description,
  { name: "Description" },
);

const Body = withContext("div", { name: "Body" });

const Footer = withContext("div", { name: "Footer" });

const CloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<DialogCloseTriggerProps>(
  DialogPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "inline" },
);
// #endregion

// #region Shorthand
/**
 * Slots: `trigger` (single element, rendered `as-child`), `title`,
 * `description`, `default` (scrollable body) and `actions` (footer).
 */
export const DialogShorthand = defineComponent({
  inheritAttrs: false,
  name: "Dialog",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<DialogProps["classNames"]>,
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
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogPositionerProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/vue";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop,
  Body,
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
