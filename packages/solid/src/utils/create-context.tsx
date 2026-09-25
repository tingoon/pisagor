import {
  createContext as createSolidContext,
  type JSX,
  type ParentProps,
  useContext as useSolidContext,
} from "solid-js";

export interface CreateContextOptions<T, Name extends string = string> {
  name: Name;
  strict?: boolean;
  defaultValue?: T;
}

type ProviderComponent<T> = (props: ParentProps<{ value: T }>) => JSX.Element;

type CreateContextResult<Name extends string, T> = {
  [K in `${Name}Context`]: ProviderComponent<T>;
} & {
  [K in `use${Name}`]: () => T;
};

type CreateContextResultOptional<Name extends string, T> = {
  [K in `${Name}Context`]: ProviderComponent<T>;
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

    const Ctx = createSolidContext<T | undefined>(defaultValue);

    function Provider(props: ParentProps<{ value: T }>): JSX.Element {
      return <Ctx.Provider value={props.value}>{props.children}</Ctx.Provider>;
    }

    function useContext(): T | undefined {
      const context = useSolidContext(Ctx);

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
      [contextName]: Provider,
      [hookName]: useContext,
    } as CreateContextResult<Name, T> | CreateContextResultOptional<Name, T>;
  }

  return createNamedContext;
}
