import type { AnyFieldApi, AnyFormApi } from "@tanstack/vue-form";
import { type InjectionKey, inject, type Reactive } from "vue";

export type FieldContextValue = Reactive<{ field: AnyFieldApi }>;
export type FormContextValue = AnyFormApi & {
  Subscribe: unknown;
  useSelector: <T>(
    selector: (state: { submissionAttempts: number; isSubmitting: boolean }) => T,
  ) => {
    value: T;
  };
};

const fieldContextKey: InjectionKey<FieldContextValue> = Symbol("pisagor-vue-form-field");
const formContextKey: InjectionKey<FormContextValue> = Symbol("pisagor-vue-form");

export const fieldContext = {
  key: fieldContextKey,
};

export const formContext = {
  key: formContextKey,
};

export function useFieldContext<TData = unknown>() {
  const context = inject(fieldContextKey);

  if (!context) {
    throw new Error("`useFieldContext` only works within an AppField");
  }

  return context.field as AnyFieldApi & { state: { value: TData } };
}

export function useFormContext() {
  const form = inject(formContextKey);

  if (!form) {
    throw new Error("`useFormContext` only works within an AppForm");
  }

  return form;
}

export { fieldContextKey, formContextKey };
