/** @jsxImportSource solid-js */

import { Button, Card, Timer } from "@pisagor/solid";
import { ArrowCounterClockwiseIcon, PlayIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Controlled() {
  const [ticks, setTicks] = createSignal(0);
  const [completed, setCompleted] = createSignal(false);

  return (
    <div class="flex flex-col gap-2">
      <output class="text-center text-muted-foreground text-sm tabular-nums">
        Ticks: {ticks()} {completed() ? " — Completed" : ""}
      </output>
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer
            class="items-center gap-2"
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
              <Timer.Start
                asChild={(props) => (
                  <Button
                    {...props()}
                    aria-label="Start"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <PlayIcon />
                  </Button>
                )}
              />
              <Timer.Reset
                asChild={(props) => (
                  <Button
                    {...props()}
                    aria-label="Reset"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <ArrowCounterClockwiseIcon />
                  </Button>
                )}
              />
            </Timer.Control>
          </Timer>
        </Card.Content>
      </Card>
    </div>
  );
}
