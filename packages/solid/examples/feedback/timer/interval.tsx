import { PauseIcon, PlayIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Card, Timer } from "@pisagor/solid";

export function Interval() {
  return (
    <Card class="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer.Root interval={100} targetMs={60 * 1000}>
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
          <Timer.Control class="w-full justify-center">
            <Timer.Play
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Play"
                  size="icon-sm"
                  variant="ghost"
                >
                  <PlayIcon />
                </Button>
              )}
            />
            <Timer.Pause
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Pause"
                  size="icon-sm"
                  variant="ghost"
                >
                  <PauseIcon />
                </Button>
              )}
            />
          </Timer.Control>
        </Timer.Root>
      </Card.Content>
    </Card>
  );
}
