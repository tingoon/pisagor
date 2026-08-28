import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { FieldLabelProps, FieldProps } from "../../components";
import { Field } from "../../components";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FieldPresentationProps {
  class?: unknown;
  description?: VNodeChild;
  error?: VNodeChild;
  id?: string;
  invalid?: boolean;
  label?: VNodeChild;
  labelAccessory?: VNodeChild;
  labelProps?: Omit<FieldLabelProps, "asChild"> & { class?: unknown };
  orientation?: FieldProps["orientation"];
}
// #endregion

// #region Part
export const FieldShell = defineComponent({
  inheritAttrs: false,
  name: "FieldShell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    label: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelAccessory: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelProps: {
      default: undefined,
      type: Object as PropType<FieldPresentationProps["labelProps"]>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldProps["orientation"]>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const hasLabel = Boolean(props.label || props.labelAccessory);

      return h(
        Field as ArkPart,
        {
          class: props.class,
          invalid: props.invalid,
          orientation: props.orientation,
        },
        () => [
          hasLabel
            ? h(
                Field.Label as ArkPart,
                {
                  ...props.labelProps,
                  ...(props.id != null ? { for: props.id } : {}),
                },
                () => [props.label, props.labelAccessory],
              )
            : null,
          props.description ? h(Field.Description as ArkPart, null, () => props.description) : null,
          slots.default?.(),
          props.error ? h(Field.Error as ArkPart, null, () => props.error) : null,
        ],
      );
    };
  },
});
// #endregion
