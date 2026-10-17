import { AsyncSource as Async } from "./async";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { EventsSource as Events } from "./events";
import { KeyboardNavigationSource as KeyboardNavigation } from "./keyboard-navigation";
import { ProgressSource as Progress } from "./progress";
import { SkipSource as Skip } from "./skip";
import { StepTypesSource as StepTypes } from "./step-types";
import { WaitForClickSource as WaitForClick } from "./wait-for-click";
import { WaitForElementSource as WaitForElement } from "./wait-for-element";
import { WaitForInputSource as WaitForInput } from "./wait-for-input";

export const imports = `import { Tour } from "@pisagor/react";`;

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
