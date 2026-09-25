import { createContext as createArkContext } from "@ark-ui/svelte/utils";

export interface CreateContextOptions<T> {
  /** Context name used in error messages. */
  name: string;
  /** Value returned when no provider is present and `strict` is false. */
  defaultValue?: T;
  /** Throw when consumed outside a provider. @defaultValue true */
  strict?: boolean;
  hookName?: string;
  providerName?: string;
}

export interface CreatedContext<T> {
  setContext: (value: T) => void;
  getContext: (fallback?: T) => T;
}

/** Thin wrapper around Ark UI's `createContext` with a consistent API. */
export function createContext<T>(
  options: CreateContextOptions<T>,
): CreatedContext<T> {
  const [setContextValue, getContextValue] = createArkContext<T>({
    defaultValue: options.defaultValue,
    hookName: options.hookName ?? `use${options.name}`,
    name: options.name,
    providerName: options.providerName ?? `${options.name}Provider`,
    strict: options.strict ?? true,
  });

  return {
    getContext: getContextValue,
    setContext: setContextValue,
  };
}
