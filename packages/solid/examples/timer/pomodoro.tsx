/** @jsxImportSource solid-js */

import { Button, Card, Timer } from "@pisagor/solid";
import {
  ArrowCounterClockwiseIcon,
  GearIcon,
  PauseIcon,
  PlayIcon,
} from "@pisagor/solid/icons";
export function Pomodoro() {
  return (
    <Card class="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer
          class="items-center justify-center px-10"
          countdown
          startMs={25 * 60 * 1000}
        >
          <span>🍅</span>
          <Timer.Area>
            <Timer.Item class="text-5xl" type="minutes" />
            <Timer.Separator />
            <Timer.Item class="text-5xl" type="seconds" />
          </Timer.Area>
          <span class="mt-0.5 font-medium text-2.5 text-muted-foreground uppercase tracking-[0.22em]">
            Focus
          </span>
          <Timer.Control class="w-full justify-center">
            <Timer.Reset
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Reset"
                  size="icon-md"
                  variant="ghost"
                >
                  <ArrowCounterClockwiseIcon />
                </Button>
              )}
              hidden={false}
            />
            <Timer.Pause
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Pause"
                  class="w-full"
                  variant="ghost"
                >
                  <PauseIcon />
                </Button>
              )}
            />
            <Timer.Play
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Play"
                  class="w-full"
                  variant="ghost"
                >
                  <PlayIcon />
                </Button>
              )}
            />
            <Button aria-label="Settings" size="icon-md" variant="ghost">
              <GearIcon />
            </Button>
          </Timer.Control>
        </Timer>
      </Card.Content>
    </Card>
  );
}
