import { stripSvelteExample } from "@pisagor/utils";
import asyncRaw from "./async.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import eventsRaw from "./events.svelte?raw";
import keyboard_navigationRaw from "./keyboard-navigation.svelte?raw";
import progressRaw from "./progress.svelte?raw";
import skipRaw from "./skip.svelte?raw";
import step_typesRaw from "./step-types.svelte?raw";
import wait_for_clickRaw from "./wait-for-click.svelte?raw";
import wait_for_elementRaw from "./wait-for-element.svelte?raw";
import wait_for_inputRaw from "./wait-for-input.svelte?raw";

export const imports = `import { Tour } from "@pisagor/svelte/tour";`;

export const sources = {
  Async: stripSvelteExample(asyncRaw),
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  Events: stripSvelteExample(eventsRaw),
  KeyboardNavigation: stripSvelteExample(keyboard_navigationRaw),
  Progress: stripSvelteExample(progressRaw),
  Skip: stripSvelteExample(skipRaw),
  StepTypes: stripSvelteExample(step_typesRaw),
  WaitForClick: stripSvelteExample(wait_for_clickRaw),
  WaitForElement: stripSvelteExample(wait_for_elementRaw),
  WaitForInput: stripSvelteExample(wait_for_inputRaw),
} as const;

export { default as Async } from "./async.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Events } from "./events.svelte";
export { default as KeyboardNavigation } from "./keyboard-navigation.svelte";
export { default as Progress } from "./progress.svelte";
export { default as Skip } from "./skip.svelte";
export { default as StepTypes } from "./step-types.svelte";
export { default as WaitForClick } from "./wait-for-click.svelte";
export { default as WaitForElement } from "./wait-for-element.svelte";
export { default as WaitForInput } from "./wait-for-input.svelte";
