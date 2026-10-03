declare module "*.svelte" {
  import type { Component } from "svelte";

  const component: Component;
  export default component;
}

declare module "@pisagor/svelte/styles";
declare module "@pisagor/svelte-form/styles";
