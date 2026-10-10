export {};

declare module "#/changelog/*" {
  export const Content: import("astro/runtime/server").AstroComponentFactory;
  export function getHeadings(): {
    depth: number;
    slug: string;
    text: string;
  }[];
}

declare module "*.md?raw" {
  const raw: string;
  export default raw;
}

declare module "@pisagor/react/styles";
declare module "@pisagor/solid/styles";
declare module "@pisagor/svelte/styles";
declare module "@pisagor/tokens/styles";
declare module "@pisagor/vue/styles";

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
