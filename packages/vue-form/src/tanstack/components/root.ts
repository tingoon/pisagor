import { defineComponent, h, type PropType } from "vue";
import { preventDefaultFormSubmit } from "../field-utils";
import type { AppFormApi } from "../types";

type ArkPart = Parameters<typeof h>[0];

export function createRoot(form: AppFormApi) {
  return defineComponent({
    inheritAttrs: false,
    name: "FormRoot",
    props: {
      class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
      noValidate: { default: true, type: Boolean },
    },
    setup(props, { attrs, slots }) {
      return () =>
        h(
          "form",
          {
            ...attrs,
            class: props.class,
            noValidate: props.noValidate,
            onSubmit: (event: Event) => {
              preventDefaultFormSubmit(event);
              void form.handleSubmit();
            },
          },
          () => h(form.AppForm as ArkPart, null, () => slots.default?.()),
        );
    },
  });
}
