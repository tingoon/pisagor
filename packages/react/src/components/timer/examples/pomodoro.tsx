import { ArrowCounterClockwiseIcon, GearIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Button, Card } from "@pisagor/react";
import { Timer } from "..";
export function Pomodoro() {
  return (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer className="items-center justify-center px-10" countdown startMs={25 * 60 * 1000}>
          <span>🍅</span>
          <Timer.Area>
            <Timer.Item className="text-5xl" type="minutes" />
            <Timer.Separator />
            <Timer.Item className="text-5xl" type="seconds" />
          </Timer.Area>
          <span className="mt-0.5 font-medium text-2.5 text-muted-foreground uppercase tracking-[0.22em]">
            Focus
          </span>
          <Timer.Control className="w-full justify-center">
            <Timer.Reset asChild hidden={false}>
              <Button aria-label="Reset" size="icon-md" variant="ghost">
                <ArrowCounterClockwiseIcon />
              </Button>
            </Timer.Reset>
            <Timer.Pause asChild>
              <Button aria-label="Pause" className="w-full" variant="ghost">
                <PauseIcon />
              </Button>
            </Timer.Pause>
            <Timer.Play asChild>
              <Button aria-label="Play" className="w-full" variant="ghost">
                <PlayIcon />
              </Button>
            </Timer.Play>
            <Button aria-label="Settings" size="icon-md" variant="ghost">
              <GearIcon />
            </Button>
          </Timer.Control>
        </Timer>
      </Card.Content>
    </Card>
  );
}
