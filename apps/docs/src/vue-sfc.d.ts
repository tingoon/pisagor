// Ambient (non-module) so the wildcard applies to relative `./x.vue` imports
// from TS barrels such as `src/examples/vue/*/index.ts`.
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
