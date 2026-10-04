import { type InjectionKey, inject, type MaybeRef, provide, unref } from "vue";

export interface CreateContextOptions<T> {
  strict?: boolean;
  defaultValue?: T;
}

export function createContext<const Name extends string>(name: Name) {
  function createTypedContext<T>({
    strict = true,
    defaultValue,
  }: CreateContextOptions<T> = {}) {
    const key: InjectionKey<MaybeRef<T | undefined>> = Symbol(`${name}Context`);

    function useContextRef(): MaybeRef<T> {
      const context = inject(key, defaultValue);

      if (context === undefined && strict) {
        const error = new Error(
          `use${name} must be used within ${name}Context.`,
        );

        error.name = `${name}ContextError`;
        throw error;
      }

      return context as MaybeRef<T>;
    }

    function useContext(): T | undefined {
      const context = inject(key, defaultValue);

      if (context === undefined) {
        if (strict) {
          const error = new Error(
            `use${name} must be used within ${name}Context.`,
          );

          error.name = `${name}ContextError`;
          throw error;
        }

        return undefined;
      }

      return unref(context);
    }

    function provideContext(value: MaybeRef<T | undefined>) {
      provide(key, value);
    }

    return [provideContext, useContext, useContextRef] as const;
  }

  return createTypedContext;
}
