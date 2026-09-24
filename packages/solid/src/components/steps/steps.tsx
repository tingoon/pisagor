import { ark } from "@ark-ui/solid/factory";
import type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsItemProps as StepsPrimitiveItemProps,
  StepsRootProps as StepsPrimitiveRootProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/solid/steps";
import { Steps as StepsPrimitive } from "@ark-ui/solid/steps";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes/steps";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { CheckIcon } from "../../internal/icons";
import { StepsContext, StepsItemContext, useSteps, useStepsItem } from "./steps.context";

export interface StepsRootProps extends StepsPrimitiveRootProps {
  recipe?: typeof stepsRecipe;
}

export interface StepsItemProps extends StepsPrimitiveItemProps {
  itemRecipe?: typeof stepsItemRecipe;
}

export type StepsTitleProps = ComponentProps<typeof ark.span>;
export type StepsDescriptionProps = ComponentProps<typeof ark.span>;

export function StepsRoot(props: StepsRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? stepsRecipe)();

  return (
    <StepsContext value={{ slots: slots() }}>
      <StepsPrimitive.Root {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </StepsPrimitive.Root>
    </StepsContext>
  );
}

export function StepsList(props: StepsListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSteps();
  return <StepsPrimitive.List {...rest} class={slots.list({ class: cn(local.class) })} />;
}

export function StepsItem(props: StepsItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? stepsItemRecipe)();

  return (
    <StepsItemContext value={{ slots: slots() }}>
      <StepsPrimitive.Item {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </StepsPrimitive.Item>
    </StepsItemContext>
  );
}

export function StepsTrigger(props: StepsTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStepsItem();
  return <StepsPrimitive.Trigger {...rest} class={slots.trigger({ class: cn(local.class) })} />;
}

export function StepsIndicator(props: StepsIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useStepsItem();
  return (
    <StepsPrimitive.Indicator {...rest} class={slots.indicator({ class: cn(local.class) })}>
      <span class={slots.label()}>{local.children}</span>
      <CheckIcon class={slots.check()} />
    </StepsPrimitive.Indicator>
  );
}

export function StepsSeparator(props: StepsSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStepsItem();
  return <StepsPrimitive.Separator {...rest} class={slots.separator({ class: cn(local.class) })} />;
}

export function StepsTitle(props: StepsTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStepsItem();
  return (
    <ark.span
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="steps"
    />
  );
}

export function StepsDescription(props: StepsDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStepsItem();
  return (
    <ark.span
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="steps"
    />
  );
}

export function StepsContent(props: StepsContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSteps();
  return <StepsPrimitive.Content {...rest} class={slots.content({ class: cn(local.class) })} />;
}

export function StepsCompletedContent(props: StepsCompletedContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSteps();
  return (
    <StepsPrimitive.CompletedContent
      {...rest}
      class={slots.completedContent({ class: cn(local.class) })}
    />
  );
}

export function StepsPrevTrigger(props: StepsPrevTriggerProps): JSX.Element {
  return <StepsPrimitive.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: StepsNextTriggerProps): JSX.Element {
  return <StepsPrimitive.NextTrigger {...props} />;
}
