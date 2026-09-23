import { Card } from "@pisagor/react";
import { Timer } from "..";
export function OrientationVertical() {
  return (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart className="items-center gap-2" countdown startMs={5 * 60 * 1000}>
          <Timer.Area className="flex-wrap justify-center">
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
