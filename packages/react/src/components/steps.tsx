import { ark } from "@ark-ui/react/factory";
import type {
  StepsIndicatorProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsItemProps as StepsPrimitiveItemProps,
  StepsRootProps as StepsPrimitiveRootProps,
} from "@ark-ui/react/steps";
import { Steps as StepsPrimitive } from "@ark-ui/react/steps";
import { CheckIcon } from "@phosphor-icons/react";
import type {
  StepsItemProps as BaseStepsItemProps,
  StepsProps as BaseStepsRootProps,
} from "@pisagor/props";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
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

// #region Types
export interface LocalStepsRootProps
  extends StepsPrimitiveRootProps,
    BaseStepsRootProps {}

export interface LocalStepsItemProps
  extends StepsPrimitiveItemProps,
    BaseStepsItemProps {}

export type StepsTitleProps = ComponentProps<typeof ark.span>;

export type StepsDescriptionProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export const StepsRoot = withStepsProvider(StepsPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<LocalStepsRootProps>;

export const StepsList = withStepsContext(StepsPrimitive.List, {
  name: "List",
});

export const StepsItem = withStepsItemProvider(StepsPrimitive.Item, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<LocalStepsItemProps>;

export const StepsTrigger = withStepsItemContext(StepsPrimitive.Trigger, {
  name: "Trigger",
});

export function StepsIndicator({
  children,
  className,
  ...rest
}: StepsIndicatorProps) {
  const { slots } = useStepsItem();

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
    name: "CompletedContent",
  },
);

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
  StepsItemProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsRootProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/react/steps";

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
