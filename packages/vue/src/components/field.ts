import { ark } from "@ark-ui/vue/factory";
import { Field as FieldPrimitive, useFieldContext } from "@ark-ui/vue/field";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/vue/fieldset";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { fieldRecipe, formControlSeparatorRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Separator } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Slot recipe context
const {
  provideStyles: provideFieldStyles,
  useOptionalStyles: useOptionalFieldStyles,
  withProvider,
} = createSlotRecipeContext({
  name: "Field",
  recipe: fieldRecipe,
});

/**
 * Parts fall back to the default recipe outside `<Field>` (React
 * `useFieldSlots` parity), e.g. `CircularSlider.ValueText` wraps `Field.Label`.
 */
function useFieldStyles(): { readonly slots: ReturnType<typeof fieldRecipe> } {
  const styles = useOptionalFieldStyles();
  return {
    get slots() {
      return styles?.slots ?? fieldRecipe();
    },
  };
}
// #endregion

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FieldProps extends BaseFieldProps {
  class?: unknown;
  orientation?: "horizontal" | "responsive" | "vertical";
  reverse?: boolean;
}

export interface FieldLabelProps {
  asChild?: boolean;
  class?: unknown;
}
// #endregion

// #region Parts
export const FieldRoot = withProvider(FieldPrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const FieldSet = defineComponent({
  inheritAttrs: false,
  name: "FieldSet",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: fieldRecipe,
      type: Function as PropType<typeof fieldRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideFieldStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        FieldsetPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.set(), props.class),
        },
        slots,
      );
    };
  },
});

export const FieldLegend = defineComponent({
  inheritAttrs: false,
  name: "FieldLegend",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: "legend",
      type: String as PropType<"label" | "legend">,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        FieldsetPrimitive.Legend as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.legend(), props.class),
          "data-variant": props.variant,
        },
        slots,
      );
    };
  },
});

export const FieldGroup = defineComponent({
  inheritAttrs: false,
  name: "FieldGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: fieldRecipe,
      type: Function as PropType<typeof fieldRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const recipeSlots = computed(() => props.recipe());

    provideFieldStyles({
      get slots() {
        return recipeSlots.value;
      },
      variants: {},
    });

    return () => {
      const variantSlots = recipeSlots.value;

      return h(
        "div",
        {
          ...attrs,
          class: cn(variantSlots.group(), props.class),
          "data-part": "group",
          "data-scope": "field",
        },
        slots.default?.(),
      );
    };
  },
});

export const FieldContent = defineComponent({
  inheritAttrs: false,
  name: "FieldContent",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: cn(variantSlots.content(), props.class),
          "data-part": "content",
          "data-scope": "field",
        },
        slots.default?.(),
      );
    };
  },
});

export const FieldLabel = defineComponent({
  inheritAttrs: false,
  name: "FieldLabel",
  props: {
    asChild: Boolean,
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();
    // Ark's Field.Label requires a field context; outside `<Field>` (e.g. a
    // standalone `CircularSlider.ValueText`) render a plain styled label.
    const field = useFieldContext(undefined);

    return () => {
      const variantSlots = styles.slots;

      return h(
        (field ? FieldPrimitive.Label : ark.label) as ArkPart,
        {
          ...attrs,
          asChild: props.asChild,
          class: cn(variantSlots.label(), props.class),
        },
        slots,
      );
    };
  },
});

export const FieldRequiredIndicator = defineComponent({
  inheritAttrs: false,
  name: "FieldRequiredIndicator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        FieldPrimitive.RequiredIndicator as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: cn(variantSlots.requiredIndicator(), props.class),
        },
        () => slots.default?.() ?? "*",
      );
    };
  },
});

export const FieldTitle = defineComponent({
  inheritAttrs: false,
  name: "FieldTitle",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: cn(variantSlots.title(), props.class),
          "data-part": "title",
          "data-scope": "field",
        },
        slots.default?.(),
      );
    };
  },
});

export const FieldDescription = defineComponent({
  inheritAttrs: false,
  name: "FieldDescription",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        "p",
        {
          ...attrs,
          class: cn(variantSlots.description(), props.class),
          "data-part": "description",
          "data-scope": "field",
        },
        slots.default?.(),
      );
    };
  },
});

export const FieldSeparator = defineComponent({
  inheritAttrs: false,
  name: "FieldSeparator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    const surfaceVariant = useFormControlSurface();

    return () => {
      const resolved = {
        surfaceVariant,
        variant: "primary" as FormControlVariant,
      };
      const shellArgs = {
        surfaceVariant: resolved.surfaceVariant,
        variant: resolved.variant,
      };
      const children = slots.default?.();
      const variantSlots = styles.slots;

      return h(
        "div",
        {
          ...attrs,
          class: cn(variantSlots.separator(), props.class),
          "data-content": !!children,
          "data-part": "separator",
          "data-scope": "field",
        },
        [
          h(Separator as ArkPart, { class: variantSlots.inline() }),
          children
            ? h(
                "span",
                { class: formControlSeparatorRecipe({ ...shellArgs }) },
                children,
              )
            : null,
        ],
      );
    };
  },
});

export const FieldHelper = defineComponent({
  inheritAttrs: false,
  name: "FieldHelper",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        FieldPrimitive.HelperText as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.helper(), props.class),
        },
        slots,
      );
    };
  },
});

export const FieldError = defineComponent({
  inheritAttrs: false,
  name: "FieldError",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useFieldStyles();

    return () => {
      const variantSlots = styles.slots;

      return h(
        FieldPrimitive.ErrorText as ArkPart,
        {
          ...attrs,
          class: cn(variantSlots.error(), props.class),
        },
        slots,
      );
    };
  },
});
// #endregion

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Helper: FieldHelper,
  Label: FieldLabel,
  Legend: FieldLegend,
  RequiredIndicator: FieldRequiredIndicator,
  Separator: FieldSeparator,
  Set: FieldSet,
  Title: FieldTitle,
});
