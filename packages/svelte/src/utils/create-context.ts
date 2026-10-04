import { createContext as createArkContext } from "@ark-ui/svelte/utils";

export interface CreateContextOptions<T> {
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
export function createContext<const Name extends string>(name: Name) {
  function createTypedContext<T>({
    defaultValue,
    strict = true,
    hookName,
    providerName,
  }: CreateContextOptions<T> = {}): CreatedContext<T> {
    const [setContextValue, getContextValue] = createArkContext<T>({
      defaultValue,
      hookName: hookName ?? `use${name}`,
      name,
      providerName: providerName ?? `${name}Provider`,
      strict,
    });

    return {
      getContext: getContextValue,
      setContext: setContextValue,
    };
  }

  return createTypedContext;
}
