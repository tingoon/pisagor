import { ark } from "@ark-ui/vue/factory";
import type { FrameProps as BaseFrameRootProps } from "@pisagor/props";
import { frameRecipe } from "@pisagor/recipes";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import {
  provideSurfaceContext,
  type SurfaceVariant,
  useSurface,
} from "./surface";

// #region Slot recipe context
const {
  provideStyles: provideFrameStyles,
  useStyles: useFrame,
  withContext,
} = createSlotRecipeContext({
  name: "Frame",
  recipe: frameRecipe,
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FrameRootProps extends BaseFrameRootProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const FrameRoot = defineComponent({
  inheritAttrs: false,
  name: "FrameRoot",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: frameRecipe,
      type: Function as PropType<typeof frameRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideFrameStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    const parent = useSurface();

    provideSurfaceContext(
      computed(() => ({
        depth: parent ? parent.depth + 1 : 0,
        variant: "secondary" as SurfaceVariant,
      })),
    );

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-part": "root",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FramePanel = defineComponent({
  inheritAttrs: false,
  name: "FramePanel",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFrame();

    const parent = useSurface();

    provideSurfaceContext(
      computed(() => ({
        depth: parent ? parent.depth + 1 : 0,
        variant: "default" as SurfaceVariant,
      })),
    );

    return () => {
      const variantSlots = styles.slots;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: variantSlots.panel({ class: props.class }),
          "data-part": "panel",
          "data-scope": "frame",
        },
        slots.default?.(),
      );
    };
  },
});

export const FrameTitle = withContext(ark.div, {
  defaultProps: {
    "data-part": "panel-title",
  },
  name: "Title",
  slot: "panelTitle",
});

export const FrameDescription = withContext(ark.div, {
  defaultProps: {
    "data-part": "panel-description",
  },
  name: "Description",
  slot: "panelDescription",
});

export const FrameHeader = withContext(ark.header, {
  defaultProps: {
    "data-part": "panel-header",
  },
  name: "Header",
  slot: "panelHeader",
});

export const FrameFooter = withContext(ark.footer, {
  defaultProps: {
    "data-part": "panel-footer",
  },
  name: "Footer",
  slot: "panelFooter",
});
// #endregion

export const Frame = Object.assign(FrameRoot, {
  Description: FrameDescription,
  Footer: FrameFooter,
  Header: FrameHeader,
  Panel: FramePanel,
  Title: FrameTitle,
});
