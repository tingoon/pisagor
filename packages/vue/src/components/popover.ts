import { ark } from "@ark-ui/vue/factory";
import { Popover as PopoverPrimitive } from "@ark-ui/vue/popover";
import type { PopoverProps as BasePopoverContentProps } from "@pisagor/props";
import { popoverRecipe } from "@pisagor/recipes";
import {
  type CSSProperties,
  computed,
  defineComponent,
  h,
  type PropType,
  Teleport,
} from "vue";
import { renderIconCloseButton } from "../internal/close-button";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Slot recipe context
const {
  provideStyles: providePopoverStyles,
  useStyles: usePopover,
  withContext,
} = createSlotRecipeContext({
  name: "Popover",
  recipe: popoverRecipe,
});
// #endregion

// #region Types
export interface PopoverContentProps extends BasePopoverContentProps {
  class?: unknown;
  showCloseButton?: boolean;
}

export interface PopoverHeaderProps {
  class?: unknown;
  description?: string;
  title?: string;
}

export interface PopoverProps {
  lazyMount?: boolean;
  modal?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

function popoverTeleport(
  content: ReturnType<typeof h> | ReturnType<typeof h>[],
) {
  return h(Teleport, { to: "body" }, [content]);
}

// #region Parts
export const PopoverRoot = defineComponent({
  inheritAttrs: false,
  name: "PopoverRoot",
  props: {
    lazyMount: { default: true, type: Boolean },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        PopoverPrimitive.Root as ArkPart,
        {
          ...attrs,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        slots,
      );
  },
});

export const PopoverTrigger = defineComponent({
  inheritAttrs: false,
  name: "PopoverTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        PopoverPrimitive.Trigger as ArkPart,
        {
          ...attrs,
        },
        slots,
      );
  },
});

export const PopoverAnchor = defineComponent({
  inheritAttrs: false,
  name: "PopoverAnchor",
  setup(_, { attrs, slots }) {
    return () => h(PopoverPrimitive.Anchor as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverPositioner = defineComponent({
  inheritAttrs: false,
  name: "PopoverPositioner",
  setup(_, { attrs, slots }) {
    return () => h(PopoverPrimitive.Positioner as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverContent = defineComponent({
  inheritAttrs: false,
  name: "PopoverContent",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: popoverRecipe,
      type: Function as PropType<typeof popoverRecipe>,
    },
    showCloseButton: { default: false, type: Boolean },
  },
  setup(props, { attrs, slots: children }) {
    const recipeSlots = computed(() => props.recipe());

    providePopoverStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const slots = recipeSlots.value;

      return popoverTeleport(
        h(PopoverPositioner, null, () =>
          h(
            PopoverPrimitive.Content as ArkPart,
            {
              ...attrs,
              class: slots.base({ class: props.class }),
            },
            () => [
              children.default?.(),
              props.showCloseButton
                ? h(PopoverCloseTrigger, { asChild: true }, () =>
                    renderIconCloseButton(slots.close()),
                  )
                : null,
            ],
          ),
        ),
      );
    };
  },
});

export const PopoverHeader = defineComponent({
  inheritAttrs: false,
  name: "PopoverHeader",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    description: String,
    title: String,
  },
  setup(props, { attrs, slots }) {
    const styles = usePopover();

    return () => {
      const recipe = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: recipe.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "popover",
        },
        () => [
          props.title ? h(PopoverTitle, null, () => props.title) : null,
          props.description
            ? h(PopoverDescription, null, () => props.description)
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const PopoverTitle = withContext(PopoverPrimitive.Title, {
  name: "Title",
});

export const PopoverDescription = withContext(PopoverPrimitive.Description, {
  name: "Description",
});

export const PopoverBody = defineComponent({
  inheritAttrs: false,
  name: "PopoverBody",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = usePopover();

    return () => {
      const recipe = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: recipe.body({ class: props.class }),
          "data-part": "body",
          "data-scope": "popover",
        },
        slots,
      );
    };
  },
});

export const PopoverFooter = withContext(ark.div, {
  name: "Footer",
});

export const PopoverCloseTrigger = defineComponent({
  inheritAttrs: false,
  name: "PopoverCloseTrigger",
  setup(_, { attrs, slots }) {
    return () =>
      h(PopoverPrimitive.CloseTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const PopoverArrow = defineComponent({
  inheritAttrs: false,
  name: "PopoverArrow",
  props: {
    style: { default: undefined, type: Object as PropType<CSSProperties> },
  },
  setup(props, { attrs, slots }) {
    const styles = usePopover();

    return () => {
      const recipe = styles.slots;

      return h(
        PopoverPrimitive.Arrow as ArkPart,
        {
          ...attrs,
          style: {
            "--arrow-background": "var(--popover)",
            "--arrow-size": "calc(1.5 * var(--spacing))",
            ...props.style,
          } as CSSProperties,
        },
        () => [
          h(PopoverPrimitive.ArrowTip as ArkPart, { class: recipe.arrowTip() }),
          slots.default?.(),
        ],
      );
    };
  },
});
// #endregion

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
