import type { AnyFieldApi } from "@tanstack/vue-form";
import { computed } from "vue";
import { useFormContext } from "./contexts";

export function useFieldInvalid(field: AnyFieldApi) {
  const submissionAttempts = useSubmissionAttempts();

  return computed(
    () =>
      field.state.meta.errors.length > 0 &&
      (field.state.meta.isTouched || submissionAttempts.value > 0),
  );
}

export function useSubmissionAttempts() {
  const form = useFormContext();
  return form.useSelector((state) => state.submissionAttempts);
}
