import { Tour as TourPrimitive, ark, useTour } from "@ark-ui/vue";
import type {
  HTMLArkProps,
  TourActionTriggerProps,
  TourArrowProps,
  TourArrowTipProps,
  TourBackdropProps,
  TourCloseTriggerProps,
  TourContentProps,
  TourControlProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourRootProps as TourRootPrimitiveProps,
  TourSpotlightProps,
  TourStepDetails,
  TourTitleProps,
  UseTourProps,
} from "@ark-ui/vue";
import { PhCaretLeft, PhCaretRight, PhX } from "@phosphor-icons/vue";
import type { TourRootContract } from "@pisagor/contracts";
import { type TourRecipeSlot, tourRecipe } from "@pisagor/recipes";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  Teleport,
  watchEffect,
} from "vue";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Tour",
  recipe: tourRecipe,
});
// #endregion

// #region Types
export type TourStepType = TourStepDetails;

export type TourRootProps = TourRootPrimitiveProps & TourRootContract;

export type TourHeaderProps = HTMLArkProps<"div">;

export type TourBodyProps = HTMLArkProps<"div">;

export interface TourProps
  extends UseTourProps, Omit<TourRootPrimitiveProps, "tour">, TourRootContract {
  /** Per-slot class name overrides. */
  classNames?: Partial<Record<TourRecipeSlot, string>>;
  /**
   * Whether to render an arrow on tooltip steps.
   *
   * @defaultValue false
   */
  showArrow?: boolean;
  /**
   * Whether to show a close button at the top end corner.
   *
   * @defaultValue true
   */
  showCloseButton?: boolean;
}
// #endregion

// #region Parts
// The root renders no element; `base` is an empty slot.
const Root = withProvider<TourRootProps>(TourPrimitive.Root, {
  name: "Root",
  renderless: true,
  slot: "base",
});

const Backdrop = withContext<TourBackdropProps>(TourPrimitive.Backdrop, {
  name: "Backdrop",
});

const Spotlight = withContext<TourSpotlightProps>(TourPrimitive.Spotlight, {
  name: "Spotlight",
});

const Positioner = withContext<TourPositionerProps>(TourPrimitive.Positioner, {
  name: "Positioner",
});

const Content = withContext<TourContentProps>(TourPrimitive.Content, {
  name: "Content",
});

const Arrow = withContext<TourArrowProps>(TourPrimitive.Arrow, {
  defaultProps: {
    style: {
      "--arrow-background": "var(--background)",
      "--arrow-size": "calc(1.5 * var(--spacing))",
    },
  },
  name: "Arrow",
});

const ArrowTip = withContext<TourArrowTipProps>(TourPrimitive.ArrowTip, {
  name: "ArrowTip",
});

const Header = withContext("div", { name: "Header" });

const Title = withContext<TourTitleProps>(TourPrimitive.Title, {
  name: "Title",
});

const Description = withContext<TourDescriptionProps>(
  TourPrimitive.Description,
  { name: "Description" },
);

const ProgressText = withContext<TourProgressTextProps>(
  TourPrimitive.ProgressText,
  { name: "ProgressText" },
);

const Body = withContext("div", { name: "Body" });

const Control = withContext<TourControlProps>(TourPrimitive.Control, {
  name: "Control",
});

const ActionTrigger = withContext<TourActionTriggerProps>(
  TourPrimitive.ActionTrigger,
  { name: "ActionTrigger" },
);

const CloseTrigger = withContext<TourCloseTriggerProps>(
  TourPrimitive.CloseTrigger,
  { name: "CloseTrigger" },
);

/** Corner close button placement used by the shorthand. */
const InlineCloseTrigger = withContext<TourCloseTriggerProps>(
  TourPrimitive.CloseTrigger,
  { name: "CloseTrigger", slot: "close" },
);
// #endregion

// #region Shorthand
const TOUR_EVENTS = {
  focusOutside: "onFocusOutside",
  interactOutside: "onInteractOutside",
  pointerDownOutside: "onPointerDownOutside",
  statusChange: "onStatusChange",
  stepChange: "onStepChange",
  stepsChange: "onStepsChange",
} as const;

const optionalBoolean = { default: undefined, type: Boolean };

type TourEmit = NonNullable<Parameters<typeof useTour>[1]>;

/**
 * Builds the tour machine from props (`steps`, `keyboard-navigation`, …) and
 * renders the default step UI. Slots: `trigger` (single element that starts the
 * tour, rendered `as-child`) and `default` (page content next to the trigger,
 * usually the step targets). Root events (`@status-change`, `@step-change`, …)
 * are forwarded.
 */
