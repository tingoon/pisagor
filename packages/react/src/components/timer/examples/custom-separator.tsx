import { Card } from "@pisagor/react";
import { Timer } from "..";
export function CustomSeparator() {
  return (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart className="items-center gap-2" countdown startMs={5 * 60 * 1000}>
          <Timer.Area>
            <Timer.Item type="minutes" />
            <Timer.Separator>{"//"}</Timer.Separator>
            <Timer.Item type="seconds" />
          </Timer.Area>
        </Timer>
      </Card.Content>
    </Card>
  );
}
