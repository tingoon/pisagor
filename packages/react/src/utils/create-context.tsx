import {
  type Context,
  createContext as createReactContext,
  useContext as useReactContext,
} from "react";

export interface CreateContextOptions<T> {
  strict?: boolean;
  defaultValue?: T;
}

type CreateContextResult<Name extends string, T> = {
  [K in `${Name}Context`]: Context<T | undefined>;
} & {
  [K in `use${Name}`]: () => T;
};

type CreateContextResultOptional<Name extends string, T> = {
  [K in `${Name}Context`]: Context<T | undefined>;
} & {
  [K in `use${Name}`]: () => T | undefined;
};

export function createContext<const Name extends string>(name: Name) {
  function createTypedContext<T>(
    options: CreateContextOptions<T> & { strict: false },
  ): CreateContextResultOptional<Name, T>;
  function createTypedContext<T>(
    options?: CreateContextOptions<T>,
  ): CreateContextResult<Name, T>;
  function createTypedContext<T>({
    strict = true,
    defaultValue,
  }: CreateContextOptions<T> = {}) {
    const contextName = `${name}Context`;
    const hookName = `use${name}`;

    const Context = createReactContext<T | undefined>(defaultValue);
    Context.displayName = contextName;

    function useContext() {
      const context = useReactContext(Context);

      if (context === undefined && strict) {
        const error = new Error(
          `${hookName} must be used within ${contextName}.`,
        );

        error.name = `${contextName}Error`;

        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(error, useContext);
        } else {
          error.stack = new Error().stack;
        }

        throw error;
      }

      return context;
    }

    return {
      [contextName]: Context,
      [hookName]: useContext,
    } as CreateContextResult<Name, T> | CreateContextResultOptional<Name, T>;
  }

  return createTypedContext;
}
