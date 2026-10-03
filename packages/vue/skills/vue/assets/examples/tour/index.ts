import { stripVueExample } from "@pisagor/utils";
import asyncRaw from "./async.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import eventsRaw from "./events.vue?raw";
import keyboard_navigationRaw from "./keyboard-navigation.vue?raw";
import progressRaw from "./progress.vue?raw";
import skipRaw from "./skip.vue?raw";
import step_typesRaw from "./step-types.vue?raw";
import wait_for_clickRaw from "./wait-for-click.vue?raw";
import wait_for_elementRaw from "./wait-for-element.vue?raw";
import wait_for_inputRaw from "./wait-for-input.vue?raw";

export const imports = `import { Tour } from "@pisagor/vue/tour";`;

export const sources = {
  Async: stripVueExample(asyncRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  Events: stripVueExample(eventsRaw),
  KeyboardNavigation: stripVueExample(keyboard_navigationRaw),
  Progress: stripVueExample(progressRaw),
  Skip: stripVueExample(skipRaw),
  StepTypes: stripVueExample(step_typesRaw),
  WaitForClick: stripVueExample(wait_for_clickRaw),
  WaitForElement: stripVueExample(wait_for_elementRaw),
  WaitForInput: stripVueExample(wait_for_inputRaw),
} as const;

export { default as Async } from "./async.vue";
export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as Events } from "./events.vue";
export { default as KeyboardNavigation } from "./keyboard-navigation.vue";
export { default as Progress } from "./progress.vue";
export { default as Skip } from "./skip.vue";
export { default as StepTypes } from "./step-types.vue";
export { default as WaitForClick } from "./wait-for-click.vue";
export { default as WaitForElement } from "./wait-for-element.vue";
export { default as WaitForInput } from "./wait-for-input.vue";
