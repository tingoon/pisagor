import { type Component, h } from "vue";

/**
 * Package examples are Vue components. Storybook Vue's `render` expects an
 * ArgsStoryFn that returns a VNode / options object — not the component type.
 */
export function exampleRender(Example: Component) {
  return () => h(Example);
}
