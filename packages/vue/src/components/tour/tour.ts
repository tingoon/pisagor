import { ark } from "@ark-ui/vue/factory";
import {
  Tour as TourPrimitive,
  type TourStepDetails,
  type UseTourReturn,
  useTour,
} from "@ark-ui/vue/tour";
import { PhCaretLeft, PhCaretRight, PhX } from "@phosphor-icons/vue";
import { dialogBackdropVariants } from "@pisagor/styles/ui/dialog";
import { type TourVariants, tourVariants } from "@pisagor/styles/ui/tour";
import { cn } from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  type PropType,
  reactive,
  ref,
  Teleport,
  toValue,
  type UnwrapRef,
  watchEffect,
} from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { Button } from "../button";
import { DialogBody, DialogFooter, DialogHeader } from "../dialog";

type ArkPart = Parameters<typeof h>[0];
type ClassValue = Parameters<typeof cn>[0];

// #region Types
export type TourStepType = TourStepDetails;

interface TourContextProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** Slot class recipes from `tourVariants`. */
  slots: TourVariants;
  /** The tour instance */
  tour: UnwrapRef<UseTourReturn>;
  testId?: string;
}

export interface TourRootProps extends WithTestId {
  /** Whether to enable arrow key navigation between steps */
  keyboardNavigation?: boolean;
  /**
   * Whether to lazily mount the content
   *
   * @defaultValue true
   */
  lazyMount?: boolean;
  /** Called when the tour status changes */
  onStatusChange?: (details: { status: string }) => void;
  /** Called when the current step changes */
  onStepChange?: (details: { stepId: string | null }) => void;
  /**
   * The steps to display in the tour
   *
   * @defaultValue []
   */
  steps?: TourStepDetails[];
  /**
   * Whether to unmount the content when the tour is closed
   *
   * @defaultValue true
   */
  unmountOnExit?: boolean;
}
// #endregion

// #region Context
const [provideTourContext, , useTourContextRef] = createContext<TourContextProps>({
  name: "Tour",
});

export { useTourContextRef as useTourContext };
// #endregion

// #region Parts
export const TourRoot = defineComponent({
  inheritAttrs: false,
  name: "TourRoot",
  props: {
    keyboardNavigation: { default: undefined, type: Boolean },
    lazyMount: { default: true, type: Boolean },
    onStatusChange: {
      default: undefined,
      type: Function as PropType<TourRootProps["onStatusChange"]>,
    },
    onStepChange: {
      default: undefined,
      type: Function as PropType<TourRootProps["onStepChange"]>,
    },
    steps: { default: () => [], type: Array as PropType<TourStepDetails[]> },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const isStarted = ref(false);

    const tour = useTour(
      computed(() => ({
        keyboardNavigation: props.keyboardNavigation,
        onStatusChange: props.onStatusChange,
        onStepChange: props.onStepChange,
        steps: props.steps,
      })),
    );

    watchEffect((onCleanup) => {
      document.body.classList.toggle("relative", isStarted.value);
      onCleanup(() => document.body.classList.remove("relative"));
    });

    const handleStart = () => {
      isStarted.value = true;
      tour.value.start();
    };

    const context = reactive({
      handleStart,
      slots: tourVariants(),
      testId: props.testId,
      tour,
    });

    watchEffect(() => {
      context.testId = props.testId;
    });

    provideTourContext(context);

    return () =>
      h(
        TourPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          tour: tour.value,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const TourTrigger = defineComponent({
  inheritAttrs: false,
  name: "Tour.Trigger",
  setup(_, { attrs, slots }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { handleStart } = ctx;
      const onClick = attrs.onClick as ((event: MouseEvent) => void) | undefined;

      const handleClick = (event: MouseEvent) => {
        onClick?.(event);
        handleStart();
      };

      return h(
        ark.button as ArkPart,
        {
          ...attrs,
          "data-part": "trigger",
          "data-scope": "tour",
          onClick: handleClick,
          type: "button",
        },
        slots,
      );
    };
  },
});

export const TourActionTrigger = defineComponent({
  inheritAttrs: false,
  name: "Tour.ActionTrigger",
  setup(_, { attrs, slots }) {
    return () => h(TourPrimitive.ActionTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const TourBackdrop = defineComponent({
  inheritAttrs: false,
  name: "Tour.Backdrop",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;

      return h(TourPrimitive.Backdrop as ArkPart, {
        ...attrs,
        class: cn(dialogBackdropVariants(), ctx.slots.backdrop(), props.class),
      });
    };
  },
});

export const TourPositioner = defineComponent({
  inheritAttrs: false,
  name: "Tour.Positioner",
  setup(_, { attrs, slots }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;

      return h(
        TourPrimitive.Positioner as ArkPart,
        { class: cn(ctx.slots.positioner()), ...attrs },
        slots,
      );
    };
  },
});

export const TourContent = defineComponent({
  inheritAttrs: false,
  name: "Tour.Content",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    showCloseButton: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { slots: recipeSlots, testId } = ctx;

      const defaultChildren = () => [
        h(TourHeader, null, () => [h(TourTitle), h(TourProgressText)]),
        h(TourBody, null, () => h(TourDescription)),
        h(TourFooter, null, () => [h(TourPreviousStep), h(TourNextStep)]),
      ];

      return h(Teleport, { to: "body" }, () => [
        h(TourBackdrop),
        h(TourPositioner, null, () =>
          h(
            TourPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: cn(recipeSlots.content(), props.class),
              "data-testid": testId,
            },
            () => [
              slots.default ? slots.default() : defaultChildren(),
              props.showCloseButton
                ? h(TourCloseTrigger, { asChild: true, class: recipeSlots.close() }, () =>
                    h(
                      Button as ArkPart,
                      { class: recipeSlots.closeButton(), size: "icon-md", variant: "ghost" },
                      () => [h(PhX), h("span", { class: recipeSlots.closeLabel() }, "Close")],
                    ),
                  )
                : null,
            ],
          ),
        ),
        h(TourSpotlight),
      ]);
    };
  },
});

export const TourBody = defineComponent({
  inheritAttrs: false,
  name: "Tour.Body",
  setup(_, { attrs, slots }) {
    return () => h(DialogBody as ArkPart, { ...attrs, dataPart: "body", dataScope: "tour" }, slots);
  },
});

export const TourSpotlight = defineComponent({
  inheritAttrs: false,
  name: "Tour.Spotlight",
  setup(_, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;

      return h(TourPrimitive.Spotlight as ArkPart, {
        class: ctx.slots.spotlight(),
        ...attrs,
      });
    };
  },
});

