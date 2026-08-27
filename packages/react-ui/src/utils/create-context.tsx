import React from "react";

export interface CreateContextOptions<T, Name extends string = string> {
  name: Name;
  strict?: boolean;
  defaultValue?: T;
}

type CreateContextResult<Name extends string, T> = {
  [K in `${Name}Context`]: React.Context<T | undefined>;
} & {
  [K in `use${Name}`]: () => T;
};

type CreateContextResultOptional<Name extends string, T> = {
  [K in `${Name}Context`]: React.Context<T | undefined>;
} & {
  [K in `use${Name}`]: () => T | undefined;
};

export function createContext<T>() {
  function createNamedContext<const Name extends string>(
    options: CreateContextOptions<T, Name> & { strict: false },
  ): CreateContextResultOptional<Name, T>;
  function createNamedContext<const Name extends string>(
    options: CreateContextOptions<T, Name>,
  ): CreateContextResult<Name, T>;
  function createNamedContext<const Name extends string>({
    name,
    strict = true,
    defaultValue,
  }: CreateContextOptions<T, Name>) {
    const contextName = `${name}Context`;
    const hookName = `use${name}`;

    const Context = React.createContext<T | undefined>(defaultValue);
    Context.displayName = contextName;

    function useContext() {
      const context = React.useContext(Context);

      if (context === undefined && strict) {
        const error = new Error(`${hookName} must be used within ${contextName}.`);

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

  return createNamedContext;
}
