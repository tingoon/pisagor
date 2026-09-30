import { stripTsxExample } from "@pisagor/utils";
import asyncRaw from "./async.tsx?raw";
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

export const imports = `import { Tour } from "@pisagor/react/tour";`;

export const sources = {
  Async: stripTsxExample(asyncRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Events: stripTsxExample(eventsRaw),
  KeyboardNavigation: stripTsxExample(keyboard_navigationRaw),
  Progress: stripTsxExample(progressRaw),
  Skip: stripTsxExample(skipRaw),
  StepTypes: stripTsxExample(step_typesRaw),
  WaitForClick: stripTsxExample(wait_for_clickRaw),
  WaitForElement: stripTsxExample(wait_for_elementRaw),
  WaitForInput: stripTsxExample(wait_for_inputRaw),
} as const;

export { Async } from "./async";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Events } from "./events";
export { KeyboardNavigation } from "./keyboard-navigation";
export { Progress } from "./progress";
export { Skip } from "./skip";
export { StepTypes } from "./step-types";
export { WaitForClick } from "./wait-for-click";
export { WaitForElement } from "./wait-for-element";
export { WaitForInput } from "./wait-for-input";
