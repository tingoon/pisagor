import { ark } from "@ark-ui/vue/factory";
import { Steps as StepsPrimitive } from "@ark-ui/vue/steps";
import { PhCheck } from "@phosphor-icons/vue";
import type {
  StepsItemProps as BaseStepsItemProps,
  StepsProps as BaseStepsRootProps,
} from "@pisagor/props";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Slot recipe context
const { withContext: withStepsContext, withProvider: withStepsProvider } =
  createSlotRecipeContext({
    name: "Steps",
    recipe: stepsRecipe,
  });

const {
  useStyles: useStepsItem,
  withContext: withStepsItemContext,
  withProvider: withStepsItemProvider,
} = createSlotRecipeContext({
  name: "Steps",
  recipe: stepsItemRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface StepsItemProps extends BaseStepsItemProps {
  class?: unknown;
}

export interface StepsRootProps extends BaseStepsRootProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const StepsRoot = withStepsProvider(StepsPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const StepsList = withStepsContext(StepsPrimitive.List, {
  name: "List",
});

export const StepsItem = withStepsItemProvider(StepsPrimitive.Item, {
  name: "Item",
  slot: "base",
});

export const StepsTrigger = withStepsItemContext(StepsPrimitive.Trigger, {
  name: "Trigger",
});

export const StepsIndicator = defineComponent({
  inheritAttrs: false,
  name: "StepsIndicator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useStepsItem();

    return () => {
      const variantSlots = styles.slots;

      return h(
        StepsPrimitive.Indicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: props.class }),
        },
        () => [
          h("span", { class: variantSlots.label() }, children.default?.()),
          h(PhCheck, { class: variantSlots.check() }),
        ],
      );
    };
  },
});

export const StepsSeparator = withStepsItemContext(StepsPrimitive.Separator, {
  name: "Separator",
});

export const StepsTitle = withStepsItemContext(ark.span, {
  name: "Title",
});

export const StepsDescription = withStepsItemContext(ark.span, {
  name: "Description",
});

export const StepsContent = withStepsContext(StepsPrimitive.Content, {
  name: "Content",
});

export const StepsCompletedContent = withStepsContext(
  StepsPrimitive.CompletedContent,
  {
    defaultProps: { "data-part": "completed-content" },
    name: "CompletedContent",
    slot: "completedContent",
  },
);

export const StepsPrevTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsPrevTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.PrevTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const StepsNextTrigger = defineComponent({
  inheritAttrs: false,
  name: "StepsNextTrigger",
  setup(_, { attrs, slots }) {
    return () => h(StepsPrimitive.NextTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion

export const Steps = Object.assign(StepsRoot, {
  CompletedContent: StepsCompletedContent,
  Content: StepsContent,
  Description: StepsDescription,
  Indicator: StepsIndicator,
  Item: StepsItem,
  List: StepsList,
  NextTrigger: StepsNextTrigger,
  PrevTrigger: StepsPrevTrigger,
  Separator: StepsSeparator,
  Title: StepsTitle,
  Trigger: StepsTrigger,
});
