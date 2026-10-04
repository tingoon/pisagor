/** @jsxImportSource solid-js */
import { Card, Timer } from "@pisagor/solid";
export function OrientationVertical() {
  return (
    <Card class="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer
          autoStart
          class="items-center gap-2"
          countdown
          startMs={5 * 60 * 1000}
        >
          <Timer.Area class="flex-wrap justify-center">
            <Timer.ItemGroup orientation="vertical">
              <Timer.Item type="minutes" />
              <Timer.ItemLabel>minutes</Timer.ItemLabel>
            </Timer.ItemGroup>
            <Timer.Separator />
            <Timer.ItemGroup orientation="vertical">
              <Timer.Item type="seconds" />
              <Timer.ItemLabel>seconds</Timer.ItemLabel>
            </Timer.ItemGroup>
          </Timer.Area>
        </Timer>
      </Card.Content>
    </Card>
  );
}