export const TourShorthand = defineComponent({
  inheritAttrs: false,
  name: "Tour",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<TourProps["classNames"]>,
    },
    closeOnEscape: optionalBoolean,
    closeOnInteractOutside: optionalBoolean,
    id: { default: undefined, type: String },
    ids: {
      default: undefined,
      type: Object as PropType<UseTourProps["ids"]>,
    },
    keyboardNavigation: optionalBoolean,
    lazyMount: optionalBoolean,
    preventInteraction: optionalBoolean,
    recipe: {
      default: undefined,
      type: Function as PropType<TourProps["recipe"]>,
    },
    showArrow: { default: false, type: Boolean },
    showCloseButton: { default: true, type: Boolean },
    spotlightOffset: {
      default: undefined,
      type: Object as PropType<UseTourProps["spotlightOffset"]>,
    },
    spotlightRadius: { default: undefined, type: Number },
    stepId: {
      default: undefined,
      type: [String, null] as PropType<UseTourProps["stepId"]>,
    },
    steps: {
      default: undefined,
      type: Array as PropType<UseTourProps["steps"]>,
    },
    translations: {
      default: undefined,
      type: Object as PropType<UseTourProps["translations"]>,
    },
    unmountOnExit: optionalBoolean,
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const tour = useTour(
      computed<UseTourProps>(() => ({
        closeOnEscape: props.closeOnEscape,
        closeOnInteractOutside: props.closeOnInteractOutside,
        id: props.id,
        ids: props.ids,
        keyboardNavigation: props.keyboardNavigation,
        preventInteraction: props.preventInteraction,
        spotlightOffset: props.spotlightOffset,
        spotlightRadius: props.spotlightRadius,
        stepId: props.stepId,
        steps: props.steps,
        translations: props.translations,
      })),
      ((event: keyof typeof TOUR_EVENTS, details: unknown) => {
        const handler = attrs[TOUR_EVENTS[event]];

        if (typeof handler === "function") handler(details);
      }) as TourEmit,
    );

    // Spotlight offsets are measured against the body.
    watchEffect((onCleanup) => {
      // SSR: watchEffect runs once on the server where `document` is absent.
      if (typeof document === "undefined" || !tour.value.open) return;

      document.body.classList.add("relative");
      onCleanup(() => document.body.classList.remove("relative"));
    });

    return () => {
      const classNames = props.classNames;
      const actions = tour.value.step?.actions ?? [];

      return h(
        Root,
        {
          lazyMount: props.lazyMount,
          onExitComplete: attrs.onExitComplete,
          recipe: props.recipe,
          tour: tour.value,
          unmountOnExit: props.unmountOnExit,
        },
        () => [
          slots.trigger
            ? h(
                ark.button,
                { asChild: true, onClick: () => tour.value.start() },
                { default: slots.trigger },
              )
            : null,

          slots.default?.(),

          h(Teleport, { to: "body" }, [
            h(Backdrop, { class: classNames?.backdrop }),
            h(Spotlight, { class: classNames?.spotlight }),

            h(Positioner, { class: classNames?.positioner }, () =>
              h(Content, { class: classNames?.content }, () => [
                props.showArrow
                  ? h(Arrow, { class: classNames?.arrow }, () =>
                      h(ArrowTip, { class: classNames?.arrowTip }),
                    )
                  : null,

                h(Header, { class: classNames?.header }, () => [
                  h(ProgressText, { class: classNames?.progressText }),
                  h(Title, { class: classNames?.title }),
                  h(Description, { class: classNames?.description }),
                ]),

                actions.length > 0
                  ? h(Control, { class: classNames?.control }, () =>
                      actions.map((action) =>
                        h(
                          ActionTrigger,
                          {
                            action,
                            asChild: true,
                            class: classNames?.actionTrigger,
                            key: action.label,
                          },
                          () =>
                            h(
                              Button,
                              {
                                size: "sm",
                                variant:
                                  action.action === "dismiss" ||
                                  action.action === "prev"
                                    ? "outline"
                                    : "default",
                              },
                              () => [
                                action.action === "prev"
                                  ? h(PhCaretLeft)
                                  : null,
                                action.label,
                                action.action === "next"
                                  ? h(PhCaretRight)
                                  : null,
                              ],
                            ),
                        ),
                      ),
                    )
                  : null,

                props.showCloseButton
                  ? h(
                      InlineCloseTrigger,
                      { asChild: true, class: classNames?.close },
                      () =>
                        h(
                          Button,
                          {
                            class: classNames?.closeButton,
                            size: "icon-md",
                            variant: "ghost",
                          },
                          () => [
                            h(PhX),
                            h(
                              "span",
                              { class: tourRecipe().closeLabel() },
                              m("tour.close"),
                            ),
                          ],
                        ),
                    )
                  : null,
              ]),
            ),
          ]),
        ],
      );
    };
  },
});
// #endregion

export { useTour, useTourContext } from "@ark-ui/vue";

export type {
  TourActionTriggerProps,
  TourArrowProps,
  TourArrowTipProps,
  TourBackdropProps,
  TourCloseTriggerProps,
  TourContentProps,
  TourControlProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourTitleProps,
  UseTourProps,
  UseTourReturn,
} from "@ark-ui/vue";

export const Tour = Object.assign(TourShorthand, {
  ActionTrigger,
  Actions: TourPrimitive.Actions,
  Arrow,
  ArrowTip,
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Control,
  Description,
  Header,
  Positioner,
  ProgressText,
  Root,
  Spotlight,
  Title,
});
