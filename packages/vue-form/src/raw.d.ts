declare module "*?raw" {
  const source: string;
  export default source;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
