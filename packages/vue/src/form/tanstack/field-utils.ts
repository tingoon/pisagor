import type { AnyFieldApi } from "@tanstack/vue-form";
import { defineComponent, h, type PropType } from "vue";
import { Field } from "../../components";
import { useSubmissionAttempts } from "./hooks";

type ArkPart = Parameters<typeof h>[0];

export function getFieldErrorMessage(field: AnyFieldApi): string | undefined {
  for (const error of field.state.meta.errors) {
    if (typeof error === "string") {
      return error;
    }

    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      return error.message;
    }
  }

  return undefined;
}

export function isFieldInvalid(field: AnyFieldApi, submissionAttempts = 0): boolean {
  return (
    field.state.meta.errors.length > 0 && (field.state.meta.isTouched || submissionAttempts > 0)
  );
}

export const FormFieldError = defineComponent({
  inheritAttrs: false,
  name: "FormFieldError",
  props: {
    field: { required: true, type: Object as PropType<AnyFieldApi> },
  },
  setup(props) {
    const submissionAttempts = useSubmissionAttempts();

    return () => {
      const invalid = isFieldInvalid(props.field, submissionAttempts.value);

      if (!invalid) {
        return null;
      }

      const message = getFieldErrorMessage(props.field);

      if (!message) {
        return null;
      }

      return h(Field.Error as ArkPart, null, () => message);
    };
  },
});

export function preventDefaultFormSubmit(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}
