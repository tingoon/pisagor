import Async from "./async.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";
import Events from "./events.vue?raw";
import KeyboardNavigation from "./keyboard-navigation.vue?raw";
import Progress from "./progress.vue?raw";
import Skip from "./skip.vue?raw";
import StepTypes from "./step-types.vue?raw";
import WaitForClick from "./wait-for-click.vue?raw";
import WaitForElement from "./wait-for-element.vue?raw";
import WaitForInput from "./wait-for-input.vue?raw";

export const imports = `import { Tour } from "@pisagor/vue";`;

export const sources = {
  Async,
  CustomRecipe,
  CustomSpacing,
  Default,
  Events,
  KeyboardNavigation,
  Progress,
  Skip,
  StepTypes,
  WaitForClick,
  WaitForElement,
  WaitForInput,
} as const;
