// Ambient (non-module) so the wildcard applies to relative `./x.vue` imports.
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
