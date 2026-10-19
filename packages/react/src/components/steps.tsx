import { Steps as StepsPrimitive } from "@ark-ui/react";
import type {
  StepsIndicatorProps,
  StepsItemProps as StepsItemPrimitiveProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsRootProps as StepsRootPrimitiveProps,
} from "@ark-ui/react";
import { CheckIcon } from "@phosphor-icons/react";
import type {
  StepsItemRootContract,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
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

// #region Types
export type StepsRootProps = StepsRootPrimitiveProps & StepsRootContract;

export type StepsItemProps = StepsItemPrimitiveProps & StepsItemRootContract;

export type StepsTitleProps = ComponentProps<"span">;

export type StepsDescriptionProps = ComponentProps<"span">;
// #endregion

// #region Parts
export const StepsRoot = withStepsProvider<
  ComponentProps<typeof StepsPrimitive.Root> & StepsRootContract
>(StepsPrimitive.Root, { name: "Root" }) as FunctionComponent<StepsRootProps>;

export const StepsList = withStepsContext<
  ComponentProps<typeof StepsPrimitive.List>
>(StepsPrimitive.List, {
  name: "List",
});

export const StepsItem = withStepsItemProvider<
  ComponentProps<typeof StepsPrimitive.Item> & StepsItemRootContract
>(StepsPrimitive.Item, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<StepsItemProps>;

export const StepsTrigger = withStepsItemContext<
  ComponentProps<typeof StepsPrimitive.Trigger>
>(StepsPrimitive.Trigger, {
  name: "Trigger",
});

export function StepsIndicator({
  children,
  className,
  ...rest
}: StepsIndicatorProps) {
  const { slots } = useStyles();

  return (
    <StepsPrimitive.Indicator
      {...rest}
      className={slots.indicator({ className })}
    >
      <span className={slots.label()}>{children}</span>
      <CheckIcon className={slots.check()} />
    </StepsPrimitive.Indicator>
  );
}

export const StepsSeparator = withStepsItemContext<
  ComponentProps<typeof StepsPrimitive.Separator>
>(StepsPrimitive.Separator, {
  name: "Separator",
});

export const StepsTitle = withStepsItemContext<ComponentProps<"span">>("span", {
  name: "Title",
});

export const StepsDescription = withStepsItemContext<ComponentProps<"span">>(
  "span",
  {
    name: "Description",
  },
);

export const StepsContent = withStepsContext<
  ComponentProps<typeof StepsPrimitive.Content>
>(StepsPrimitive.Content, {
  name: "Content",
});

export const StepsCompletedContent = withStepsContext<
  ComponentProps<typeof StepsPrimitive.CompletedContent>
>(StepsPrimitive.CompletedContent, { name: "CompletedContent" });

export function StepsPrevTrigger(props: StepsPrevTriggerProps) {
  return <StepsPrimitive.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: StepsNextTriggerProps) {
  return <StepsPrimitive.NextTrigger {...props} />;
}
// #endregion

// #region Display Names
StepsIndicator.displayName = "Steps.Indicator";
StepsPrevTrigger.displayName = "Steps.PrevTrigger";
StepsNextTrigger.displayName = "Steps.NextTrigger";

// #endregion

export type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/react";

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
