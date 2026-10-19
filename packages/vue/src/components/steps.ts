import { Steps as StepsPrimitive } from "@ark-ui/vue";
import { PhCheck } from "@phosphor-icons/vue";
import type {
  StepsItemRootContract,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Slot recipe context
const { withContext: withStepsContext, withProvider: withStepsProvider } =
  createSlotRecipeContext({
    name: "Steps",
    recipe: stepsRecipe,
  });

const {
  useStyles,
  withContext: withStepsItemContext,
  withProvider: withStepsItemProvider,
} = createSlotRecipeContext({
  name: "Steps",
  recipe: stepsItemRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface StepsItemProps extends StepsItemRootContract {
  class?: unknown;
}

export interface StepsRootProps extends StepsRootContract {
  class?: unknown;
}
// #endregion

// #region Parts
export const StepsRoot = withStepsProvider<StepsRootContract>(
  StepsPrimitive.Root,
  { name: "Root" },
);

export const StepsList = withStepsContext(StepsPrimitive.List, {
  name: "List",
});

export const StepsItem = withStepsItemProvider<StepsItemRootContract>(
  StepsPrimitive.Item,
  {
    name: "Item",
    slot: "base",
  },
);

export const StepsTrigger = withStepsItemContext(StepsPrimitive.Trigger, {
  name: "Trigger",
});

export const StepsIndicator = defineComponent({
  inheritAttrs: false,
  name: "StepsIndicator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useStyles();

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

export const StepsTitle = withStepsItemContext("span", {
  name: "Title",
});

export const StepsDescription = withStepsItemContext("span", {
  name: "Description",
});

export const StepsContent = withStepsContext(StepsPrimitive.Content, {
  name: "Content",
});

export const StepsCompletedContent = withStepsContext(
  StepsPrimitive.CompletedContent,
  { name: "CompletedContent" },
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
