import { getContext, setContext } from "svelte";

/**
 * Marks a subtree as already wrapped in a control part, so nested parts (e.g.
 * `DatePicker.Input` inside `DatePicker.Control`) do not render a second one.
 */
export function setInsideControl(key: symbol): void {
  setContext(key, true);
}

export function isInsideControl(key: symbol): boolean {
  return getContext<boolean | undefined>(key) ?? false;
}
