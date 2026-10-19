import { Popover as PopoverPrimitive, type HTMLArkProps } from "@ark-ui/vue";
import type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverRootProps as PopoverRootPrimitiveProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import type { PopoverContract, PopoverRootContract } from "@pisagor/contracts";
import { popoverRecipe } from "@pisagor/recipes";
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
  name: "Popover",
  recipe: popoverRecipe,
});
// #endregion

// #region Types
export type PopoverRootProps = PopoverRootPrimitiveProps & PopoverRootContract;

export type PopoverHeaderProps = HTMLArkProps<"div">;

export type PopoverBodyProps = HTMLArkProps<"div">;

export type PopoverFooterProps = HTMLArkProps<"div">;

/**
 * Slots: `trigger` (single element, rendered `as-child`), `title`,
 * `description`, `default` (scrollable body) and `actions` (footer).
 */
export interface PopoverProps
  extends Omit<PopoverRootProps, "title">, PopoverContract {
  /** Footer action area. Also available as the `actions` slot. */
  actions?: VNodeChild;
  /** Supporting copy in the header. Also available as the `description` slot. */
  description?: VNodeChild;
  /**
   * Whether to render an arrow pointing at the trigger.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue false
   */
  showCloseButton?: boolean;
  /** Popover title. Also available as the `title` slot. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
// The root renders no element; `base` styles the content surface.
const Root = withProvider<PopoverRootProps>(PopoverPrimitive.Root, {
  name: "Root",
  renderless: true,
  slot: "base",
});

const Trigger = withContext<PopoverTriggerProps>(PopoverPrimitive.Trigger, {
  name: "Trigger",
});

const Anchor = withContext<PopoverAnchorProps>(PopoverPrimitive.Anchor, {
  name: "Anchor",
});

const Positioner = withContext<PopoverPositionerProps>(
  PopoverPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<PopoverContentProps>(PopoverPrimitive.Content, {
  name: "Content",
  slot: "base",
});

const ArrowTip = withContext<PopoverArrowTipProps>(PopoverPrimitive.ArrowTip, {
  name: "ArrowTip",
});

const ArrowBase = withContext<PopoverArrowProps>(PopoverPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--popover)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

/** Renders an `ArrowTip` when no children are passed. */
const Arrow = defineComponent({
  inheritAttrs: false,
  name: "Popover.Arrow",
  setup(_, { attrs, slots }) {
    return () =>
      h(ArrowBase, attrs, {
        default: () => slots.default?.() ?? h(ArrowTip),
      });
  },
});

const Header = withContext("div", { name: "Header" });

const Title = withContext<PopoverTitleProps>(PopoverPrimitive.Title, {
  name: "Title",
});

const Description = withContext<PopoverDescriptionProps>(
  PopoverPrimitive.Description,
  { name: "Description" },
);

const Body = withContext("div", { name: "Body" });

const Footer = withContext("div", { name: "Footer" });

const CloseTrigger = withContext<PopoverCloseTriggerProps>(
  PopoverPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<PopoverCloseTriggerProps>(
  PopoverPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "close" },
);
// #endregion

// #region Shorthand
export const PopoverShorthand = defineComponent({
  inheritAttrs: false,
  name: "Popover",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<PopoverProps["classNames"]>,
    },
    description: contentProp,
    showArrow: { default: false, type: Boolean },
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

      return h(Root, attrs, () => [
        slots.trigger
          ? h(
              Trigger,
              { asChild: true, class: classNames?.trigger },
              { default: slots.trigger },
            )
          : null,

        h(Teleport, { to: "body" }, [
          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.base }, () => [
              props.showArrow
                ? h(Arrow, { class: classNames?.arrow }, () =>
                    h(ArrowTip, { class: classNames?.arrowTip }),
                  )
                : null,

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
                ? h(ScrollArea, null, () =>
                    h(
                      Body,
                      { class: ["overflow-visible", classNames?.body] },
                      slots.default,
                    ),
                  )
                : null,

              actions
                ? h(Footer, { class: classNames?.footer }, actions)
                : null,

              props.showCloseButton
                ? h(
                    InlineCloseTrigger,
                    { asChild: true, class: classNames?.close },
                    () =>
                      h(
                        Button,
                        {
                          "aria-label": m("popover.close"),
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
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/vue";

export const Popover = Object.assign(PopoverShorthand, {
  Anchor,
  Arrow,
  ArrowTip,
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
