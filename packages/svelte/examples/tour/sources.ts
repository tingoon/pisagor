import asyncRaw from "./async.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import eventsRaw from "./events.svelte?raw";
import keyboard_navigationRaw from "./keyboard-navigation.svelte?raw";
import progressRaw from "./progress.svelte?raw";
import skipRaw from "./skip.svelte?raw";
import step_typesRaw from "./step-types.svelte?raw";
import tour_progress_barRaw from "./tour-progress-bar.svelte?raw";
import wait_for_clickRaw from "./wait-for-click.svelte?raw";
import wait_for_elementRaw from "./wait-for-element.svelte?raw";
import wait_for_inputRaw from "./wait-for-input.svelte?raw";

export const imports = `import { Tour } from "@pisagor/svelte";`;

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
  TourProgressBar: tour_progress_barRaw,
  WaitForClick: wait_for_clickRaw,
  WaitForElement: wait_for_elementRaw,
  WaitForInput: wait_for_inputRaw,
} as const;