export const TourHeader = defineComponent({
  inheritAttrs: false,
  name: "Tour.Header",
  setup(_, { attrs, slots }) {
    return () =>
      h(DialogHeader as ArkPart, { ...attrs, dataPart: "header", dataScope: "tour" }, slots);
  },
});

export const TourTitle = defineComponent({
  inheritAttrs: false,
  name: "Tour.Title",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { slots: recipeSlots, tour } = ctx;

      return h(
        TourPrimitive.Title as ArkPart,
        { ...attrs, class: cn(recipeSlots.title(), props.class) },
        () => tour.step?.title,
      );
    };
  },
});

export const TourDescription = defineComponent({
  inheritAttrs: false,
  name: "Tour.Description",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { slots: recipeSlots, tour } = ctx;

      return h(
        TourPrimitive.Description as ArkPart,
        {
          ...attrs,
          class: cn(recipeSlots.description(), props.class),
        },
        () => tour.step?.description,
      );
    };
  },
});

export const TourProgressText = defineComponent({
  inheritAttrs: false,
  name: "Tour.ProgressText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { slots: recipeSlots, tour } = ctx;

      return h(
        TourPrimitive.ProgressText as ArkPart,
        {
          ...attrs,
          class: cn(recipeSlots.progressText(), props.class),
        },
        () => tour.getProgressText(),
      );
    };
  },
});

export const TourCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "Tour.CloseTrigger",
  setup(_, { attrs, slots }) {
    return () => h(TourPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const TourFooter = defineComponent({
  inheritAttrs: false,
  name: "Tour.Footer",
  setup(_, { attrs, slots }) {
    return () =>
      h(TourPrimitive.Control as ArkPart, { ...attrs, asChild: true }, () =>
        h(DialogFooter, { dataPart: "control", dataScope: "tour" }, slots),
      );
  },
});

export const TourActions = defineComponent({
  inheritAttrs: false,
  name: "Tour.Actions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { slots: recipeSlots, tour } = ctx;
      const actions = tour.step?.actions ?? [];

      if (actions.length === 0) {
        return null;
      }

      return h(TourPrimitive.Control as ArkPart, { ...attrs, asChild: true }, () =>
        h(
          DialogFooter as ArkPart,
          {
            class: cn(recipeSlots.actions(), props.class),
            dataPart: "actions",
            dataScope: "tour",
          },
          () =>
            actions.map((action) =>
              h(TourActionTrigger, { action, asChild: true, key: action.label }, () =>
                h(
                  Button,
                  {
                    size: "sm",
                    variant:
                      action.action === "dismiss" || action.action === "prev"
                        ? "outline"
                        : "default",
                  },
                  () => [
                    action.action === "prev" ? h(PhCaretLeft) : null,
                    action.label,
                    action.action === "next" ? h(PhCaretRight) : null,
                  ],
                ),
              ),
            ),
        ),
      );
    };
  },
});

export const TourPreviousStep = defineComponent({
  inheritAttrs: false,
  name: "Tour.PreviousStep",
  setup(_, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { tour } = ctx;
      const prevAction = tour.step?.actions?.find((action) => action.action === "prev");

      if (!prevAction) {
        return null;
      }

      return h(TourActionTrigger, { ...attrs, action: prevAction, asChild: true }, () =>
        h(Button, { size: "sm", variant: "outline" }, () => [h(PhCaretLeft), prevAction.label]),
      );
    };
  },
});

export const TourNextStep = defineComponent({
  inheritAttrs: false,
  name: "Tour.NextStep",
  setup(_, { attrs }) {
    return () => {
      const ctx = toValue(useTourContextRef());
      if (!ctx) return null;
      const { tour } = ctx;
      const action = tour.step?.actions?.find(
        (candidate) => candidate.action === "next" || candidate.action === "dismiss",
      );

      if (!action) {
        return null;
      }

      return h(TourActionTrigger, { ...attrs, action, asChild: true }, () =>
        h(Button, { size: "sm" }, () => [
          action.label,
          action.action === "next" ? h(PhCaretRight) : null,
        ]),
      );
    };
  },
});
// #endregion
