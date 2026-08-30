import {
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerPause,
  TimerPlay,
  TimerReset,
  TimerRestart,
  TimerResume,
  TimerRoot,
  TimerSeparator,
  TimerStart,
} from "./timer";

export type {
  TimerActionTriggerProps,
  TimerAreaProps,
  TimerControlProps,
  TimerItemProps,
  TimerSeparatorProps,
} from "@ark-ui/react/timer";

export type {
  TimerActionProps,
  TimerItemGroupProps,
  TimerItemLabelProps,
  TimerRootProps,
} from "./timer";

export const Timer = Object.assign(TimerRoot, {
  ActionTrigger: TimerActionTrigger,
  Area: TimerArea,
  Control: TimerControl,
  Item: TimerItem,
  ItemGroup: TimerItemGroup,
  ItemLabel: TimerItemLabel,
  Pause: TimerPause,
  Play: TimerPlay,
  Reset: TimerReset,
  Restart: TimerRestart,
  Resume: TimerResume,
  Separator: TimerSeparator,
  Start: TimerStart,
});
