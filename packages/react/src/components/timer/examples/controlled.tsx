import { ArrowCounterClockwiseIcon, PlayIcon } from "@phosphor-icons/react";
import { Button, Card } from "@pisagor/react";
import { useState } from "react";
import { Timer } from "..";
export function Controlled() {
  const [ticks, setTicks] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <output className="text-center text-muted-foreground text-sm tabular-nums">
        Ticks: {ticks} {completed ? " — Completed" : ""}
      </output>
      <Card className="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer
            className="items-center gap-2"
            onComplete={() => setCompleted(true)}
            onTick={() => setTicks((t) => t + 1)}
            targetMs={5 * 1000}
          >
            <Timer.Area>
              <Timer.ItemGroup>
                <Timer.Item type="minutes" />
                <Timer.ItemLabel>Minutes</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>Seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
            <Timer.Control>
              <Timer.Start asChild>
                <Button aria-label="Start" size="icon-sm" variant="ghost">
                  <PlayIcon />
                </Button>
              </Timer.Start>
              <Timer.Reset asChild>
                <Button aria-label="Reset" size="icon-sm" variant="ghost">
                  <ArrowCounterClockwiseIcon />
                </Button>
              </Timer.Reset>
            </Timer.Control>
          </Timer>
        </Card.Content>
      </Card>
    </div>
  );
}
