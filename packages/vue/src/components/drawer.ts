import { Drawer as DrawerPrimitive, type HTMLArkProps } from "@ark-ui/vue";
import type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerGrabberIndicatorProps,
  DrawerGrabberProps,
  DrawerPositionerProps,
  DrawerRootProps as DrawerRootPrimitiveProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/vue";
import type { DrawerContract, DrawerRootContract } from "@pisagor/contracts";
import { drawerRecipe } from "@pisagor/recipes";
import {
  defineComponent,
  h,
  type PropType,
  Teleport,
  type VNodeChild,
} from "vue";
import { contentProp, createSlotRecipeContext, slotOrProp } from "../internal";
import { ScrollArea } from "./scroll-area";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
// #endregion

// #region Types
/**
 * `placement` is not a prop: it always follows `swipeDirection` so the slide
 * animation and rounded edge match the dismiss gesture.
 */
export type DrawerRootProps = DrawerRootPrimitiveProps &
  Omit<DrawerRootContract, "placement">;

export type DrawerContentInnerProps = HTMLArkProps<"div">;

export type DrawerHeaderProps = HTMLArkProps<"div">;

export type DrawerBodyProps = HTMLArkProps<"div">;

export type DrawerFooterProps = HTMLArkProps<"div">;

export interface DrawerProps
  extends Omit<DrawerRootProps, "title">, DrawerContract {
  /** Footer action area. Prefer the `actions` slot for markup. */
  actions?: VNodeChild;
  /** Supporting copy in the header. Also available as the `description` slot. */
  description?: VNodeChild;
  /**
   * Whether to add a fade effect to the body scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /** Drawer title. Also available as the `title` slot. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "bottom",
  end: "right",
  start: "left",
  up: "top",
} as const;

type SwipeDirection = keyof typeof SWIPE_DIRECTION_TO_PLACEMENT;

const RootBase = withProvider<
  DrawerRootProps & Pick<DrawerRootContract, "placement">
>(DrawerPrimitive.Root, { name: "Root", renderless: true, slot: "base" });

const Root = defineComponent<DrawerRootProps>(
  (props, { attrs, slots }) => {
    return () => {
      const swipeDirection: SwipeDirection = props.swipeDirection ?? "down";

      return h(
        RootBase,
        {
          ...attrs,
          placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
          swipeDirection,
        },
        slots,
      );
    };
  },
  {
    inheritAttrs: false,
    name: "Drawer.Root",
    props: ["swipeDirection"],
  },
);

const Trigger = withContext<DrawerTriggerProps>(DrawerPrimitive.Trigger, {
  name: "Trigger",
});

const Backdrop = withContext<DrawerBackdropProps>(DrawerPrimitive.Backdrop, {
  name: "Backdrop",
});

const Positioner = withContext<DrawerPositionerProps>(
  DrawerPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<DrawerContentProps>(DrawerPrimitive.Content, {
  name: "Content",
});

// Ark semantics: `Grabber` is the padded drag hit area (`grabberWrapper` slot),
// `GrabberIndicator` is the visible bar (`grabber` slot).
const Grabber = withContext<DrawerGrabberProps>(DrawerPrimitive.Grabber, {
  name: "Grabber",
  slot: "grabberWrapper",
});

const GrabberIndicator = withContext<DrawerGrabberIndicatorProps>(
  DrawerPrimitive.GrabberIndicator,
  { name: "GrabberIndicator", slot: "grabber" },
);

const ContentInner = withContext("div", { name: "ContentInner" });

const Header = withContext("div", { name: "Header" });

const Title = withContext<DrawerTitleProps>(DrawerPrimitive.Title, {
  name: "Title",
});

const Description = withContext<DrawerDescriptionProps>(
  DrawerPrimitive.Description,
  { name: "Description" },
);

const Body = withContext("div", { name: "Body" });

const Footer = withContext("div", { name: "Footer" });

const CloseTrigger = withContext<DrawerCloseTriggerProps>(
  DrawerPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);
// #endregion

// #region Shorthand
/**
 * Slots: `trigger` (single element, rendered `as-child`), `title`,
 * `description`, `default` (scrollable body) and `actions` (footer).
 */
export const DrawerShorthand = defineComponent({
  inheritAttrs: false,
  name: "Drawer",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<DrawerProps["classNames"]>,
    },
    description: contentProp,
    scrollFade: { default: false, type: Boolean },
    title: contentProp,
  },
  setup(props, { attrs, slots }) {
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
          h(Backdrop, { class: classNames?.backdrop }),

          h(Positioner, { class: classNames?.positioner }, () =>
            h(Content, { class: classNames?.content }, () => [
              h(Grabber, { class: classNames?.grabberWrapper }, () =>
                h(GrabberIndicator, { class: classNames?.grabber }),
              ),

              h(ContentInner, { class: classNames?.contentInner }, () => [
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
              ]),

              actions
                ? h(Footer, { class: classNames?.footer }, () =>
                    h(
                      ContentInner,
                      { class: classNames?.contentInner },
                      actions,
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
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerGrabberIndicatorProps,
  DrawerGrabberProps,
  DrawerPositionerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/vue";

export const Drawer = Object.assign(DrawerShorthand, {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  ContentInner,
  Description,
  Footer,
  Grabber,
  GrabberIndicator,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
});
