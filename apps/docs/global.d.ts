export {};

declare module "@pisagor/react/styles";
declare module "@pisagor/react-form/styles";
declare module "@pisagor/solid/styles";
declare module "@pisagor/solid-form/styles";
declare module "@pisagor/svelte/styles";
declare module "@pisagor/svelte-form/styles";
declare module "@pisagor/tokens/styles";
declare module "@pisagor/vue/styles";
declare module "@pisagor/vue-form/styles";

declare module "react" {
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number | undefined;
  }
}

declare module "*.svelte" {
  import type { Component } from "svelte";

  const component: Component;
  export default component;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare global {
  interface ErrorConstructor {
    captureStackTrace?(
      target: object,
      constructorOpt?: (...args: unknown[]) => unknown,
    ): void;
  }
}
