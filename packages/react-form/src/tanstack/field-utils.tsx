import { Field } from "@pisagor/react/field";
import type { AnyFieldApi } from "@tanstack/react-form";
import type { FormEvent } from "react";
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

export function isFieldInvalid(field: AnyFieldApi, submissionAttempts = 0): boolean {
  return (
    field.state.meta.errors.length > 0 && (field.state.meta.isTouched || submissionAttempts > 0)
  );
}

interface FormFieldErrorProps {
  field: AnyFieldApi;
}

export function FormFieldError({ field }: FormFieldErrorProps) {
  const submissionAttempts = useSubmissionAttempts();
  const invalid = isFieldInvalid(field, submissionAttempts);

  if (!invalid) {
    return null;
  }

  const message = getFieldErrorMessage(field);

  if (!message) {
    return null;
  }

  return <Field.Error>{message}</Field.Error>;
}

export function preventDefaultFormSubmit(event: FormEvent) {
  event.preventDefault();
  event.stopPropagation();
}
