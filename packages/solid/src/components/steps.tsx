import { Steps as StepsPrimitive } from "@ark-ui/solid";
import type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsItemProps as StepsItemPrimitiveProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsRootProps as StepsRootPrimitiveProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/solid";
import type {
  StepsItemRootContract,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { CheckIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext: withStepsContext, withProvider: withStepsProvider } =
  createSlotRecipeContext({ name: "Steps", recipe: stepsRecipe });

const {
  useStyles,
  withContext: withStepsItemContext,
  withProvider: withStepsItemProvider,
} = createSlotRecipeContext({ name: "Steps", recipe: stepsItemRecipe });
// #endregion

export type LocalStepsRootProps = StepsRootPrimitiveProps & StepsRootContract;

export type LocalStepsItemProps = StepsItemPrimitiveProps &
  StepsItemRootContract;

export type StepsTitleProps = ComponentProps<"span">;
export type StepsDescriptionProps = ComponentProps<"span">;

export const StepsRoot: Component<LocalStepsRootProps> = withStepsProvider<
  ComponentProps<typeof StepsPrimitive.Root> & StepsRootContract
>(StepsPrimitive.Root, { name: "Root" });

export const StepsList: Component<StepsListProps> = withStepsContext<
  ComponentProps<typeof StepsPrimitive.List>
>(StepsPrimitive.List, { name: "List" });

export const StepsItem: Component<LocalStepsItemProps> = withStepsItemProvider<
  ComponentProps<typeof StepsPrimitive.Item> & StepsItemRootContract
>(StepsPrimitive.Item, {
  name: "Item",
  slot: "base",
});

export const StepsTrigger: Component<StepsTriggerProps> = withStepsItemContext<
  ComponentProps<typeof StepsPrimitive.Trigger>
>(StepsPrimitive.Trigger, { name: "Trigger" });

export function StepsIndicator(props: StepsIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <StepsPrimitive.Indicator
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
    >
      <span class={styles.slots.label()}>{local.children}</span>
      <CheckIcon class={styles.slots.check()} />
    </StepsPrimitive.Indicator>
  );
}

export const StepsSeparator: Component<StepsSeparatorProps> =
  withStepsItemContext<ComponentProps<typeof StepsPrimitive.Separator>>(
    StepsPrimitive.Separator,
    { name: "Separator" },
  );

export const StepsTitle: Component<StepsTitleProps> = withStepsItemContext<
  ComponentProps<"span">
>("span", { name: "Title" });

export const StepsDescription: Component<StepsDescriptionProps> =
  withStepsItemContext<ComponentProps<"span">>("span", { name: "Description" });

export const StepsContent: Component<StepsContentProps> = withStepsContext<
  ComponentProps<typeof StepsPrimitive.Content>
>(StepsPrimitive.Content, { name: "Content" });

export const StepsCompletedContent: Component<StepsCompletedContentProps> =
  withStepsContext<ComponentProps<typeof StepsPrimitive.CompletedContent>>(
    StepsPrimitive.CompletedContent,
    { name: "CompletedContent" },
  );

export function StepsPrevTrigger(props: StepsPrevTriggerProps): JSX.Element {
  return <StepsPrimitive.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: StepsNextTriggerProps): JSX.Element {
  return <StepsPrimitive.NextTrigger {...props} />;
}

export type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsItemProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsRootProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/solid";

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
