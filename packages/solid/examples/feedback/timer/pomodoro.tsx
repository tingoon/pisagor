import {
  ArrowCounterClockwiseIcon,
  GearIcon,
  PauseIcon,
  PlayIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Card, Timer } from "@pisagor/solid";

export function Pomodoro() {
  return (
    <Card class="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer.Root
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
          <span class="text-2.5 text-muted-foreground mt-0.5 font-medium tracking-[0.22em] uppercase">
            Focus
          </span>
          <Timer.Control class="w-full justify-center">
            <Timer.Reset
              hidden={false}
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
        </Timer.Root>
      </Card.Content>
    </Card>
  );
}
