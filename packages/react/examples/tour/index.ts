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

export const imports = `import { Tour } from "@pisagor/react";`;

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

export * from "./async";
export * from "./custom-spacing";
export * from "./default";
export * from "./events";
export * from "./keyboard-navigation";
export * from "./progress";
export * from "./skip";
export * from "./step-types";
export * from "./wait-for-click";
export * from "./wait-for-element";
export * from "./wait-for-input";
