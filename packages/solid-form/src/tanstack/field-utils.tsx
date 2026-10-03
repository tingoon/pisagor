import { Field } from "@pisagor/solid";
import type { AnyFieldApi } from "@tanstack/solid-form";
import { Show } from "solid-js";
import { useSubmissionAttempts } from "./hooks";

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

export function isFieldInvalid(
  field: AnyFieldApi,
  submissionAttempts = 0,
): boolean {
  return (
    field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts > 0)
  );
}

interface FormFieldErrorProps {
  field: AnyFieldApi;
}

export function FormFieldError(props: FormFieldErrorProps) {
  const submissionAttempts = useSubmissionAttempts();
  const invalid = () => isFieldInvalid(props.field, submissionAttempts());
  const message = () => getFieldErrorMessage(props.field);

  return (
    <Show when={invalid() && message()}>
      {(msg) => <Field.Error>{msg()}</Field.Error>}
    </Show>
  );
}

export function preventDefaultFormSubmit(event: Event) {
  event.preventDefault();
  event.stopPropagation();
}
