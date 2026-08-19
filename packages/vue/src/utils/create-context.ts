import { type InjectionKey, inject, type MaybeRef, provide, unref } from "vue";

export interface CreateContextOptions<T> {
  name: string;
  strict?: boolean;
  defaultValue?: T;
}

export function createContext<T>(options: CreateContextOptions<T>) {
  const key: InjectionKey<MaybeRef<T | undefined>> = Symbol(`${options.name}Context`);

  function useContextRef(): MaybeRef<T> {
    const context = inject(key, options.defaultValue);

    if (context === undefined && options.strict !== false) {
      const error = new Error(`use${options.name} must be used within ${options.name}Context.`);

      error.name = `${options.name}ContextError`;
      throw error;
    }

    return context as MaybeRef<T>;
  }

  function useContext(): T | undefined {
    const context = inject(key, options.defaultValue);

    if (context === undefined) {
      if (options.strict !== false) {
        const error = new Error(`use${options.name} must be used within ${options.name}Context.`);

        error.name = `${options.name}ContextError`;
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
