import { FloatingPanel as FloatingPanelPrimitive } from "@ark-ui/vue";
import type {
  FloatingPanelBodyProps,
  FloatingPanelCloseTriggerProps,
  FloatingPanelContentProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelPositionerProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelRootProps as FloatingPanelRootPrimitiveProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
  HTMLArkProps,
} from "@ark-ui/vue";
import { PhArrowsOut, PhCornersIn, PhMinus, PhX } from "@phosphor-icons/vue";
import type { FloatingPanelRootContract } from "@pisagor/contracts";
import type { FloatingPanelRecipeSlot } from "@pisagor/recipes";
import { floatingPanelRecipe } from "@pisagor/recipes";
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
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "FloatingPanel",
  recipe: floatingPanelRecipe,
});
// #endregion

// #region Types
export type FloatingPanelRootProps = FloatingPanelRootPrimitiveProps &
  FloatingPanelRootContract;

export type FloatingPanelFooterProps = HTMLArkProps<"div">;

/**
 * Slots: `trigger` (single element, rendered `as-child`), `icon` (leading
 * header content), `title`, `default` (scrollable body) and `actions`
 * (footer).
 */
export interface FloatingPanelProps extends FloatingPanelRootProps {
  /** Footer action area. Also available as the `actions` slot. */
  actions?: VNodeChild;
  /** Per-slot class name overrides. */
  classNames?: Partial<Record<FloatingPanelRecipeSlot, string>>;
  /**
   * Whether to render resize handles on every edge and corner.
   *
   * @defaultValue true
   */
  resizable?: boolean;
  /**
   * Whether to add a fade effect to the scrollable body.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
  /**
   * Whether to show the close button in the header.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
  /**
   * Whether to show minimize, maximize and restore buttons in the header.
   *
   * @defaultValue true
   */
  showStageControls?: boolean;
  /** Panel title. Also available as the `title` slot. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<FloatingPanelRootProps>(FloatingPanelPrimitive.Root, {
  name: "Root",
  renderless: true,
  slot: "base",
});

const Trigger = withContext<FloatingPanelTriggerProps>(
  FloatingPanelPrimitive.Trigger,
  { name: "Trigger" },
);

const Positioner = withContext<FloatingPanelPositionerProps>(
  FloatingPanelPrimitive.Positioner,
  { name: "Positioner" },
);

const Content = withContext<FloatingPanelContentProps>(
  FloatingPanelPrimitive.Content,
  { name: "Content" },
);

const DragTrigger = withContext<FloatingPanelDragTriggerProps>(
  FloatingPanelPrimitive.DragTrigger,
  { name: "DragTrigger" },
);

const Header = withContext<FloatingPanelHeaderProps>(
  FloatingPanelPrimitive.Header,
  { name: "Header" },
);

const Title = withContext<FloatingPanelTitleProps>(
  FloatingPanelPrimitive.Title,
  { name: "Title" },
);

const Control = withContext<FloatingPanelControlProps>(
  FloatingPanelPrimitive.Control,
  { name: "Control" },
);

const StageTrigger = withContext<FloatingPanelStageTriggerProps>(
  FloatingPanelPrimitive.StageTrigger,
  { name: "StageTrigger" },
);

const CloseTrigger = withContext<FloatingPanelCloseTriggerProps>(
  FloatingPanelPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

const ResizeTrigger = withContext<FloatingPanelResizeTriggerProps>(
  FloatingPanelPrimitive.ResizeTrigger,
  { name: "ResizeTrigger" },
);

const Body = withContext<FloatingPanelBodyProps>(FloatingPanelPrimitive.Body, {
  name: "Body",
});

const Footer = withContext("div", { name: "Footer" });
// #endregion

// #region Shorthand
const resizeAxes = ["n", "e", "w", "s", "ne", "se", "sw", "nw"] as const;

const StageControls = defineComponent({
  name: "FloatingPanel.StageControls",
  setup() {
    const { m } = useLocale();
    const { slots } = useStyles();

    return () => [
      h(StageTrigger, { asChild: true, stage: "minimized" }, () =>
        h(
          Button,
          {
            "aria-label": m("floatingPanel.minimize"),
            size: "icon-xs",
            variant: "ghost",
          },
          () => h(PhMinus),
        ),
      ),

      h(StageTrigger, { asChild: true, stage: "maximized" }, () =>
        h(
          Button,
          {
            "aria-label": m("floatingPanel.maximize"),
            size: "icon-xs",
            variant: "ghost",
          },
          () => h(PhArrowsOut),
        ),
      ),

      h(StageTrigger, { asChild: true, stage: "default" }, () =>
        h(
          Button,
          {
            "aria-label": m("floatingPanel.restore"),
            size: "icon-xs",
            variant: "outline",
          },
          () => [
            h(PhCornersIn, { class: slots.maximizedIcon() }),
            h(PhArrowsOut, { class: slots.minimizedIcon() }),
          ],
        ),
      ),
    ];
  },
});

export const FloatingPanelShorthand = defineComponent({
  inheritAttrs: false,
  name: "FloatingPanel",
  props: {
    actions: contentProp,
    classNames: {
      default: undefined,
      type: Object as PropType<FloatingPanelProps["classNames"]>,
    },
    resizable: { default: true, type: Boolean },
    scrollFade: { default: false, type: Boolean },
    showCloseButton: { default: true, type: Boolean },
    showStageControls: { default: true, type: Boolean },
    title: contentProp,
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

    return () => {
      const classNames = props.classNames;
      const title = slotOrProp(slots.title, props.title);
      const actions = slotOrProp(slots.actions, props.actions);
      const hasControls = props.showStageControls || props.showCloseButton;

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
            h(Content, { class: classNames?.content }, () => [
              h(DragTrigger, { class: classNames?.dragTrigger }, () =>
                h(Header, { class: classNames?.header }, () => [
                  slots.icon?.(),

                  title ? h(Title, { class: classNames?.title }, title) : null,

                  hasControls
                    ? h(Control, { class: classNames?.control }, () => [
                        props.showStageControls ? h(StageControls) : null,

                        props.showCloseButton
                          ? h(
                              CloseTrigger,
                              {
                                asChild: true,
                                class: classNames?.closeTrigger,
                              },
                              () =>
                                h(
                                  Button,
                                  {
                                    "aria-label": m("floatingPanel.close"),
                                    size: "icon-xs",
                                  },
                                  () => h(PhX),
                                ),
                            )
                          : null,
                      ])
                    : null,
                ]),
              ),

              slots.default
                ? h(ScrollArea, { scrollFade: props.scrollFade }, () =>
                    h(Body, { class: classNames?.body }, slots.default),
                  )
                : null,

              actions
                ? h(Footer, { class: classNames?.footer }, actions)
                : null,

              props.resizable
                ? resizeAxes.map((axis) =>
                    h(ResizeTrigger, {
                      axis,
                      class: classNames?.resizeTrigger,
                      key: axis,
                    }),
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
  FloatingPanelBodyProps,
  FloatingPanelCloseTriggerProps,
  FloatingPanelContentProps,
  FloatingPanelControlProps,
  FloatingPanelDragTriggerProps,
  FloatingPanelHeaderProps,
  FloatingPanelPositionerProps,
  FloatingPanelResizeTriggerProps,
  FloatingPanelStageTriggerProps,
  FloatingPanelTitleProps,
  FloatingPanelTriggerProps,
} from "@ark-ui/vue";

export const FloatingPanel = Object.assign(FloatingPanelShorthand, {
  Body,
  CloseTrigger,
  Content,
  Control,
  DragTrigger,
  Footer,
  Header,
  Positioner,
  ResizeTrigger,
  Root,
  StageTrigger,
  Title,
  Trigger,
});
