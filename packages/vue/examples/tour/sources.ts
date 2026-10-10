import asyncRaw from "./async.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
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
  CustomRecipe: custom_recipeRaw,
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
