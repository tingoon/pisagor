import Async from "./async.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Events from "./events.svelte?raw";
import KeyboardNavigation from "./keyboard-navigation.svelte?raw";
import Progress from "./progress.svelte?raw";
import Skip from "./skip.svelte?raw";
import StepTypes from "./step-types.svelte?raw";
import TourProgressBar from "./tour-progress-bar.svelte?raw";
import WaitForClick from "./wait-for-click.svelte?raw";
import WaitForElement from "./wait-for-element.svelte?raw";
import WaitForInput from "./wait-for-input.svelte?raw";

export const imports = `import { Tour } from "@pisagor/svelte";`;

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
  TourProgressBar,
  WaitForClick,
  WaitForElement,
  WaitForInput,
} as const;
