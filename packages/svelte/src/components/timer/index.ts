import TimerActionTrigger from "./timer-action-trigger.svelte";
import TimerArea from "./timer-area.svelte";
import TimerControl from "./timer-control.svelte";
import TimerItem from "./timer-item.svelte";
import TimerItemGroup from "./timer-item-group.svelte";
import TimerItemLabel from "./timer-item-label.svelte";
import TimerPause from "./timer-pause.svelte";
import TimerPlay from "./timer-play.svelte";
import TimerReset from "./timer-reset.svelte";
import TimerRestart from "./timer-restart.svelte";
import TimerResume from "./timer-resume.svelte";
import TimerRoot from "./timer-root.svelte";
import TimerSeparator from "./timer-separator.svelte";
import TimerStart from "./timer-start.svelte";

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
