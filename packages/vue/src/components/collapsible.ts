import { Collapsible as CollapsiblePrimitive } from "@ark-ui/vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import type {
  CollapsibleContract,
  CollapsibleRootContract,
} from "@pisagor/contracts";
import { collapsibleRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal";
import { contentProp, slotOrProp } from "../internal/shorthand";

// #region Slot recipe context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface CollapsibleRootProps extends CollapsibleRootContract {
  /** Height kept visible while collapsed; keeps content mounted. */
  collapsedHeight?: number | string;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}

export interface CollapsibleProps
  extends CollapsibleRootProps, CollapsibleContract {
  /**
   * Whether to render the caret indicator inside the trigger.
   *
   * @defaultValue true
   */
  showIndicator?: boolean;
  /** Trigger content; also available as the `trigger` slot. */
  trigger?: unknown;
}
// #endregion

// #region Parts
const RootBase = withProvider(CollapsiblePrimitive.Root, {
  name: "Root",
  slot: "base",
});

/** Root; `collapsedHeight` keeps content mounted for partial collapse. */
export const CollapsibleRoot = defineComponent({
  inheritAttrs: false,
  name: "Collapsible.Root",
  props: {
    collapsedHeight: {
      default: undefined,
      type: [Number, String] as PropType<number | string>,
    },
    lazyMount: { default: undefined, type: Boolean },
    unmountOnExit: { default: undefined, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const partial = props.collapsedHeight !== undefined;

      return h(
        RootBase as ArkPart,
        {
          ...attrs,
          collapsedHeight: props.collapsedHeight,
          "data-partial-collapse": partial ? "" : undefined,
          lazyMount: partial ? false : props.lazyMount,
          unmountOnExit: partial ? false : props.unmountOnExit,
        },
        slots,
      );
    };
  },
});

export const CollapsibleTrigger = withContext(CollapsiblePrimitive.Trigger, {
  name: "Trigger",
});

export const CollapsibleIndicator = withContext(
  CollapsiblePrimitive.Indicator,
  { name: "Indicator" },
);

export const CollapsibleContent = withContext(CollapsiblePrimitive.Content, {
  name: "Content",
});

export const CollapsibleBody = withContext("div", { name: "Body" });
// #endregion

// #region Shorthand
export const CollapsibleShorthand = defineComponent({
  inheritAttrs: false,
  name: "Collapsible",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<CollapsibleProps["classNames"]>,
    },
    showIndicator: { default: true, type: Boolean },
    trigger: contentProp,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const classNames = props.classNames;
      const trigger = slotOrProp(slots.trigger, props.trigger);

      return h(CollapsibleRoot as ArkPart, { ...attrs }, () => [
        trigger
          ? h(CollapsibleTrigger, { class: classNames?.trigger }, () => [
              trigger(),
              props.showIndicator
                ? h(
                    CollapsibleIndicator,
                    { class: classNames?.indicator },
                    () => h(PhCaretDown),
                  )
                : null,
            ])
          : null,
        h(CollapsibleContent, { class: classNames?.content }, () =>
          h(CollapsibleBody, { class: classNames?.body }, () =>
            slots.default?.(),
          ),
        ),
      ]);
    };
  },
});
// #endregion

export const Collapsible = Object.assign(CollapsibleShorthand, {
  Body: CollapsibleBody,
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
});
