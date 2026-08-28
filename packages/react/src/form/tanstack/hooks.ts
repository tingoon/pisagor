import type { AnyFieldApi } from "@tanstack/react-form";
import { useCallback, useSyncExternalStore } from "react";
import { useFormContext } from "./contexts";

export function useFieldInvalid(field: AnyFieldApi) {
  const submissionAttempts = useSubmissionAttempts();
  return (
    field.state.meta.errors.length > 0 && (field.state.meta.isTouched || submissionAttempts > 0)
  );
}

export function useSubmissionAttempts() {
  const form = useFormContext();

  const subscribe = useCallback(
    (onStoreChange: () => void) => form.store.subscribe(onStoreChange).unsubscribe,
    [form.store],
  );

  const getSnapshot = useCallback(() => form.store.state.submissionAttempts, [form.store]);

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
