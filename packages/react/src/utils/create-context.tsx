import React from "react";

export interface CreateContextOptions<T> {
  name: string;
  strict?: boolean;
  defaultValue?: T;
}

export function createContext<T>(
  options: CreateContextOptions<T>,
): [React.Context<T | undefined>, () => T];

export function createContext<T>(
  options: CreateContextOptions<T> & {
    strict: false;
  },
): [React.Context<T | undefined>, () => T | undefined];

export function createContext<T>({ name, strict = true, defaultValue }: CreateContextOptions<T>) {
  const contextName = `${name}Context`;

  const Context = React.createContext<T | undefined>(defaultValue);
  Context.displayName = contextName;

  function useContext() {
    const context = React.useContext(Context);

    if (context === undefined && strict) {
      const error = new Error(`use${name} must be used within ${contextName}.`);

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

  if (strict) {
    return [Context, useContext as () => T];
  }

  return [Context, useContext as () => T | undefined];
}
