declare module "@pisagor/tokens/styles";
declare module "@pisagor/vue/styles";
declare module "@pisagor/vue-charts/styles";
declare module "@pisagor/vue-form/styles";

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
