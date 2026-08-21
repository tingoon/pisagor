import {
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarRoot,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "./action-bar";

export type {
  ActionBarBodyProps,
  ActionBarCloseProps,
  ActionBarContentProps,
  ActionBarProps,
  ActionBarSeparatorProps,
  ActionBarTriggerProps,
  ActionBarValueProps,
} from "./action-bar";

export const ActionBar = Object.assign(ActionBarRoot, {
  Body: ActionBarBody,
  Close: ActionBarClose,
  Content: ActionBarContent,
  Separator: ActionBarSeparator,
  Trigger: ActionBarTrigger,
  Value: ActionBarValue,
});
