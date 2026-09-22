import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Button, Card } from "@pisagor/react";
import { Timer } from "..";
export function Interval() {
  return (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer interval={100} targetMs={60 * 1000}>
          <Timer.Area>
            <Timer.ItemGroup>
              <Timer.Item type="seconds" />
              <Timer.ItemLabel>seconds</Timer.ItemLabel>
            </Timer.ItemGroup>
            <Timer.Separator />
            <Timer.ItemGroup>
              <Timer.Item type="milliseconds" />
              <Timer.ItemLabel>ms</Timer.ItemLabel>
            </Timer.ItemGroup>
          </Timer.Area>
          <Timer.Control className="w-full justify-center">
            <Timer.Play asChild>
              <Button aria-label="Play" size="icon-sm" variant="ghost">
                <PlayIcon />
              </Button>
            </Timer.Play>
            <Timer.Pause asChild>
              <Button aria-label="Pause" size="icon-sm" variant="ghost">
                <PauseIcon />
              </Button>
            </Timer.Pause>
          </Timer.Control>
        </Timer>
      </Card.Content>
    </Card>
  );
}
