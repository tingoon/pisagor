import type { AnyFieldApi } from "@tanstack/solid-form";
import type { Accessor } from "solid-js";
import { useFormContext } from "./contexts";

export function useFieldInvalid(field: Accessor<AnyFieldApi>) {
  const submissionAttempts = useSubmissionAttempts();
  return () =>
    field().state.meta.errors.length > 0 &&
    (field().state.meta.isTouched || submissionAttempts() > 0);
}

export function useSubmissionAttempts() {
  const form = useFormContext();
  return form.useSelector((state) => state.submissionAttempts);
}
