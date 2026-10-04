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

export const imports = `import { Tour } from "@pisagor/vue";`;

export const sources = {
  Async: asyncRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Events: eventsRaw,
  KeyboardNavigation: keyboard_navigationRaw,
  Progress: progressRaw,
  Skip: skipRaw,
  StepTypes: step_typesRaw,
  WaitForClick: wait_for_clickRaw,
  WaitForElement: wait_for_elementRaw,
  WaitForInput: wait_for_inputRaw,
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
