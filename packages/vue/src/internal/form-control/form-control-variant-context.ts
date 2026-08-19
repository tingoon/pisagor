import { defineComponent, type PropType, toRef } from "vue";
import { createContext } from "../../utils/create-context";
import type { FormControlVariant } from "./form-control-variants";

const [provideFormControlVariant, useFormControlVariantContext] = createContext<
  FormControlVariant | undefined
>({
  name: "FormControlVariant",
  strict: false,
});

export { provideFormControlVariant, useFormControlVariantContext };

export const FormControlVariantProvider = defineComponent({
  name: "FormControlVariantProvider",
  props: {
    value: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { slots }) {
    provideFormControlVariant(toRef(props, "value"));
    return () => slots.default?.();
  },
});
