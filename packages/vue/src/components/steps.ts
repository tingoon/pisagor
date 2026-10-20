import { Steps as StepsPrimitive } from "@ark-ui/vue";
import { PhCaretLeft, PhCaretRight, PhCheck } from "@phosphor-icons/vue";
import type {
  StepsPresetItem as BaseStepsPresetItem,
  StepsContract,
  StepsItemRootContract,
  StepsRootContract,
} from "@pisagor/contracts";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Slot recipe context
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

type ArkPart = Parameters<typeof h>[0];

// #region Types
export type StepsItemProps = StepsItemRootContract;

export type StepsRootProps = StepsRootContract;

/** Content for a shorthand item field: text, a vnode, or a render function. */
type StepsItemContent = VNodeChild | (() => VNodeChild);

export interface StepsPresetItem extends Omit<
  BaseStepsPresetItem,
  "content" | "description" | "icon" | "title"
> {
  content?: StepsItemContent;
  description?: StepsItemContent;
  icon?: StepsItemContent;
  title?: StepsItemContent;
}

export interface StepsProps extends StepsRootProps, StepsContract {
  /** Content shown once every step is complete; also the `completed` slot. */
  completedContent?: StepsItemContent;
  /** Steps to render; `count` is derived from the list length. */
  items: StepsPresetItem[];
  /**
   * Whether to render the back / next buttons.
   *
   * @defaultValue true
   */
  showControls?: boolean;
}

export type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/vue";
// #endregion

// #region Parts
export const StepsRoot = withStepsProvider<StepsRootContract>(
  StepsPrimitive.Root,
  { name: "Root", slot: "base" },
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

export const StepsIndicator = withStepsItemContext(StepsPrimitive.Indicator, {
  name: "Indicator",
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

export const StepsPrevTrigger = withStepsContext(StepsPrimitive.PrevTrigger, {
  name: "PrevTrigger",
});

export const StepsNextTrigger = withStepsContext(StepsPrimitive.NextTrigger, {
  name: "NextTrigger",
});
// #endregion

// #region Shorthand
function renderContent(value: StepsItemContent): VNodeChild {
  return typeof value === "function" ? value() : value;
}

/** Shorthand indicator: shows its children until complete, then a check. */
const ShorthandIndicator = defineComponent({
  name: "Steps.ShorthandIndicator",
  setup(_, { slots }) {
    const styles = useStyles();

    return () =>
      h(StepsIndicator, null, () => [
        h("span", { class: styles.slots.label() }, slots.default?.()),
        h(PhCheck, { class: styles.slots.check() }),
      ]);
  },
});

/** Stacks the title and description inside the trigger. */
const ShorthandText = defineComponent({
  name: "Steps.ShorthandText",
  setup(_, { slots }) {
    const styles = useStyles();

    return () => h("div", { class: styles.slots.text() }, slots.default?.());
  },
});

const ShorthandControl = defineComponent({
  name: "Steps.ShorthandControl",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<StepsProps["classNames"]>,
    },
  },
  setup(props) {
    const { m } = useLocale();
    const styles = useStepsStyles();

    return () => {
      const classNames = props.classNames;

      return h(
        "div",
        { class: styles.slots.control({ class: classNames?.control }) },
        [
          h(
            StepsNextTrigger,
            { asChild: true, class: classNames?.nextTrigger },
            () => h(Button, null, () => [m("steps.next"), h(PhCaretRight)]),
          ),
          h(
            StepsPrevTrigger,
            { asChild: true, class: classNames?.prevTrigger },
            () =>
              h(Button, { variant: "outline" }, () => [
                h(PhCaretLeft),
                m("steps.previous"),
              ]),
          ),
        ],
      );
    };
  },
});

export const StepsShorthand = defineComponent({
  inheritAttrs: false,
  name: "Steps",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<StepsProps["classNames"]>,
    },
    completedContent: {
      default: undefined,
      type: [String, Number, Object, Array, Function] as PropType<
        StepsProps["completedContent"]
      >,
    },
    items: { required: true, type: Array as PropType<StepsPresetItem[]> },
    showControls: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const items = props.items;
      const completed =
        slots.completed ??
        (props.completedContent === undefined
          ? undefined
          : () => renderContent(props.completedContent));

      return h(StepsRoot as ArkPart, { ...attrs, count: items.length }, () => [
        h(StepsList, { class: classNames?.list }, () =>
          items.map((item, index) =>
            h(StepsItem as ArkPart, { index, key: item.value ?? index }, () => [
              h(StepsTrigger, null, () => [
                h(ShorthandIndicator, null, () =>
                  item.icon === undefined
                    ? String(index + 1)
                    : renderContent(item.icon),
                ),
                item.title !== undefined || item.description !== undefined
                  ? h(ShorthandText, null, () => [
                      item.title === undefined
                        ? null
                        : h(StepsTitle, null, () => renderContent(item.title)),
                      item.description === undefined
                        ? null
                        : h(StepsDescription, null, () =>
                            renderContent(item.description),
                          ),
                    ])
                  : null,
              ]),
              h(StepsSeparator),
            ]),
          ),
        ),
        ...items.map((item, index) =>
          item.content === undefined
            ? null
            : h(
                StepsContent as ArkPart,
                {
                  class: classNames?.content,
                  index,
                  key: item.value ?? index,
                },
                () => renderContent(item.content),
              ),
        ),
        completed
          ? h(
              StepsCompletedContent,
              { class: classNames?.completedContent },
              completed,
            )
          : null,
        props.showControls ? h(ShorthandControl, { classNames }) : null,
      ]);
    };
  },
});
// #endregion

export const Steps = Object.assign(StepsShorthand, {
  CompletedContent: StepsCompletedContent,
  Content: StepsContent,
  Description: StepsDescription,
  Indicator: StepsIndicator,
  Item: StepsItem,
  List: StepsList,
  NextTrigger: StepsNextTrigger,
  PrevTrigger: StepsPrevTrigger,
  Root: StepsRoot,
  Separator: StepsSeparator,
  Title: StepsTitle,
  Trigger: StepsTrigger,
});
