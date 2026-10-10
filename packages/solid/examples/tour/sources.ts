import asyncRaw from "./async.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import eventsRaw from "./events.tsx?raw";
import keyboard_navigationRaw from "./keyboard-navigation.tsx?raw";
import progressRaw from "./progress.tsx?raw";
import skipRaw from "./skip.tsx?raw";
import step_typesRaw from "./step-types.tsx?raw";
import wait_for_clickRaw from "./wait-for-click.tsx?raw";
import wait_for_elementRaw from "./wait-for-element.tsx?raw";
import wait_for_inputRaw from "./wait-for-input.tsx?raw";

export const imports = `import { Tour } from "@pisagor/solid";`;

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
