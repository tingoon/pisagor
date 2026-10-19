import { Steps as StepsPrimitive } from "@ark-ui/react";
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
} from "@ark-ui/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import type {
  StepsContract,
  StepsItemRootContract,
  StepsPresetItem as BaseStepsPresetItem,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const {
  useStyles: useStepsStyles,
  withContext: withStepsContext,
  withProvider: withStepsProvider,
} = createSlotRecipeContext({
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

export type StepsTitleProps = ComponentPropsWithRef<"span">;

export type StepsDescriptionProps = ComponentPropsWithRef<"span">;

interface StepsPresetItem extends Omit<
  BaseStepsPresetItem,
  "content" | "description" | "title"
> {
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  icon?: ReactNode;
}

export interface StepsProps
  extends Omit<StepsRootProps, "children" | "count">, StepsContract {
  /** Steps to render; `count` is derived from the list length. */
  items: StepsPresetItem[];
  /** Content shown once every step is complete. */
  completedContent?: ReactNode;
  /**
   * Whether to render the back / next buttons.
   *
   * @defaultValue true
   */
  showControls?: boolean;
}
// #endregion

// #region Parts
const Root = withStepsProvider<StepsRootProps>(StepsPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const List = withStepsContext<StepsListProps>(StepsPrimitive.List, {
  name: "List",
});

const Item = withStepsItemProvider<StepsItemProps>(StepsPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const Trigger = withStepsItemContext<StepsTriggerProps>(
  StepsPrimitive.Trigger,
  { name: "Trigger" },
);

/** Step indicator; shows its children until complete, then a check. */
function Indicator({ children, className, ...rest }: StepsIndicatorProps) {
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

const Separator = withStepsItemContext<StepsSeparatorProps>(
  StepsPrimitive.Separator,
  { name: "Separator" },
);

const Title = withStepsItemContext<StepsTitleProps>("span", {
  name: "Title",
});

const Description = withStepsItemContext<StepsDescriptionProps>("span", {
  name: "Description",
});

const Content = withStepsContext<StepsContentProps>(StepsPrimitive.Content, {
  name: "Content",
});

const CompletedContent = withStepsContext<StepsCompletedContentProps>(
  StepsPrimitive.CompletedContent,
  { name: "CompletedContent" },
);

const PrevTrigger = withStepsContext<StepsPrevTriggerProps>(
  StepsPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

const NextTrigger = withStepsContext<StepsNextTriggerProps>(
  StepsPrimitive.NextTrigger,
  { name: "NextTrigger" },
);
// #endregion

// #region Shorthand
/** Stacks the title and description inside the trigger. */
function ShorthandText({ children }: { children: ReactNode }) {
  const { slots } = useStyles();

  return <div className={slots.text()}>{children}</div>;
}

function ShorthandControl({ classNames }: Pick<StepsProps, "classNames">) {
  const { m } = useLocale();
  const { slots } = useStepsStyles();

  return (
    <div className={slots.control({ className: classNames?.control })}>
      <NextTrigger asChild className={classNames?.nextTrigger}>
        <Button>
          {m("steps.next")}
          <CaretRightIcon />
        </Button>
      </NextTrigger>
      <PrevTrigger asChild className={classNames?.prevTrigger}>
        <Button variant="outline">
          <CaretLeftIcon />
          {m("steps.previous")}
        </Button>
      </PrevTrigger>
    </div>
  );
}

export function StepsShorthand({
  classNames,
  completedContent,
  items,
  showControls = true,
  ...rest
}: StepsProps) {
  return (
    <Root {...rest} count={items.length}>
      <List className={classNames?.list}>
        {items.map((item, index) => (
          <Item index={index} key={item.value ?? index}>
            <Trigger>
              <Indicator>{item.icon ?? index + 1}</Indicator>

              {(item.title !== undefined || item.description !== undefined) && (
                <ShorthandText>
                  {item.title !== undefined && <Title>{item.title}</Title>}
                  {item.description !== undefined && (
                    <Description>{item.description}</Description>
                  )}
                </ShorthandText>
              )}
            </Trigger>
            <Separator />
          </Item>
        ))}
      </List>

      {items.map((item, index) =>
        item.content === undefined ? null : (
          <Content
            className={classNames?.content}
            index={index}
            key={item.value ?? index}
          >
            {item.content}
          </Content>
        ),
      )}

      {completedContent !== undefined && (
        <CompletedContent className={classNames?.completedContent}>
          {completedContent}
        </CompletedContent>
      )}

      {showControls && <ShorthandControl classNames={classNames} />}
    </Root>
  );
}
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

export const Steps = Object.assign(StepsShorthand, {
  CompletedContent,
  Content,
  Description,
  Indicator,
  Item,
  List,
  NextTrigger,
  PrevTrigger,
  Root,
  Separator,
  Title,
  Trigger,
});
