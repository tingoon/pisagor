import { Switch as SwitchPrimitive } from "@ark-ui/vue/switch";
import type { SwitchProps as BaseSwitchProps } from "@pisagor/props";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SwitchStylesContext, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

type FormControlVariant = "primary" | "secondary";

type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface SwitchProps extends BaseSwitchProps {
  class?: unknown;
  classNames?: SwitchClassNames;
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
const SwitchRoot = defineComponent({
  inheritAttrs: false,
  name: "Switch.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: switchRecipe,
      type: Function as PropType<typeof switchRecipe>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, slots }) {
    const surfaceVariant = useFormControlSurface();
    const shellArgs = computed(() => ({
      surfaceVariant,
      variant: props.variant ?? ("primary" as FormControlVariant),
    }));
    const recipeSlots = computed(() => props.recipe({ ...shellArgs.value }));

    return () =>
      h(
        SwitchStylesContext,
        {
          value: {
            get slots() {
              return recipeSlots.value;
            },
            get variants() {
              return shellArgs.value as never;
            },
          },
        },
        () =>
          h(
            SwitchPrimitive.Root as ArkPart,
            {
              ...attrs,
              class: recipeSlots.value.base({ class: props.class }),
              "data-variant": shellArgs.value.variant,
            },
            slots,
          ),
      );
  },
});

const SwitchControl = withContext(SwitchPrimitive.Control, {
  name: "Control",
});

const SwitchThumb = withContext(SwitchPrimitive.Thumb, {
  name: "Thumb",
});
// #endregion

// #region Closed
export const Switch = defineComponent({
  emits: {
    checkedChange: (_details: { checked: boolean }) => true,
    valueChange: (_value: boolean) => true,
  },
  inheritAttrs: false,
  name: "Switch",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<SwitchClassNames>,
    },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant>,
    },
  },
  setup(props, { attrs, emit }) {
    return () =>
      h(
        SwitchRoot,
        {
          ...attrs,
          class: props.class,
          onCheckedChange: (details: { checked: boolean }) => {
            emit("checkedChange", details);
            emit("valueChange", details.checked === true);
          },
          variant: props.variant,
        },
        () => [
          h(SwitchControl, { class: props.classNames?.control }, () =>
            h(SwitchThumb, { class: props.classNames?.thumb }),
          ),
          h(SwitchPrimitive.HiddenInput as ArkPart),
        ],
      );
  },
});
// #endregion
