import { type HTMLArkProps, Steps as StepsPrimitive } from "@ark-ui/solid";
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
  StepsContract,
  StepsItemRootContract,
  StepsPresetItem as BaseStepsPresetItem,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CheckIcon,
  createSlotRecipeContext,
} from "../internal";
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

export type StepsTitleProps = HTMLArkProps<"span">;

export type StepsDescriptionProps = HTMLArkProps<"span">;

interface StepsPresetItem extends Omit<
  BaseStepsPresetItem,
  "content" | "description" | "title"
> {
  title?: JSX.Element;
  description?: JSX.Element;
  content?: JSX.Element;
  icon?: JSX.Element;
}

export interface StepsProps
  extends Omit<StepsRootProps, "children" | "count">, StepsContract {
  /** Steps to render; `count` is derived from the list length. */
  items: StepsPresetItem[];
  /** Content shown once every step is complete. */
  completedContent?: JSX.Element;
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

const Indicator = withStepsItemContext<StepsIndicatorProps>(
  StepsPrimitive.Indicator,
  { name: "Indicator" },
);

/** Shorthand indicator: shows its children until complete, then a check. */
function ShorthandIndicator(props: { children: JSX.Element }): JSX.Element {
  const styles = useStyles();

  return (
    <Indicator>
      <span class={styles.slots.label()}>{props.children}</span>
      <CheckIcon class={styles.slots.check()} />
    </Indicator>
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
function ShorthandText(props: { children: JSX.Element }): JSX.Element {
  const styles = useStyles();

  return <div class={styles.slots.text()}>{props.children}</div>;
}

function ShorthandControl(props: Pick<StepsProps, "classNames">): JSX.Element {
  const { m } = useLocale();
  const styles = useStepsStyles();

  return (
    <div class={styles.slots.control({ class: props.classNames?.control })}>
      <NextTrigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()}>
            {m("steps.next")}
            <CaretRightIcon />
          </Button>
        )}
        class={props.classNames?.nextTrigger}
      />
      <PrevTrigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            <CaretLeftIcon />
            {m("steps.previous")}
          </Button>
        )}
        class={props.classNames?.prevTrigger}
      />
    </div>
  );
}

export function StepsShorthand(props: StepsProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "classNames",
    "completedContent",
    "items",
    "showControls",
  ]);

  return (
    <Root {...rest} count={local.items.length}>
      <List class={local.classNames?.list}>
        <For each={local.items}>
          {(item, index) => (
            <Item index={index()}>
              <Trigger>
                <ShorthandIndicator>
                  {item.icon ?? index() + 1}
                </ShorthandIndicator>

                <Show
                  when={
                    item.title !== undefined || item.description !== undefined
                  }
                >
                  <ShorthandText>
                    <Show when={item.title !== undefined}>
                      <Title>{item.title}</Title>
                    </Show>
                    <Show when={item.description !== undefined}>
                      <Description>{item.description}</Description>
                    </Show>
                  </ShorthandText>
                </Show>
              </Trigger>
              <Separator />
            </Item>
          )}
        </For>
      </List>

      <For each={local.items}>
        {(item, index) => (
          <Show when={item.content !== undefined}>
            <Content class={local.classNames?.content} index={index()}>
              {item.content}
            </Content>
          </Show>
        )}
      </For>

      <Show when={local.completedContent !== undefined}>
        <CompletedContent class={local.classNames?.completedContent}>
          {local.completedContent}
        </CompletedContent>
      </Show>

      <Show when={local.showControls ?? true}>
        <ShorthandControl classNames={local.classNames} />
      </Show>
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
} from "@ark-ui/solid";

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
