import type { AnyFieldApi } from "@tanstack/vue-form";
import { type Component, defineComponent, h } from "vue";
import { useFieldContext } from "./contexts";
import { getFieldErrorMessage, isFieldInvalid } from "./field-utils";
import { useSubmissionAttempts } from "./hooks";

interface FieldConnection {
  error: string | undefined;
  field: AnyFieldApi;
  invalid: boolean;
}

export function createFieldComponent<
  TValue,
  TControlProps extends object,
  TConnectedProps extends Partial<TControlProps>,
>(Component: Component, mapFieldToProps: (connection: FieldConnection) => TConnectedProps) {
  return defineComponent({
    inheritAttrs: false,
    name:
      typeof Component === "object" && Component && "name" in Component
        ? `Connected${String(Component.name)}`
        : "ConnectedField",
    setup(_, { attrs }) {
      const field = useFieldContext<TValue>();
      const submissionAttempts = useSubmissionAttempts();

      return () => {
        const invalid = isFieldInvalid(field, submissionAttempts.value);
        const fieldProps = mapFieldToProps({
          error: invalid ? getFieldErrorMessage(field) : undefined,
          field,
          invalid,
        });

        return h(Component, {
          id: field.name,
          ...fieldProps,
          ...attrs,
        });
      };
    },
  });
}
