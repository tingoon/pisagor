import type { AnyFieldApi } from "@tanstack/svelte-form";
import { useFormContext } from "./contexts";

export function isFieldInvalid(
  field: AnyFieldApi,
  submissionAttempts = 0,
): boolean {
  return (
    field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts > 0)
  );
}

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

export function useSubmissionAttempts() {
  const form = useFormContext();
  return form.useSelector((state) => state.submissionAttempts);
}

export function useFieldInvalid(field: AnyFieldApi) {
  const submissionAttempts = useSubmissionAttempts();
  return isFieldInvalid(field, submissionAttempts.current);
}
